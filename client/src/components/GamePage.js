import React, { useState } from "react";
import "../styles/Modal.css";
import "../styles/GamePage.css";
import GameModal from "./GameModal";
import SnakeGame from "./SnakeGame";
import Minesweeper from "./Minesweeper";
import BounceGame from "./BounceGame";

const GameSelection = () => {
    const [activeGame, setActiveGame] = useState(null);

    return (
        <div className="game-container">
            <h1 className="game-title">Fancy a Nostalgic Break? </h1>
            <h2 className="game-subtitle">Choose one of these all-time '90s Classic</h2>

            <h3 className="game-prompt">While you're searching for the perfect candidate, <br></br>
            why not take a moment to relive the golden era of gaming?<br></br> 
            These simple yet nostalgic classics come with a fresh twist, just like my approach to learning and creating. <br></br> 
            <br></br>
            
            My first-ever PIXI.js projects may be modest, but they showcase my creativity, <br></br>
            adaptability, and passion for continuous improvement 😃 </h3>

            <div className="game-cards">
                {/* Snake '97 */}
                <div className="game-card">
                    <h3>🐍 Snake '97 🎮 </h3>
                    <p>We cannot, of course, miss out on a good old classic Snake game with a modern twist!</p>
                    <p>Classics never goes out of style!</p>
                    <button onClick={() => setActiveGame("snake")}>Play Now</button>
                </div>

                {/* BounceGame */}
                <div className="game-card">
                    <h3>🔴 Bounce 🎮 </h3>
                    <p> Was it just me stack in front of this game for hours?! This is a small level, but a nice revival! </p>
                    <p> Currently, just for larger screen 🤫  </p>
                    <p> The availability to be played in smaller screen as in phones, is working in progress 🥽🧪 </p>
                    <button onClick={() => setActiveGame("bouncegame")}>Play Now</button>
                </div>
                

                 {/* Minesweeper */}
                 <div className="game-card">
                    <h3>💣 Minesweeper 🎮</h3>
                    <p>The unique and unforgettable Minesweeper!  </p>
                    <p>Can you win? 😏</p>
                    <button onClick={() => setActiveGame("minesweeper")}>Play Now</button>
                </div>
                </div>

            {/* Game Modal: Dynamically Render Game Inside */}
            <GameModal isOpen={activeGame !== null} closeModal={() => setActiveGame(null)}>
                {activeGame === "snake" && <SnakeGame />}
                {activeGame === "minesweeper" && <Minesweeper />}
                {activeGame === "bouncegame" && <BounceGame />}
            </GameModal>
        </div>
    );
};

export default GameSelection;
