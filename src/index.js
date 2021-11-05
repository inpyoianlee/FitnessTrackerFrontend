// src/index.js

import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import {
  Header,
  NavBar, 
  Register, 
  Login, 
  Profile
} from './components';

import {
  BrowserRouter as Router, 
  Route, 
  Switch, 
  Redirect
} from "react-router-dom";


const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState('');
  const [username, setUsername] = useState('');

  return (
    <div id="App">
      <h1>Welcome to Fitness Tracker!</h1>
      <Header />
      <NavBar />
      <Switch>
        <Route path='/register'>
          <Register 
            setIsLoggedIn={ setIsLoggedIn } 
            setToken={ setToken } 
            username={ username } 
            setUsername={ setUsername }
          />
        </Route>
        <Route path='/login'>
          <Login 
            setIsLoggedIn={ setIsLoggedIn } 
            setToken={ setToken } 
            username={ username } 
            setUsername={ setUsername }
          />
        </Route>
        <Route path='/Profile'>
          <Profile 
            isLoggedIn={ isLoggedIn } 
            username={ username }
          />
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
