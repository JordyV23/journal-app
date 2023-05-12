import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";


const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEYFirestore,
  authDomain: import.meta.env.VITE_AUTHDOMAINFirestore,
  projectId: import.meta.env.VITE_PROJECTIDFirestore,
  torageBucket: import.meta.env.VITE_STORAGEBUCKETFirestore,
  messagingSenderId: import.meta.env.VITE_MESAGINGSENDERIDFirestore,
  appId: import.meta.env.VITE_APPIDFirestore,
};

export const FirebaseApp = initializeApp(firebaseConfig);

export const FirebaseAuth = getAuth(FirebaseApp);

export const FirebaseDB = getFirestore(FirebaseApp);
