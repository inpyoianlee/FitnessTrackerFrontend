import React, { useState } from "react";
import { loginUser } from "../../api";
import { useHistory } from "react-router-dom";

const Login = ({ setIsLoggedIn, setToken, username, setUsername }) => {
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  let history = useHistory();

  return (
    <div className="loginBox">
      <h1>Log in to your account!</h1>
      <p>{errorMessage}</p>
      <form
        id="loginForm"
        onSubmit={async (e) => {
          e.preventDefault();
          try {
            // send data back to homepage
            const results = await loginUser(username, password);
            console.log(results);
            setToken(results.token);
            setIsLoggedIn(true);
            setUsername(results.user.username);
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
