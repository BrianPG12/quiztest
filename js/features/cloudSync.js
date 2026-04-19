import { syncConfig } from "../config/syncConfig.js";
import { initializeApp, getApp, getApps } from "firebase/app";
import {
  getAuth,
  onAuthStateChanged,
  setPersistence,
  browserLocalPersistence,
  inMemoryPersistence,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore/lite";

const MAX_CLOUD_PAYLOAD_BYTES = 850000;
const COMPACT_DRAWING_BUDGET_BYTES = 220000;

export async function setupCloudSync({
  elements,
  state,
  getLocalPayload,
  applyRemotePayload,
  onLocalStateApplied,
  onLocalStateSaved
}) {
  function estimatePayloadSize(payload) {
    try {
      return new Blob([JSON.stringify(payload)]).size;
    } catch {
      return JSON.stringify(payload).length;
    }
  }

  function buildCompactCloudPayload(payload) {
    const compact = {
      ...payload,
      drawingsByKana: {}
    };

    const source = payload && payload.drawingsByKana && typeof payload.drawingsByKana === "object"
      ? payload.drawingsByKana
      : {};

    let usedBytes = 0;
    Object.keys(source).forEach((kanaChar) => {
      const drawings = Array.isArray(source[kanaChar]) ? source[kanaChar] : [];
      if (drawings.length === 0) {
        return;
      }

      const firstDrawing = typeof drawings[0] === "string" ? drawings[0] : null;
      if (!firstDrawing) {
        return;
      }

      const drawingSize = firstDrawing.length;
      if (usedBytes + drawingSize > COMPACT_DRAWING_BUDGET_BYTES) {
        return;
      }

      compact.drawingsByKana[kanaChar] = [firstDrawing];
      usedBytes += drawingSize;
    });

    return compact;
  }

  async function writeCloudState(stateRef, payload) {
    const payloadSize = estimatePayloadSize(payload);
    if (payloadSize <= MAX_CLOUD_PAYLOAD_BYTES) {
      await setDoc(stateRef, payload);
      return { writtenPayload: payload, usedCompactPayload: false };
    }

    const compactPayload = buildCompactCloudPayload(payload);
    await setDoc(stateRef, compactPayload);
    return { writtenPayload: compactPayload, usedCompactPayload: true };
  }

  function setStatus(text) {
    elements.syncStatus.textContent = text;
    elements.syncStatus.classList.remove("ok", "bad");
    if (/error|disabled|unavailable/i.test(text)) {
      elements.syncStatus.classList.add("bad");
    } else if (/connected|synced|uploaded|downloaded|pulled|ready|created|logged out/i.test(text)) {
      elements.syncStatus.classList.add("ok");
    }
  }

  function disableAuthButtons(disabled) {
    elements.signUpBtn.disabled = disabled;
    elements.loginBtn.disabled = disabled;
    elements.logoutBtn.disabled = disabled;
    elements.syncNowBtn.disabled = disabled;
    elements.forcePullBtn.disabled = disabled;
    elements.forcePushBtn.disabled = disabled;
  }

  function setAccountInfo(userEmail, lastSyncedAt) {
    if (!userEmail) {
      elements.syncAccountInfo.textContent = "Not signed in.";
      return;
    }

    const syncText = lastSyncedAt
      ? ` Last synced: ${new Date(lastSyncedAt).toLocaleString()}.`
      : "";
    elements.syncAccountInfo.textContent = `Signed in as ${userEmail}.${syncText}`;
  }

  if (!syncConfig.enabled) {
    setStatus("Cloud sync disabled. Add Firebase config in js/config/syncConfig.js.");
    disableAuthButtons(true);
    return createNoopSync();
  }

  const app = getApps().length ? getApp() : initializeApp(syncConfig.firebase);
  const auth = getAuth(app);
  const db = getFirestore(app);

  try {
    await setPersistence(auth, browserLocalPersistence);
  } catch {
    await setPersistence(auth, inMemoryPersistence);
  }

  let currentUser = null;
  let uploadTimer = null;

  async function pullOrPushOnLogin(user) {
    const stateRef = doc(db, "quizStates", user.uid);
    const remoteSnap = await getDoc(stateRef);
    const localPayload = getLocalPayload();

    if (!remoteSnap.exists()) {
      const writeResult = await writeCloudState(stateRef, localPayload);
      setStatus(writeResult.usedCompactPayload
        ? `Connected: ${user.email || user.uid}. Uploaded local progress (compact cloud payload).`
        : `Connected: ${user.email || user.uid}. Uploaded local progress.`);
      return;
    }

    const remotePayload = remoteSnap.data();

    const remoteSavedAt = Number(remotePayload.savedAt || 0);
    const localSavedAt = Number(localPayload.savedAt || 0);

    if (remoteSavedAt > localSavedAt) {
      applyRemotePayload(remotePayload);
      onLocalStateApplied();
      setStatus(`Connected: ${user.email || user.uid}. Downloaded newer cloud progress.`);
    } else {
      const writeResult = await writeCloudState(stateRef, localPayload);
      setStatus(writeResult.usedCompactPayload
        ? `Connected: ${user.email || user.uid}. Cloud synced (compact cloud payload).`
        : `Connected: ${user.email || user.uid}. Cloud synced.`);
    }
  }

  async function pullNow() {
    if (!currentUser) {
      setStatus("Log in first to pull cloud data.");
      return;
    }

    const stateRef = doc(db, "quizStates", currentUser.uid);
    const remoteSnap = await getDoc(stateRef);
    if (!remoteSnap.exists()) {
      setStatus("No cloud data found yet.");
      return;
    }

    applyRemotePayload(remoteSnap.data());
    onLocalStateApplied();
    setStatus("Pulled cloud progress to this device.");
  }

  async function uploadNow() {
    if (!currentUser) {
      setStatus("Log in first to sync.");
      return;
    }

    const stateRef = doc(db, "quizStates", currentUser.uid);
    const payload = getLocalPayload();
    const writeResult = await writeCloudState(stateRef, payload);
    const syncMeta = {
      ...writeResult.writtenPayload,
      cloudSyncedAt: Date.now(),
      userEmail: currentUser.email || ""
    };
    onLocalStateSaved(syncMeta);
    setAccountInfo(syncMeta.userEmail, syncMeta.cloudSyncedAt);
    setStatus(writeResult.usedCompactPayload
      ? `Synced at ${new Date().toLocaleTimeString()} (compact cloud payload).`
      : `Synced at ${new Date().toLocaleTimeString()}.`);
  }

  function queueUpload() {
    if (!currentUser) {
      return;
    }

    if (uploadTimer) {
      clearTimeout(uploadTimer);
    }

    uploadTimer = setTimeout(() => {
      uploadTimer = null;
      uploadNow().catch((error) => {
        setStatus(`Sync error: ${error.message}`);
      });
    }, 600);
  }

  disableAuthButtons(false);
  setAccountInfo(state.syncUserEmail || "", state.lastCloudSyncAt || 0);
  setStatus("Cloud sync ready. Log in to link data across devices.");

  elements.signUpBtn.addEventListener("click", async () => {
    try {
      const email = elements.syncEmail.value.trim();
      const password = elements.syncPassword.value;
      if (!email || !password) {
        setStatus("Enter email and password first.");
        return;
      }
      await createUserWithEmailAndPassword(auth, email, password);
      setStatus("Account created.");
    } catch (error) {
      setStatus(`Sign up error: ${error.message}`);
    }
  });

  elements.loginBtn.addEventListener("click", async () => {
    try {
      const email = elements.syncEmail.value.trim();
      const password = elements.syncPassword.value;
      if (!email || !password) {
        setStatus("Enter email and password first.");
        return;
      }
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      setStatus(`Login error: ${error.message}`);
    }
  });

  elements.forgotPasswordBtn.addEventListener("click", async () => {
    try {
      const email = elements.syncEmail.value.trim();
      if (!email) {
        setStatus("Enter your email then tap Forgot Password.");
        return;
      }
      await sendPasswordResetEmail(auth, email);
      setStatus("Password reset email sent.");
    } catch (error) {
      setStatus(`Reset error: ${error.message}`);
    }
  });

  elements.logoutBtn.addEventListener("click", async () => {
    try {
      await signOut(auth);
      setStatus("Logged out.");
    } catch (error) {
      setStatus(`Logout error: ${error.message}`);
    }
  });

  elements.syncNowBtn.addEventListener("click", () => {
    uploadNow().catch((error) => {
      setStatus(`Sync error: ${error.message}`);
    });
  });

  elements.forcePullBtn.addEventListener("click", () => {
    pullNow().catch((error) => {
      setStatus(`Pull error: ${error.message}`);
    });
  });

  elements.forcePushBtn.addEventListener("click", () => {
    uploadNow().catch((error) => {
      setStatus(`Push error: ${error.message}`);
    });
  });

  onAuthStateChanged(auth, async (user) => {
    currentUser = user;
    if (!user) {
      setAccountInfo("", 0);
      setStatus("Cloud sync ready. Log in to link data across devices.");
      return;
    }

    setAccountInfo(user.email || user.uid, state.lastCloudSyncAt || 0);

    try {
      await pullOrPushOnLogin(user);
    } catch (error) {
      setStatus(`Cloud sync error: ${error.message}`);
    }
  });

  return {
    queueUpload,
    async syncNow() {
      await uploadNow();
    },
    async forcePull() {
      await pullNow();
    },
    async forcePush() {
      await uploadNow();
    }
  };
}

function createNoopSync() {
  return {
    queueUpload() {},
    async syncNow() {},
    async forcePull() {},
    async forcePush() {}
  };
}
