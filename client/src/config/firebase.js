// src/config/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAHVehruv5JUCd0ybMbyzBgogZ1PSebBYU",
  authDomain: "budget-manager-487ff.firebaseapp.com",
  projectId: "budget-manager-487ff",
  storageBucket: "budget-manager-487ff.appspot.com",
  messagingSenderId: "710463488880",
  appId: "1:710463488880:web:4211ed875eb76be61345b5"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
