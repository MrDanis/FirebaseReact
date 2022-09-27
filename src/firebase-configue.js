import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore"
const firebaseConfig = {
    apiKey: "AIzaSyDa0o_zKzfcbYZjXHmeW57H5eBewnVe1Jk",
    authDomain: "recttest-b0cf7.firebaseapp.com",
    projectId: "recttest-b0cf7",
    storageBucket: "recttest-b0cf7.appspot.com",
    messagingSenderId: "636146713421",
    appId: "1:636146713421:web:3148da91b67ae2f4086d04",
    measurementId: "G-3LHST513NM"
  };
  const app = initializeApp(firebaseConfig);
 export const db = getFirestore(app);