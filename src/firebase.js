import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBBOJbvy7kx5oAjuWQtBAeDApPUQz5qUrY",
  authDomain: "e-commerce-site-7f454.firebaseapp.com",
  databaseURL: "https://e-commerce-site-7f454.firebaseio.com",
  projectId: "e-commerce-site-7f454",
  storageBucket: "e-commerce-site-7f454.appspot.com",
  messagingSenderId: "151372355350",
  appId: "1:151372355350:web:d6535bea35254d0e3b6237",
  measurementId: "G-3QL62R13R8",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
