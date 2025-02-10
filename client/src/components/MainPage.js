import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import profileImage from "../assets/me.png";
import "../styles/MainPage.css";


const MainPage = () => {
    return (
        <section className="hero-section main-page">

             {/* Name */}
             <h1 className="main-title">Alessandra</h1>

             {/* Subtitle */}
            <h2 className="subtitle">━━ Software Engineer ━━</h2>

             {/* Tagline */}
             <p className="tagline">
                Turning concepts into code, <br />
                <span className="tagline-indent">and code into solutions.</span>
            </p>

            {/* Resume Button */}
            <a href="../assets/Alessandra Salanitri_SoftwareEngineer_Resume.pdf" 
            className="cta-button" 
            target="_blank" 
            rel="noopener noreferrer">
            My Resume
            </a>


            {/* Profile Image Container */}
            <div className="profile-container">
                <img src={profileImage} alt="Profile" className="profile-img" />
                </div>

                 {/* Social Icons */}
                 <div className="social-icons">
                    <a href="https://github.com/AlessandraSalanitri" target="_blank" rel="noopener noreferrer">
                        <FaGithub className="social-icon github" />
                    </a>
                    <a href="https://www.linkedin.com/in/alessandra-salanitri-solent94" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="social-icon linkedin" />
                    </a>
                </div>

            {/* Gradient Circle */}
            <div className="gradient-circle"></div>
        </section>
    );
};

export default MainPage;
