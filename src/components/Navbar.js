import React from "react";
import logo from '../logo.svg';

function Header() {
    return (
       
        <nav className="navbar navbar-expand-lg cuatom_header">
            <a href="/" className="navbar-brand">
                <img src={logo} className="logo w-auto" alt="logo" width="80" height="80" />
            </a>
            <ul className="navbar-nav ms-auto gap-3">
                <li className="nav-item"> <a className="nav-link" href="/"> Home</a></li>
                <li className="nav-item"> <a className="nav-link" href="/about"> About</a></li>
                <li className="nav-item"> <a className="nav-link" href="/skills"> Skills</a></li>
                <li className="nav-item"> <a className="nav-link" href="/exp"> Exp</a></li>
            </ul>
        </nav>   
    );
}
export default Header;