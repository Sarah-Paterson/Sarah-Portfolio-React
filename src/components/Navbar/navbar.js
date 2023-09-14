import React from 'react';
import './navbar.css';
import logo from '../../assets/logo.png';
import contactImg from '../../assets/contact.png'
import {Link} from 'react-scroll';

const Navbar = () => {
    return (
        <div className="App">
        <nav className="navbar">
            <img src={logo} alt="logo" className="logo"/>
            <div className="desktopMenu">
                <Link className="desktopMenuListItem">Home</Link>
                <Link className="desktopMenuListItem">About</Link>
                <Link className="desktopMenuListItem">Portfolio</Link>
                <Link className="desktopMenuListItem">Clients</Link>
            </div>
            <button className="desktopMenuBtn">
                <img src={contactImg} alt="contact Image" className="desktopMenuImg" />
                Contact Me
            </button>
        </nav>
    </div>
    )
}

export default Navbar