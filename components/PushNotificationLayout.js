import React, { useEffect } from "react";
import * as firebase from "firebase/app";
import "firebase/messaging";
import { firebaseCloudMessaging } from "../utils/firebase";
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/router";
import { getMessaging, onMessage } from "firebase/messaging";
import { initializeApp } from "firebase/app";


function PushNotificationLayout({ children }) {
  const router = useRouter();
  useEffect(() => {
    setToken();

    // Event listener that listens for the push notification event in the background
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.addEventListener("message", (event) => {
        console.log("event for the service worker", event);
      });
    }

    // Calls the getMessage() function if the token is there
    async function setToken() {
      try {
        const token = await firebaseCloudMessaging.init();

        if (token) {
          console.log("token", token);
          getMessage();
        }
      } catch (error) {
        console.log(error);
      }
    }
  });

  // Handles the click function on the toast showing push notification
  const handleClickPushNotification = (url) => {
    router.push(url);
  };

  // Get the push notification message and triggers a toast to display it
  function getMessage() {
    // const messaging = firebase.messaging();
   // const app = initializeApp(firebaseConfig);
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
      onMessage(messaging, (payload) => {
        console.log('Message received. ', payload);
      toast(
        <div onClick={() => handleClickPushNotification(message?.data?.url)}>
          <h5>{message?.notification?.title}</h5>
          <h6>{message?.notification?.body}</h6>
        </div>,
        {
          closeOnClick: false,
        }
      );
    });
  }

  return (
    <>
      <ToastContainer />
      {children}
    </>
  );
}

export default PushNotificationLayout;