import { StrictMode } from "react";
import ReactDOM from "react-dom";
// import * as firebase from "firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

import App from "./App";
const firebaseConfig = {
  // Fill up the config to run the app
};

firebase.default.initializeApp(firebaseConfig);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);
