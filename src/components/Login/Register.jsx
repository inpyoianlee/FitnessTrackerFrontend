import React, { useState } from "react";
import { registerUser } from "../../api";
import { useHistory } from "react-router-dom";
import { storeToken, getToken, clearCurrentUser } from "../../auth/index";

const Register = ({ setIsLoggedIn, setToken, username, setUsername }) => {
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState('');

  let history = useHistory();

  if (getToken()) {
    return (
      <div clasName='loginBox'>
        <h1>You are already logged in!</h1>
        <button 
          id='logout_button' 
          onClick={() => {
            clearCurrentUser()
            setIsLoggedIn(false);
            window.location.reload();
          }}
        >Log out</button>
      </div>
    )
  }

  return (
    <div className="registerBox">
      <h1>Create an account to share your workouts with others!</h1>
      <p>{ errorMessage }</p>
      <form
        id="register"
        onSubmit={async (e) => {
          e.preventDefault();
          try {
            // send data back to homepage
            const results = await registerUser(username, password);
            setIsLoggedIn(true);
            setToken(results.token);
            storeToken(results.token);
            history.push("/Profile");
          } catch (err) {
            setErrorMessage('Error: username already exists, or you need a longer password');
            console.error(err);
          }
        }}
      >
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

        <button>Register</button>
      </form>
    </div>
  );
};

export default Register;
