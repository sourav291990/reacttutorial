import './login.css';
import React, { useState } from 'react';
import openEyeIcon from '../../assets/openEyes.png';
import closedEyeIcon from '../../assets/closeEyes.png';

const Login = () => {
    let [startTypeUserName, setstartTypeUserName] = useState(false);
    let [startTypePassword, setStartTypePassword] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const typeUserName = (e) => {
        setStartTypePassword(false);
        setstartTypeUserName(true);
        setUsername(e.target.value)
    }

    const typePassword = (e) => {
        setstartTypeUserName(false);
        setStartTypePassword(true);
        setPassword(e.target.value)
    }

    return (
        <div className="login-container">
            <h1>Login</h1>
            <div className="password-icon">
                <img src={startTypePassword ? closedEyeIcon : openEyeIcon} alt="Eye Icon" />
            </div>
            <div>
                <input
                    className="input-field"
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={typeUserName}
                />
                <input
                    className="input-field"
                    type='password'
                    placeholder="Password"
                    value={password}
                    onChange={typePassword}
                />
            </div>

            <button className="login-button" onClick={() => console.log("Logged in")}>
                Login
            </button>
        </div>
    );
}

export default Login;