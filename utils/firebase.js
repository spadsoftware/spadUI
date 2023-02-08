import firebase from "firebase/app"
import { initializeApp } from "firebase/app";

import '@firebase/messaging';
import { getMessaging, getToken} from 'firebase/messaging';

import localforage from "localforage";

const firebaseCloudMessaging = {
  init: async () => {
    if (!firebase?.apps?.length) {

      // Initialize the Firebase app with the credentials
    //   firebase?.initializeApp({
    //     apiKey: "AIzaSyB0F8GIb6mwBihDACRBZZuEiePR-NK1PR4",
    //     authDomain: "spadsoftware-e408e.firebaseapp.com",
    //     projectId: "spadsoftware-e408e",
    //     storageBucket: "spadsoftware-e408e.appspot.com",
    //     messagingSenderId: "1085795151920",
    //     appId: "1:1085795151920:web:87f4b9abf5590d180cbdf5",
    //   });
      const firebaseConfig = {
        apiKey: "AIzaSyB0F8GIb6mwBihDACRBZZuEiePR-NK1PR4",
        authDomain: "spadsoftware-e408e.firebaseapp.com",
        projectId: "spadsoftware-e408e",
        storageBucket: "spadsoftware-e408e.appspot.com",
        messagingSenderId: "1085795151920",
        appId: "1:1085795151920:web:87f4b9abf5590d180cbdf5",
      }
      const app = initializeApp(firebaseConfig);

      try {
      //  const messaging = firebase.messaging();
      const messaging = getMessaging(app);

        const tokenInLocalForage = await localforage.getItem("fcm_token");

         // Return the token if it is alredy in our local storage
        if (tokenInLocalForage !== null) {
          return tokenInLocalForage;
        }

        // Request the push notification permission from browser
        const status = await Notification.requestPermission();
        if (status && status === "granted") {
        // Get new token from Firebase
          const fcm_token = await getToken(messaging, {
            vapidKey: "BDV95MBrRKg-Q5IgTIgwA_obgr-jzSXcbj-6wnzezN1ZMyj3RrVjgBFspcuG3pWfjtlH-mcLVZnDIonAS3QD7F4",
          });

          // Set token in our local storage
          if (fcm_token) {
            localforage.setItem("fcm_token", fcm_token);
            return fcm_token;
          }
        }
      } catch (error) {
        console.error(error);
        return null;
      }
    }
  },
};
export { firebaseCloudMessaging };