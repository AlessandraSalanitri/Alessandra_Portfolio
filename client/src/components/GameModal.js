import React from "react";
import "../styles/GameModal.css";

const GameModal = ({ isOpen, closeModal, children }) => {
    if (!isOpen) return null; // Don't render if modal close

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button className="close-button" onClick={closeModal}>X</button>
                {children} {/* Load game only if modal is open */}
            </div>
        </div>
    );
};

export default GameModal;
