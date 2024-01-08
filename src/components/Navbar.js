import React from 'react'
import { Link } from "react-router-dom";
import './Navbar.css';
import DarkMode from './Darkmode/DarkMode';
import logo from './images/crypto_logo.png';

const Navbar = () => {
    return (
        <>
            <header>
                <nav>
                    <ul class='nav-bar'>
                        <li class='logo'><Link href='#'><img src={logo} /></Link></li>
                        <input type='checkbox' id='check' />
                        <span class="menu">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/service">Services</Link></li>
                            <li><Link to="/portfolio">portfolio</Link></li>
                            <li><Link to="/contact">contact</Link></li>
                            <li><Link to="/login">Login</Link></li>
                            <li><Link to="/Registration">Register</Link></li>
                            <label for="check" class="close-menu"><i class="fas fa-times"></i></label>
                            <DarkMode />
                        </span>
                        <label for="check" class="open-menu"><i class="fas fa-bars"></i></label>
                    </ul>

                </nav>
            </header>
        </>
    )
}

export default Navbar
