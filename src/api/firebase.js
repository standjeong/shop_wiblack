import { initializeApp } from 'firebase/app';
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import { getDatabase, ref, get } from 'firebase/database';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const database = getDatabase(app);

export function login() {
  signInWithPopup(auth, provider).catch(console.error);
}

export function logout() {
  signOut(auth);
}

export function onUserStateChange(callback) {
  onAuthStateChanged(auth, async (currentUser) => {
    // console.log('firebase state change에서', currentUser);
    if (currentUser) {
      const isAdmin = await checkIsAdmin(currentUser.uid);
      callback({ ...currentUser, isAdmin });
    } else {
      callback(false);
    }
  });
}

async function checkIsAdmin(uid) {
  return get(ref(database, 'admins')).then((snapshot) => {
    if (snapshot.exists()) {
      const adminList = snapshot.val();
      return adminList.includes(uid);
    }
    return false;
  });
}
