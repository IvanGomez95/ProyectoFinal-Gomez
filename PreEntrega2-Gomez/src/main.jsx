import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyCNsAPtmOp9NR-0vuf7cl5dl3bdS5qM46w",
  authDomain: "proyectofinal-ivangomez.firebaseapp.com",
  projectId: "proyectofinal-ivangomez",
  storageBucket: "proyectofinal-ivangomez.appspot.com",
  messagingSenderId: "376906819804",
  appId: "1:376906819804:web:31185cd62328446793ac19"
};

const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
