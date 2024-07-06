// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signOut,
} from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { signInWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDalRCHJ8Zb3ZnbCfxp4w7XdZb9rDS1wSo",
  authDomain: "netflix-clone-29d60.firebaseapp.com",
  projectId: "netflix-clone-29d60",
  storageBucket: "netflix-clone-29d60.appspot.com",
  messagingSenderId: "787581304680",
  appId: "1:787581304680:web:f104620df06e2235bb20dd",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password) => {
  try {
    const response = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = response.user;
    await addDoc(collection(db, "user"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (error) {
    toast.error("Đăng ký không thành công");
  }
};
const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    toast.error("Đăng nhập không thành công");
  }
};
const logout = () => {
  signOut(auth);
};

export { auth, db, signup, login, logout };
