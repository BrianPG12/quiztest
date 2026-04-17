import { syncConfig } from "../config/syncConfig.js";

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

  async function importWithFallback(urls, moduleName) {
    let lastError = null;
    for (const url of urls) {
      try {
        return await import(url);
      } catch (error) {
        lastError = error;
      }
    }

    const message = lastError && lastError.message ? lastError.message : "unknown network error";
    throw new Error(`${moduleName} failed to load (${message}).`);
  }

  if (!syncConfig.enabled) {
    setStatus("Cloud sync disabled. Add Firebase config in js/config/syncConfig.js.");
    disableAuthButtons(true);
    return createNoopSync();
  }

  let initializeApp;
  let getAuth;
  let onAuthStateChanged;
  let createUserWithEmailAndPassword;
  let signInWithEmailAndPassword;
  let signOut;
  let getFirestore;
  let doc;
  let getDoc;
  let setDoc;

  try {
    ({ initializeApp } = await importWithFallback([
      "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js",
      "https://cdn.jsdelivr.net/npm/firebase@10.12.5/firebase-app.js"
    ], "Firebase app module"));

    ({
      getAuth,
      onAuthStateChanged,
      createUserWithEmailAndPassword,
      signInWithEmailAndPassword,
      signOut
    } = await importWithFallback([
      "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js",
      "https://cdn.jsdelivr.net/npm/firebase@10.12.5/firebase-auth.js"
    ], "Firebase auth module"));

    ({ getFirestore, doc, getDoc, setDoc } = await importWithFallback([
      "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js",
      "https://cdn.jsdelivr.net/npm/firebase@10.12.5/firebase-firestore.js"
    ], "Firebase firestore module"));
  } catch (error) {
    disableAuthButtons(true);
    setStatus(`Cloud sync unavailable in this browser/network. ${error.message} Disable Opera ad/tracker blocking for this site and reload.`);
    return createNoopSync();
  }

  const app = initializeApp(syncConfig.firebase);
  const auth = getAuth(app);
  const db = getFirestore(app);

  let currentUser = null;
  let uploadTimer = null;

  async function pullOrPushOnLogin(user) {
    const stateRef = doc(db, "quizStates", user.uid);
    const remoteSnap = await getDoc(stateRef);
    const localPayload = getLocalPayload();

    if (!remoteSnap.exists()) {
      await setDoc(stateRef, localPayload);
      setStatus(`Connected: ${user.email || user.uid}. Uploaded local progress.`);
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
      await setDoc(stateRef, localPayload);
      setStatus(`Connected: ${user.email || user.uid}. Cloud synced.`);
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
    await setDoc(stateRef, payload);
    onLocalStateSaved(payload);
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
      setStatus("Cloud sync ready. Log in to link data across devices.");
      return;
    }

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
