import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCCHVIduhE2_LW9joa7akG8NJrrDoDDCv0",
  authDomain: "ecommerce-coderhouse-d024c.firebaseapp.com",
  projectId: "ecommerce-coderhouse-d024c",
  storageBucket: "ecommerce-coderhouse-d024c.appspot.com",
  messagingSenderId: "862454278891",
  appId: "1:862454278891:web:6f8312e9cfdb55afec6cae"
};

const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
