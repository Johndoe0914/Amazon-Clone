import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDROYVDKCZYlEL7IcCXsJ88VjlIj1U19wk",
  authDomain: "clone-42d37.firebaseapp.com",
  databaseURL: "https://clone-42d37.firebaseio.com",
  projectId: "clone-42d37",
  storageBucket: "clone-42d37.appspot.com",
  messagingSenderId: "972336209022",
  appId: "1:972336209022:web:ab1fd8b1271387135f8c2f",
  measurementId: "G-HN6V5WGBTS",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
