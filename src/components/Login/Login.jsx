import React, { useState } from "react";
import {
    loginUser
} from '../../api';

const Login = ({ setCurrentUser }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className="registerBox">
        <h1>Log in to your account!</h1>
        <form 
          id="loginForm"
          onSubmit={async (e) => {
              e.preventDefault();
              try {
                  // send data back to homepage
                  const results = await loginUser(username, password);
                  console.log(results);
                  setCurrentUser(results)
              } catch (err) {
                  console.error(err);
              }
          }}>
          <fieldset>
            <label htmlFor="userName">Username</label>
            <input
              type="text"
              placeholder="Username"
              min="8"
              id="username"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
          </fieldset>
  
          <fieldset>
            <label htmlFor="password">Password</label>
            <input
              type="text"
              placeholder="Password"
              id="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </fieldset>
  
          <button>Login</button>
        </form>
      </div>
    )
}

export default Login;