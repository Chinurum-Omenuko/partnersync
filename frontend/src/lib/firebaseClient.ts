// lib/firebase.ts
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyC-PyX660oChqqXf9TCKNPiECZ2ox_jSzc",
  authDomain: "partnersync-e94e2.firebaseapp.com",
  projectId: "partnersync-e94e2",
  storageBucket: "partnersync-e94e2.firebasestorage.app",
  messagingSenderId: "836841999456",
  appId: "1:836841999456:web:a824817c7959cffe4dc705",
  measurementId: "G-11YSRZ47XS"
};

export const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);