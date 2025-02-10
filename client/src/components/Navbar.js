import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaUser, FaPhone, FaCode, FaGamepad } from "react-icons/fa"; 
import "../styles/Navbar.css"; 

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="nav-links">
                <li><Link to="/"><FaHome /> Home</Link></li>
                <li><Link to="/about"><FaUser /> About</Link></li>
                <li><Link to="/projects"><FaCode /> Projects</Link></li>
                <li><Link to="/gamepage"><FaGamepad /> Game </Link></li>
                <li><Link to="/contact"><FaPhone /> Contact</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
