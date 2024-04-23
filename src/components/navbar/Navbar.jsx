import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const [fix, setFix] = useState(false)

    const handleScroll = () => {
        if (window.scrollY >= 50) {
                setFix(true);
        } else {
                setFix(false);
        }
    }

    window.addEventListener( "scroll", handleScroll );
    return (
        <nav className={fix ? "navbar fixed" : "navbar"}>
            <a href="#" className='brand'>Rafiul🔥</a>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/" className="nav-link">
                        Home
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/about" className="nav-link">
                        About
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/contact" className="nav-link">
                        Contact
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
