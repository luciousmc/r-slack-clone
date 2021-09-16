import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCnT0ZpVR9UM-GxQyUDEGBllUyezLTYlp8",
  authDomain: "r-slack-clone.firebaseapp.com",
  projectId: "r-slack-clone",
  storageBucket: "r-slack-clone.appspot.com",
  messagingSenderId: "648070234744",
  appId: "1:648070234744:web:be338a90e0df35c5c4e38d",
};

const app = initializeApp();

const db = getFireStore();
const auth = getAuth();
