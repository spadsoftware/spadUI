importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js');
const firebaseConfig = {
    apiKey: "AIzaSyB0F8GIb6mwBihDACRBZZuEiePR-NK1PR4",
    authDomain: "spadsoftware-e408e.firebaseapp.com",
    projectId: "spadsoftware-e408e",
    storageBucket: "spadsoftware-e408e.appspot.com",
    messagingSenderId: "1085795151920",
    appId: "1:1085795151920:web:87f4b9abf5590d180cbdf5",
};
firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log('Received background message ', payload);
 // Customize notification here
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle,
    notificationOptions);
});

//https://www.audreyhal.com/blog/push-notifications-with-firebase-in-react