import React, { useState } from "react";
import { registerUser } from "../../api";

const Register = ({ setCurrentUser }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  
  return (
    <div className="registerBox">
      <h1>Create an account to share your workouts with others!</h1>
      <form 
        id="register"
        onSubmit={async (e) => {
            e.preventDefault();
            try {
                // send data back to homepage
                const results = await registerUser(username, password);
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

        <button>Register</button>
      </form>
    </div>
  );
};

export default Register;
