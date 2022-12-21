import React from 'react';
import ReactDOM from 'react-dom/client';
import { initializeApp } from 'firebase/app';
import './index.css';
import App from './App';

const firebaseConfig = {
  apiKey: "AIzaSyC33na-ndBS7qtnRlBAF2cplyPxVbgy-gI",
  authDomain: "coderhouse-react-5d9ce.firebaseapp.com",
  projectId: "coderhouse-react-5d9ce",
  storageBucket: "coderhouse-react-5d9ce.appspot.com",
  messagingSenderId: "341261790359",
  appId: "1:341261790359:web:706bdcab1f342969430dd2"
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
