import firebase from "firebase";

const config = {
  apiKey: "AIzaSyDM7Dyim6vi_5h3lvz0wTASAFoqkZFFyTY",
  authDomain: "hot-takes-76357.firebaseapp.com",
  databaseURL: "https://hot-takes-76357.firebaseio.com",
  projectId: "hot-takes-76357",
  storageBucket: "hot-takes-76357.appspot.com",
  messagingSenderId: "343064017762"
};

firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
