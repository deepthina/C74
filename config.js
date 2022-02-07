import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyA5fnxL27AtxPMdWp7u3HWmcNy6zLiA3gM",
  authDomain: "wily-17th-jan.firebaseapp.com",
  projectId: "wily-17th-jan",
  storageBucket: "wily-17th-jan.appspot.com",
  messagingSenderId: "995560301550",
  appId: "1:995560301550:web:a39d45965d35b90e98e4ff",
};

if (!firebase.apps.length) firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
