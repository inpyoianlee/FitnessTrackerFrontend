// src/index.js

import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import {
  Header,
  NavBar, 
  Register
} from './components';

import {
  BrowserRouter as Router, 
  Route, 
  Switch, 
  Redirect
} from "react-router-dom";


const App = () => {
  const [currentUser, setCurrentUser] = useState([]);

  return (
    <div id="App">
      <NavBar />
      <Header />
      <Switch>
        <Route path='/register'>
          <Register setCurrentUser={ setCurrentUser }/>
        </Route>
      </Switch>
    </div>
  );
};

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
