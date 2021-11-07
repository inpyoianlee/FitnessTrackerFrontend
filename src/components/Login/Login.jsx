import React, { useState } from "react";
import { loginUser } from "../../api";
import { useHistory } from "react-router-dom";
import { getToken, storeToken, clearCurrentUser, storeUsername, clearCurrentUsername } from "../../auth";

const Login = ({ setIsLoggedIn, setToken, username, setUsername }) => {
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  let history = useHistory();

  if (getToken()) {
    return (
      <div clasName='login'>
        <h1>You are already logged in!</h1>
        <button 
          id='logout_button' 
          onClick={() => {
            clearCurrentUser()
            clearCurrentUsername()
            setIsLoggedIn(false);
            window.location.reload();
          }}
        >Log out</button>
      </div>
    )
  }

  return (
    <div className="login">
      <h1>Log in to your account!</h1>
      <p>{errorMessage}</p>
      <form
        className="login-form"
        onSubmit={async (e) => {
          e.preventDefault();
          try {
            // send data back to homepage
            const results = await loginUser(username, password);
            setToken(results.token);
            storeToken(results.token);
            setIsLoggedIn(true);
            setUsername(results.user.username);
            storeUsername(results.user.username);
            history.push("/Profile");
          } catch (err) {
            setErrorMessage("Wrong username, or wrong password.");
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

        <button>Login</button>
      </form>
    </div>
  );
};

export default Login;
