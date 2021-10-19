import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css'

const Login = () => {
    const { signInUsingGoogle, signInUsingGithub } = useAuth();
    return (
        <div>
            <h2>Please Login</h2>
            <button className="about-btn" onClick={signInUsingGoogle}>Google Sign In</button>
            <br />
            {/* <button className="about-btn" onClick={signInUsingGithub}>GitHub Sign In</button> */}
            <br />
            <Link to="/register">New User?</Link>
        </div>
    );
};

export default Login;