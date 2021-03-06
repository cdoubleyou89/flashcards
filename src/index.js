// By Corin Walls
//Last edited 9/27/21

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {AddCard} from './pages/addCard';
import {FlashCard} from './pages/flashcard';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { logIn } from './Services/firebase';
import {LoginScreen} from './pages/login';
import {SignupScreen} from './pages/signup'




ReactDOM.render(
  
  <App/>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
