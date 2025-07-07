// Firebase SDK
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'

const firebaseConfig = {
    apiKey: "AIzaSyA5CF7Q-uSCAQweSkeSUl6E3VkdaUrvkZc",
    authDomain: "tato-port.firebaseapp.com",
    projectId: "tato-port",
    storageBucket: "tato-port.firebasestorage.app",
    messagingSenderId: "385625531781",
    appId: "1:385625531781:web:208cd394e93b88156090ec",
    measurementId: "G-T37ZDY59WC"
  };

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics }