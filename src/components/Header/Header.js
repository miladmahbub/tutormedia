import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Header.css'

const Header = () => {
    const { user, logout } = useAuth();
    return (
        <div className="header">
            <Link to="/home">Home</Link>
            <Link to="/services">servicess</Link>
            <Link to="/aboutus">About Us</Link>
            <Link to="/contactus">Contact Us</Link>
            <Link to="/register">Register</Link>
            <Link to="/login">Login</Link>
            <span>{user.displayName} </span>
            {user?.email && <button className="abouts-btn" onClick={logout}>log out</button>}
            
        </div>
    );
};

export default Header;