import React from 'react';
import ReactDOM from 'react-dom';
import ReactBootstrap from 'react-bootstrap';
import firebase from 'firebase';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

firebase.initializeApp({
  apiKey: "AIzaSyA4uikdidFZpQB2NelbSIS0TF1RlVaLrj8",
    authDomain: "ventas-uam.firebaseapp.com",
    databaseURL: "https://ventas-uam.firebaseio.com",
    projectId: "ventas-uam",
    storageBucket: "ventas-uam.appspot.com",
    messagingSenderId: "723199275402"
});

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
