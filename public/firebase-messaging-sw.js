importScripts("https://www.gstatic.com/firebasejs/7.9.1/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/7.9.1/firebase-messaging.js");

const firebaseConfig = {
    apiKey: "AIzaSyB0F8GIb6mwBihDACRBZZuEiePR-NK1PR4",
    authDomain: "spadsoftware-e408e.firebaseapp.com",
    projectId: "spadsoftware-e408e",
    storageBucket: "spadsoftware-e408e.appspot.com",
    messagingSenderId: "1085795151920",
    appId: "1:1085795151920:web:87f4b9abf5590d180cbdf5",
  }
const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);