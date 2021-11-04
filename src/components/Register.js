import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { registerUser } from '../api';
import { storeToken } from '../auth';
import StLogo from '../images/stLogo.png';

const Register = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [token, setToken] = useState('');
    const history = useHistory();

    const handleClick = () => {
        history.push('/profile');
    }

    return (
        <div className="login">
            <img className="st-logo-h2" src={StLogo} />
            <h2>Register for an account</h2>
            <form
                className="login-form"
                onSubmit={async (e) => {
                    e.preventDefault();

                    if (password.length >= 8 && password === confirmPassword) {
                        try {
                            const results = await registerUser(username, password);
                            storeToken(results.data.token);
                            setToken(results.data.token);
                            setUsername('');
                            setPassword('');
                            handleClick();
                        } catch (err) {
                            console.log(err);
                        }
                    } else if (password !== confirmPassword) {
                        alert('The passwords you entered to not match. Please try again');
                    } else {
                        alert('Password must be at least 8 characters');
                    }
                }}>
                <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Username" />

                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password" />

                <input
                    type="password"
                    id="re-enter password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Re-enter Password" />
                <button onClick={() => {

                }}>
                    Register</button>
            </form>

            <p>Already have an account? <Link className='signup-link' to="/login">Login</Link></p>
        </div>
    )
}

export default Register;