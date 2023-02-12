import firebase from "firebase/app"
import { initializeApp } from "firebase/app";

import '@firebase/messaging';
import { getMessaging, getToken,onMessage} from 'firebase/messaging';

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
      // console.log("status")
      try {
      //  const messaging = firebase.messaging();
      const messaging = getMessaging(app);
      
        const tokenInLocalForage = await localforage.getItem("fcm_token");
        // console.log("tokenInLocalForage",tokenInLocalForage)

         // Return the token if it is alredy in our local storage
        // if (tokenInLocalForage !== null) {
        //   return tokenInLocalForage;
        // }

        // Request the push notification permission from browser

        const status = await Notification.requestPermission();
        Notification.requestPermission().then(function(permission) {
             // console.log('permiss', permission)
            
            });
          //  subscribeToTopic("LOGROCKET_PUB_SUB_TOPICS", tokenInLocalForage);
        // console.log("statuw",status);

        getToken(messaging, {
            vapidKey: "BDV95MBrRKg-Q5IgTIgwA_obgr-jzSXcbj-6wnzezN1ZMyj3RrVjgBFspcuG3pWfjtlH-mcLVZnDIonAS3QD7F4",
          }).then((currentToken) => {
        console.log("currentToken",currentToken)
            if (currentToken) {
              const FIREBASE_API_KEY = `AAAA_M5vMDA:APA91bEhXjLPG3o6riCgSFA5OLGKEO2zycv_9EoKzmoJFP_4unn_3VlxEFDjwqXRnVvVCBK4XMS0IGNVlYhH-Voxy1y4hlED8Bp7_GFArRQtpSGp9aINIkntGkPX_NKb9ixbv18sth58`;
              // Subscribe to the topic
              const topicURL = `https://iid.googleapis.com/iid/v1/${currentToken}/rel/topics/SPAD_PUB_SUB_TOPICS`;
              // console.log(topicURL)

              fetch(
                topicURL,
                {
                  headers: {
                    'Authorization': `key=${FIREBASE_API_KEY}`,
                    'Content-Type': 'application/json',
                  },
                  method: 'POST'
                }
        
              )
                .then((response) => {
                    onMessage(messaging, (payload) => {
                   
                      // console.log("payload")
                    }),
                    (error) => {
                      // console.log(error);
                    }
                 } )
                // })
                .catch((err) => {
                  console.error(`Can't subscribe to "LOGROCKET_PUB_SUB_TOPICS" topic`,err);
                });
            }
        
        });

        if (status && status === "granted") {
        // Get new token from Firebase
          const fcm_token = await getToken(messaging, {
            vapidKey: "BDV95MBrRKg-Q5IgTIgwA_obgr-jzSXcbj-6wnzezN1ZMyj3RrVjgBFspcuG3pWfjtlH-mcLVZnDIonAS3QD7F4",
          });
          // console.log("statuwsds",status)

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

// const subscribeToTopic = (topicName, tkn) =>
// {
// // console.log("statuwwewewew")

// }
export { firebaseCloudMessaging };