import firebase from "firebase/app"
import "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyB-SEK6qxIPNFgH3vCUzZjkdaLRKxC3m3o",
  authDomain: "next-typescript-f0ae2.firebaseapp.com",
  projectId: "next-typescript-f0ae2",
  storageBucket: "next-typescript-f0ae2.appspot.com",
  messagingSenderId: "897325945831",
  appId: "1:897325945831:web:b4c3c45f1935044454e342"
};

if (!firebase.apps.length){
  firebase.initializeApp(firebaseConfig)
}

const firestore = firebase.firestore();

export {firestore}