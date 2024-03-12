// src/components/Navbar.js
import React from 'react';
import './Navbar.css'; // Import CSS file for styling
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-brand">FinanceApp</div>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to = "/">Home</Link>
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
