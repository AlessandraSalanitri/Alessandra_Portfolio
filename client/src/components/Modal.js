import React, { useState } from "react";
import "../styles/Modal.css";

const Modal = ({ isOpen, onClose, project }) => {
    // Initialize state at the top level to avoid conditional rendering issues
    const [activeSection, setActiveSection] = useState(project ? project.sections[0] : null);

    // If modal is not open, return null but keep hooks at the top
    if (!isOpen || !project) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button className="close-button" onClick={onClose}>✖</button>
                <h2 className="modal-title">{project.title}</h2>

                {/* Section Navigation */}
                <div className="modal-tabs">
                    {project.sections.map((section, index) => (
                        <button 
                            key={index} 
                            className={`tab-button ${activeSection?.name === section.name ? "active" : ""}`}
                            onClick={() => setActiveSection(section)}
                        >
                            {section.name}
                        </button>
                    ))}
                </div>

                {/* Section Content */}
                <div className="modal-body">{activeSection?.content}</div>

            </div>
        </div>
    );
};

export default Modal;
