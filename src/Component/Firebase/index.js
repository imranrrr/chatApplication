import firebase from "firebase/compat/app";
import { getDatabase } from "firebase/database";
const firebaseConfig = {
  apiKey: "AIzaSyCWbx5Fhr45g7DmeX9av5wqN1rf8hYqQB4",
  authDomain: "chats2-6554a.firebaseapp.com",
  projectId: "chats2-6554a",
  storageBucket: "chats2-6554a.appspot.com",
  messagingSenderId: "424406863866",
  appId: "1:424406863866:web:f0083c48e2781c4d675e43"
};
const app = firebase.initializeApp(firebaseConfig);
const  db =  getDatabase(); 
export { db,app}