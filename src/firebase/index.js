import firebase from "firebase"
import "firebase/storage";
 

// For Firebase 
const firebaseConfig = {
    apiKey: "AIzaSyBKr8WGMzXDjZd5rYvF5FRWXwhDpcWDj4g",
    authDomain: "imgur-alternative.firebaseapp.com",
    databaseURL: "https://imgur-alternative.firebaseio.com",
    projectId: "imgur-alternative",
    storageBucket: "imgur-alternative.appspot.com",
    messagingSenderId: "888535253953",
    appId: "1:888535253953:web:40ec59fe10954a764ea540",
    measurementId: "G-MLZW4BZGZS"
  };


firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { storage, firebase as default };