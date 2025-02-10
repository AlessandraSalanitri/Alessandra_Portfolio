import React, { useEffect, useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { 
    FaPython, FaJava, FaJsSquare, FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaFigma, 
    FaDatabase, FaLinux, FaCode, FaCogs
} from "react-icons/fa";
import { SiFirebase, SiMongodb, SiSqlite, SiMysql, SiTableau, SiJupyter, SiGraphql, SiTensorflow } from "react-icons/si";

import "../styles/MainPage.css";
import "../styles/About.css"; 
import profileImage from "../assets/me.png";

const About = () => {
    const [transition, setTransition] = useState(false);
    const [typedText, setTypedText] = useState("");  
    const fullText =  
    // Bio
    ` _Hello, I’m Alessandra, 
    Not just a developer, I'm a problem-solver, 
    innovator, and tech enthusiast.

    Passionate about crafting efficient, 
    scalable, and secure solutions. 
    Whether it's web development, cybersecurity, 
    or data-driven insights, 
    I bring a blend of creativity and 
    precision to every project.`;

    useEffect(() => {
        setTypedText(""); // Reset text before typing starts
    
        const timer = setTimeout(() => {
            setTransition(true);
        }, 800);
    
        let i = 0;
        const typingInterval = setInterval(() => {
            if (i < fullText.length) {
                setTypedText((prev) => prev + fullText.charAt(i)); 
                i++;
            } else {
                clearInterval(typingInterval);
            }
        }, 15); // Typing speed
    
        return () => {
            clearTimeout(timer);
            clearInterval(typingInterval);
        };
    }, [fullText]);


    // Start animation after mount
    useEffect(() => {
        const timer = setTimeout(() => {
            setTransition(true);
        }, 200);
        return () => clearTimeout(timer);  
    }, []);

    // Stack tech icons
    const techStack = [
        { icon: <FaPython />, className: "python-icon", name: "PYTHON" },
        { icon: <FaJava />, className: "java-icon", name: "JAVA" },
        { icon: <FaJsSquare />, className: "js-icon", name: "JAVASCRIPT" },
        { icon: <FaReact />, className: "react-icon", name: "REACT" },
        { icon: <FaNodeJs />, className: "nodejs-icon", name: "NODEJS" },
        { icon: <FaHtml5 />, className: "html-icon", name: "HTML5" },
        { icon: <FaCss3Alt />, className: "css-icon", name: "CSS" },
        { icon: <FaFigma />, className: "figma-icon", name: "FIGMA" },
        { icon: <SiFirebase />, className: "firebase-icon", name: "FIREBASE" },
        { icon: <SiMongodb />, className: "mongodb-icon", name: "MONGODB" },
        { icon: <FaDatabase />, className: "database-icon", name: "ATLAS" }, 
        { icon: <SiSqlite />, className: "sqlite-icon", name: "SQLITE" },
        { icon: <SiMysql />, className: "mysql-icon", name: "MYSQL" },
        { icon: <SiTableau />, className: "tableau-icon", name: "TABLEAU" },
        { icon: <SiJupyter />, className: "jupyter-icon", name: "JUPYTER" },
        { icon: <SiTensorflow />, className: "ai-icon", name: "TENSORFLOW" }, 
        { icon: <SiGraphql />, className: "graphs-icon", name: "DATA ANALYSIS" },
        { icon: <FaLinux />, className: "linux-icon", name: "LINUX"},
        { icon: <FaCode />, className: "api-icon", name: "WEB-APPLICATION" }, 
        { icon: <FaCogs />, className: "siem-icon", name: "SIEM TOOLS" } 
    ];

    return (
        <section className={`hero-section main-page ${transition ? "about-page" : ""}`}>

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
            <a href="/AlessandraSalanitri_IT_Resume.pdf" 
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

            {/* Tech Stack Icons Container */}
            <div className={`tech-stack-container ${transition ? "about-page" : ""}`}>
                {techStack.map((tech, index) => (
                    <div key={index} className={`tech-icon ${tech.className}`} data-tech={tech.name}
                         style={{ "--angle": `${index * (360 / techStack.length)}deg` }}>
                        {tech.icon}
                    </div>
                ))}
            </div>

            {/* Gradient Circle */}
            <div className="gradient-circle"></div>


            {/* Typing Effect Text */}
        <h2 className="typing-text">
            {typedText.split("\n").map((line, index) => (
                <span key={index}>
                    {line}
                    <br />
                </span>
            ))}
        </h2>

        </section>
    );
};

export default About;
