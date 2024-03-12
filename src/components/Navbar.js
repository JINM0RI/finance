// src/components/Navbar.js
import React from 'react';
import './Navbar.css'; // Import CSS file for styling

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-brand">FinanceApp</div>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a href="#" className="nav-link">Home</a>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link">Login</a>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link">Signup</a>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
