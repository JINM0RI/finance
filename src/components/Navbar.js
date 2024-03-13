// src/components/Navbar.js
import React from 'react';
import './Navbar.css'; // Import CSS file for styling
import { Link } from 'react-router-dom';
import logo from './logo.png'

const Navbar = () => {
    return (
        <nav className="navbar">
            <div>
                <img src={logo} alt="Fintrack Logo" className="logo" />
            </div>
            <div className="navbar-brand">Fintrack</div>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link to="/Login">Login</Link>
                </li>
                <li className="nav-item">
                    <Link to="/Signup">Signup</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
