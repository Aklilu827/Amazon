import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

import {getAnalytics}from "firebase/analytics"
import {initializApp} from "firebase/app"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyCcqlWB2-yEUE3iyTVzvcMmJp8vwKKTsi0",
//   authDomain: "fir-b528c.firebaseapp.com",
//   databaseURL: "https://fir-b528c-default-rtdb.firebaseio.com",
//   projectId: "fir-b528c",
//   storageBucket: "fir-b528c.appspot.com",
//   messagingSenderId: "232171348996",
//   appId: "1:232171348996:web:db30e464cad8fa3b524151",
//   measurementId: "G-6P4T2F2B2W"
// };
const firebaseConfig = {
  apiKey: "AIzaSyC0nRGdti6xGwzR0Jkdpca3_bYmuvX-NG4",
  authDomain: "fir-872fc.firebaseapp.com",
  projectId: "fir-872fc",
  storageBucket: "fir-872fc.appspot.com",
  messagingSenderId: "443506453574",
  appId: "1:443506453574:web:19a96be9e4c1266ca16e47",
  measurementId: "G-B14EPVS1NB"
};
// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

const analytics = getAnalytics(app)
const db = app.firestore();
const auth = firebase.auth();


export {auth,db};

