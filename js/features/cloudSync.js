import { syncConfig } from "../config/syncConfig.js";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail
} from "firebase/auth";

// Use Firestore REST API directly to avoid watch stream SDK bugs.
// Auth SDK is unaffected; only Firestore reads/writes go through REST.
const { projectId } = syncConfig.firebase;
const FIRESTORE_BASE = `https://firestore.googleapis.com/v1/projects/${projectId}/databases/(default)/documents`;

async function firestoreGet(path, idToken) {
  const res = await fetch(`${FIRESTORE_BASE}/${path}`, {
    headers: { Authorization: `Bearer ${idToken}` }
  });
  if (res.status === 404) return null;
  if (!res.ok) throw new Error(`Firestore GET failed: ${res.status}`);
  const body = await res.json();
  // Data is stored as a single JSON blob in the "payload" stringValue field
  const raw = body.fields?.payload?.stringValue;
  return raw ? JSON.parse(raw) : null;
}

async function firestoreSet(path, data, idToken) {
  const body = {
    fields: {
      payload: { stringValue: JSON.stringify(data) }
    }
  };
  const res = await fetch(`${FIRESTORE_BASE}/${path}?updateMask.fieldPaths=payload`, {
    method: "PATCH",
    headers: {
      Authorization: `Bearer ${idToken}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body)
  });
  if (!res.ok) throw new Error(`Firestore PATCH failed: ${res.status}`);
}

export async function setupCloudSync({
  elements,
  state,
  getLocalPayload,
  applyRemotePayload,
  onLocalStateApplied,
  onLocalStateSaved
}) {
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

  const app = initializeApp(syncConfig.firebase);
  const auth = getAuth(app);

  let currentUser = null;
  let uploadTimer = null;

  async function getIdToken() {
    if (!currentUser) throw new Error("Not logged in.");
    return currentUser.getIdToken();
  }

  async function pullOrPushOnLogin(user) {
    const idToken = await user.getIdToken();
    const path = `quizStates/${user.uid}`;
    const remotePayload = await firestoreGet(path, idToken);
    const localPayload = getLocalPayload();

    if (!remotePayload) {
      await firestoreSet(path, localPayload, idToken);
      setStatus(`Connected: ${user.email || user.uid}. Uploaded local progress.`);
      return;
    }

    const remoteSavedAt = Number(remotePayload.savedAt || 0);
    const localSavedAt = Number(localPayload.savedAt || 0);

    if (remoteSavedAt > localSavedAt) {
      applyRemotePayload(remotePayload);
      onLocalStateApplied();
      setStatus(`Connected: ${user.email || user.uid}. Downloaded newer cloud progress.`);
    } else {
      await firestoreSet(path, localPayload, idToken);
      setStatus(`Connected: ${user.email || user.uid}. Cloud synced.`);
    }
  }

  async function pullNow() {
    if (!currentUser) {
      setStatus("Log in first to pull cloud data.");
      return;
    }
    const idToken = await getIdToken();
    const remotePayload = await firestoreGet(`quizStates/${currentUser.uid}`, idToken);
    if (!remotePayload) {
      setStatus("No cloud data found yet.");
      return;
    }
    applyRemotePayload(remotePayload);
    onLocalStateApplied();
    setStatus("Pulled cloud progress to this device.");
  }

  async function uploadNow() {
    if (!currentUser) {
      setStatus("Log in first to sync.");
      return;
    }
    const idToken = await getIdToken();
    const payload = getLocalPayload();
    await firestoreSet(`quizStates/${currentUser.uid}`, payload, idToken);
    const syncMeta = {
      ...payload,
      cloudSyncedAt: Date.now(),
      userEmail: currentUser.email || ""
    };
    onLocalStateSaved(syncMeta);
    setAccountInfo(syncMeta.userEmail, syncMeta.cloudSyncedAt);
    setStatus(`Synced at ${new Date().toLocaleTimeString()}.`);
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
