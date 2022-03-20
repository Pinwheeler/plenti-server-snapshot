// Import the functions you need from the SDKs you need
import { FirebaseApp, initializeApp } from "firebase/app";
import React from "react";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAvvE04_3X36WH6Kd3Scj_bF_MTORf-aUM",
  authDomain: "plenti-8a8e6.firebaseapp.com",
  databaseURL: "https://plenti-8a8e6.firebaseio.com",
  projectId: "plenti-8a8e6",
  storageBucket: "plenti-8a8e6.appspot.com",
  messagingSenderId: "701415788135",
  appId: "1:701415788135:web:3d66597cff87e5ab4c8ec2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

interface IFirebaseContext {
  app: FirebaseApp;
}

export const FirebaseContext = React.createContext({} as IFirebaseContext);

export const FirebaseProvider: React.FC = (props) => {
  const value = {
    app,
  };

  return (
    <FirebaseContext.Provider value={value}>
      {props.children}
    </FirebaseContext.Provider>
  );
};
