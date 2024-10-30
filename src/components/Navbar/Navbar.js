import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css';


const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-left">
                <Link to="/" className="logo">
                    My Website
                </Link>
            </div>
            <div className="navbar-right">
                <Link to="/home" className="home-button">
                    Home
                </Link>
                <Link to="/nothome" className="not-home-button">
                    Not Home
                </Link>
            </div>
        </nav>
    );
    // fill in the rest here!  
    // add Home and NotHome, including links (after routing established)
};
export default Navbar;