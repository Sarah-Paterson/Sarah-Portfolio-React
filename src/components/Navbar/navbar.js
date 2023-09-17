import React, { useState } from 'react';
import './navbar.css';
import logo from '../../assets/logo.png';
import contactImg from '../../assets/contact.png'
import { Link } from 'react-scroll';
import menu from '../../assets/menu.png'

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false)
    return (
        <div className="App">
        <nav className="navbar">
            <img src={logo} alt="logo" className="logo"/>
            <div className="desktopMenu">
                <Link to='intro' activeClass='active'  spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Home</Link>
                <Link to='about' activeClass='active'  spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">About</Link>
                <Link to='works' activeClass='active' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">Portfolio</Link>
                <Link to='clients' activeClass='active' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">Resume</Link>
            </div>
            <button className="desktopMenuBtn" onClick={() => {
                document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
            }}>
                <img src={contactImg} alt="contact" className="desktopMenuImg" />
                Contact Me
            </button>

            <img src={menu} alt="menu" className="mobMenu" onClick={() =>setShowMenu(!showMenu)}/>
            <div className="navMenu" style={{display: showMenu? 'flex': 'none'}}>
                <Link to='intro' activeClass='active' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={() =>setShowMenu(false)} >Home</Link>
                <Link to='about' activeClass='active' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={() =>setShowMenu(false)} >About</Link>
                <Link to='works' activeClass='active' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={() =>setShowMenu(false)} >Portfolio</Link>
                <Link to='clients' activeClass='active' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={() =>setShowMenu(false)} >Resume</Link>
                <Link to='contact' activeClass='active' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={() =>setShowMenu(false)} >Contact</Link>
            </div>
        </nav>
    </div>
    )
}

export default Navbar