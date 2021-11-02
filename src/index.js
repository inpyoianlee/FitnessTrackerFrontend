// src/index.js

import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import {
  Header,
  NavBar
} from './components';

import {
  BrowserRouter as Router, 
  Route, 
  Switch, 
  Redirect
} from "react-router-dom";


const App = () => {
  return (
    <div id="App">
      <h1>Hello, World!!!</h1>
      <Header />
      <NavBar />
    </div>
  );
};

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
