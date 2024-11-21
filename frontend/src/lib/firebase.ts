// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC-PyX660oChqqXf9TCKNPiECZ2ox_jSzc",
  authDomain: "partnersync-e94e2.firebaseapp.com",
  projectId: "partnersync-e94e2",
  storageBucket: "partnersync-e94e2.firebasestorage.app",
  messagingSenderId: "836841999456",
  appId: "1:836841999456:web:a824817c7959cffe4dc705",
  measurementId: "G-11YSRZ47XS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);