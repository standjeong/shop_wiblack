import { initializeApp } from 'firebase/app';
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import { getDatabase, ref, get, set, remove } from 'firebase/database';
import { v4 as uuidv4 } from 'uuid';

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

export async function addNewProduct(product, imgUrl) {
  const id = uuidv4();
  return set(ref(database, `products/${id}`), {
    productId: id,
    ...product,
    price: parseInt(product.price),
    image: imgUrl,
    option: product.option.split(','),
  });
}

export async function getProducts() {
  return get(ref(database, 'products')).then((snapshot) => {
    if (snapshot.exists()) {
      return Object.values(snapshot.val());
    }
    return [];
  });
}

export async function getCart(userId) {
  return get(ref(database, `carts/${userId}`)).then((snapshot) => {
    if (snapshot.exists()) {
      return Object.values(snapshot.val());
    }
    return [];
  });
}

export async function addOrUpdateToCart(product, userId) {
  const orderId = product.productId + product.size;
  return set(ref(database, `carts/${userId}/${orderId}`), {
    orderId,
    ...product,
  });
}

export async function deleteFromCart(userId, orderId) {
  return remove(ref(database, `carts/${userId}/${orderId}`));
}
