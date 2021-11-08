import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import ReactDOM from "react-dom";

import Player from "./Player";
import Proximity from "./puzzles/Proximity";
import Letter from "./puzzles/Letter";
import Library from "./puzzles/Library";
import UserContext from "./UserContext";
import "./styles.css";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDvz6cUCCEsDOhPRMd0RXqwqXbP_m0whys",
  authDomain: "mystery-261915.firebaseapp.com",
  projectId: "mystery-261915",
  storageBucket: "mystery-261915.appspot.com",
  messagingSenderId: "149779715700",
  appId: "1:149779715700:web:ace0e9f3ce1a0958c66321",
  measurementId: "G-L00Z7BGT1F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function App() {
  const [user, setUser] = useState(null);

  return (
    <div className="App">
      <div className="App-header">
        <Player />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
