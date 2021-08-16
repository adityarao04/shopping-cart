import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from "firebase/app"
import 'firebase/firestore' ;


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAFS0bnj5qnjH9wiXsFh7AZnwIQu8KNhEY",
  authDomain: "cart-b04e5.firebaseapp.com",
  projectId: "cart-b04e5",
  storageBucket: "cart-b04e5.appspot.com",
  messagingSenderId: "836987977755",
  appId: "1:836987977755:web:ce604aca8b38c1056df8be"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);

