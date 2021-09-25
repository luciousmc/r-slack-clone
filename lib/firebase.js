import { getStorage } from '@firebase/storage';
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  GoogleAuthProvider,
  FacebookAuthProvider,
} from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCnT0ZpVR9UM-GxQyUDEGBllUyezLTYlp8',
  authDomain: 'r-slack-clone.firebaseapp.com',
  projectId: 'r-slack-clone',
  storageBucket: 'r-slack-clone.appspot.com',
  messagingSenderId: '648070234744',
  appId: '1:648070234744:web:be338a90e0df35c5c4e38d',
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore();
const auth = getAuth();
const storage = getStorage(firebaseApp);
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

export { db, auth, googleProvider, facebookProvider, storage };
