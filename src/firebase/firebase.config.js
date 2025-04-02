import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDKcqRDN4tIeJYG_JtiwyIUetyD88vbMFg",
  authDomain: "fin-ai-0.firebaseapp.com",
  projectId: "fin-ai-0",
  storageBucket: "fin-ai-0.firebasestorage.app",
  messagingSenderId: "787446592920",
  appId: "1:787446592920:web:110dce48e8042a17c8e7ed"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;