
//  Import libraries, Images & Sounds
import React, { useEffect, useRef, useState } from "react";
import * as PIXI from "pixi.js";
import { Howl } from "howler";
import ball1 from "../assets/ball1.png";
import ball2 from "../assets/ball2.png";
import ball3 from "../assets/ball3.png";
import ball4 from "../assets/ball4.png";
import ball5 from "../assets/ball5.png";
import ball6 from "../assets/ball6.png";
import ball7 from "../assets/ball7.png";
import ball8 from "../assets/ball8.png";
import ball9 from "../assets/ball9.png";
import ringRedTexture from "../assets/ring_red.png";
import ringGreenTexture from "../assets/ring_green.png";
import spikeTexture from "../assets/bounce_spike.png";
import groundTexture from "../assets/bounce_ground.png";
import winningPlatformTexture from "../assets/winning_platform.png"; 
import "../styles/Bounce.css";

import ringSoundFile from "../assets/collect_ring.mp3"; // Sound when collecting a ring
import deathSoundFile from "../assets/death.mp3"; // Sound when hitting a spike

const ringSound = new Howl({ src: [ringSoundFile], volume: 1.0 });
const deathSound = new Howl({ src: [deathSoundFile], volume: 1.0 });


const BounceGame = () => {
    // React state to manage game status & score
    const gameContainer = useRef(null); // Reference to the PIXI container
    const [gameStarted, setGameStarted] = useState(false);
    const [score, setScore] = useState(0);
    const [gameResult, setGameResult] = useState(""); // Stores the result message


    // Restart function 
    const restartGame = () => {
        setGameStarted(false); // Stop the game
        setGameResult(""); // Clear any win/loss messages
        setScore(0); // Reset score
    
        // delay before restarting - to avoid immediate re-execution
        setTimeout(() => {
            setGameStarted(true); // Restart the game
        }, 100);
    };

    useEffect(() => {
        if (!gameStarted || !gameContainer.current) return;

        // Setup PIXI application 
        const app = new PIXI.Application({
            width: gameContainer.current.clientWidth,
            height: gameContainer.current.clientHeight,
            backgroundColor: 0x87ceeb,
            resizeTo: gameContainer.current,
        });

        gameContainer.current.appendChild(app.view);

        const world = new PIXI.Container();
        app.stage.addChild(world);


        const scaleFactor = app.renderer.width / 800; // Normalize scaling based on a 800px width reference

         // Load Ball Animation Frames
         const ballTextures = [
            PIXI.Texture.from(ball1),
            PIXI.Texture.from(ball2),
            PIXI.Texture.from(ball3),
            PIXI.Texture.from(ball4),
            PIXI.Texture.from(ball5),
            PIXI.Texture.from(ball6),
            PIXI.Texture.from(ball7),
            PIXI.Texture.from(ball8),
            PIXI.Texture.from(ball9),
        ];

        // Create Animated Ball Sprite
        const ball = new PIXI.AnimatedSprite(ballTextures);
        ball.anchor.set(0.5); 
        ball.width = 45 * scaleFactor;
        ball.height = 45 * scaleFactor;
        ball.x = 100 * scaleFactor;
        ball.y = 430 * scaleFactor;
        ball.vy = 0; 
        ball.vx = 0;
        ball.isJumping = false;
        ball.animationSpeed = 0.2;  // speed for rotation
        ball.play(); // Start animation by default
        world.addChild(ball);


        // Level Boundaries
        const levelWidth = 80 * 80; // Total width of the game world
        const levelHeight = 500; // Height of the playable area


        // Ground Platforms
        const groundTiles = [];
        for (let i = 0; i < 40; i++) {
            const ground = PIXI.Sprite.from(groundTexture);
            ground.x = i * (80 * scaleFactor); // Scale distance between tiles
            ground.y = 450 * scaleFactor;
            ground.width = 80 * scaleFactor;
            ground.height = 40 * scaleFactor;
            world.addChild(ground);
            groundTiles.push(ground);
        }
        


        // Floating Platforms
        const floatingPlatforms = [];
        const platformPositions = [
            { x: 500, y: 580 }, // Lowered platform
            { x: 600, y: 350 }, // Closer to previous
            { x: 800, y: 320 },
            { x: 1000, y: 300 },
            { x: 1200, y: 270 }

        ];
        
        platformPositions.forEach(pos => {
            const platform = PIXI.Sprite.from(groundTexture);
            platform.x = pos.x * scaleFactor;
            platform.y = pos.y * scaleFactor;
            platform.width = 80 * scaleFactor;
            platform.height = 40 * scaleFactor;
            world.addChild(platform);
            floatingPlatforms.push(platform);
        });


        // Create Rings (Start as RED, Change to GREEN when passed)
        const rings = [];
        const ringPositions = [
            { x: 450, y: 300 },
            { x: 750, y: 270 },
            { x: 1100, y: 230 },
            { x: 1400, y: 200 },
            { x: 1750, y: 150 },
            { x: 2060, y: 310 },
            { x: 2340, y: 200 }, 
            { x: 2800, y: 300 }
        ];
        ringPositions.forEach(pos => {
            const ring = PIXI.Sprite.from(ringRedTexture);
            ring.anchor.set(0.5);
            ring.width = 75 * scaleFactor;
            ring.height = 75 * scaleFactor;
            ring.x = pos.x * scaleFactor;
            ring.y = pos.y * scaleFactor;
            ring.passed = false;
            world.addChild(ring);
            rings.push(ring);
        });

        // Create Spikes
        const spikes = [];
        const spikePositions = [
            { x: 550, y: 420 }, //  Moved higher
            { x: 900, y: 400 }, // Slightly lower
            { x: 1250, y: 248 }, // Higher up on a platform
            { x: 1620, y: 180 }, // Floating challenge
            { x: 2160, y: 202 } // Below the stairs
        ];

        spikePositions.forEach(pos => {
            const spike = PIXI.Sprite.from(spikeTexture);
            spike.anchor.set(0.5);
            spike.x = pos.x * scaleFactor;
            spike.y = pos.y * scaleFactor;
            spike.width = 50 * scaleFactor;
            spike.height = 50 * scaleFactor;
            world.addChild(spike);
            spikes.push(spike);
        });

        // stairs effect
        const slopeTiles = [];
        const slopeLayout = [
            { x: 1740, y: 350 },  // up stairs
            { x: 1780, y: 320 },  
            { x: 1820, y: 290 },  
            { x: 1860, y: 260 },  
            { x: 1900, y: 230 },  
            { x: 1940, y: 200 },
            { x: 1980, y: 170 },  
            { x: 2020, y: 140 },
            { x: 2060, y: 110 },   // Top-right

            { x: 2100, y: 110 },  // down stairs
            { x: 2140, y: 140 },  
            { x: 2180, y: 170 },  
            { x: 2220, y: 200 },  
            { x: 2260, y: 230 },  
            { x: 2300, y: 260 },  
            { x: 2340, y: 290 },  
            { x: 2380, y: 320 },  
            { x: 2420, y: 350 },

        ];
        
        slopeLayout.forEach(pos => {
            const tile = PIXI.Sprite.from(groundTexture);
            tile.x = pos.x * scaleFactor;
            tile.y = pos.y * scaleFactor;
            tile.width = 40 * scaleFactor; //tile size
            tile.height = 40 * scaleFactor; 
            world.addChild(tile);
            slopeTiles.push(tile);
        });



        const winningPlatform = PIXI.Sprite.from(winningPlatformTexture);
        winningPlatform.x = 3000 * scaleFactor;  // end of level
        winningPlatform.y = 300 * scaleFactor;  
        winningPlatform.width = 140 * scaleFactor; // Size
        winningPlatform.height = 190 * scaleFactor;
        world.addChild(winningPlatform);


        // Keyboard controls
        let keys = {};
        window.addEventListener("keydown", (e) => keys[e.key] = true);
        window.addEventListener("keyup", (e) => keys[e.key] = false);

        // jump tracking variables
        let jumpHoldTime = 0;
        const jumpPower = -12; // Default jump strength
        const maxJumpHold = 10; // Max frames for holding jump

        function update() {
              // Move Left & Right within boundaries
              if (keys["ArrowRight"] && ball.x < levelWidth - 50) {
                ball.vx = 3 * scaleFactor;
                ball.play(); // start animation when moving
            } 
            else if (keys["ArrowLeft"] && ball.x > 50) {
                ball.vx = -3 * scaleFactor;
                ball.play(); // start animation when moving
            } 
            else {
                ball.vx = 0;
                ball.stop(); // stop animation when stationary
            }
        
            ball.x += ball.vx; // Apply movement

            if (keys["ArrowUp"]) {
                if (!ball.isJumping) {
                    ball.vy = jumpPower; // Initial jump force
                    ball.isJumping = true;
                    jumpHoldTime = 0; // Reset hold timer
                } else if (jumpHoldTime < maxJumpHold) {
                    ball.vy += -0.15; // Smooth adjustment instead of harsh decrement
                    jumpHoldTime++; 
                }
            }
            
            // Apply Gravity (Smoother)
            ball.vy += 0.45; // More gradual gravity pull
            ball.y += ball.vy;
    
        
            // Collision with Ground, Platforms & Walls
            let landed = false;
            [...groundTiles, ...floatingPlatforms, ...slopeTiles].forEach(tile => {
                if (
                    ball.x + ball.width / 2 > tile.x && 
                    ball.x - ball.width / 2 < tile.x + tile.width &&
                    ball.y + ball.height / 2 > tile.y &&
                    ball.y + ball.height / 2 < tile.y + tile.height
                ) {
                    // 🔹 Adjust ball position for each ground tile in the slope
                    ball.y = tile.y - ball.height / 2;
                    ball.vy = 0;
                    ball.isJumping = false;
                    landed = true;
                }
            });
        
            // Slope Handling
            if (landed && ball.vx !== 0) {
                ball.y += 1.5; // Small downward force to "stick" to slopes
            }
        
            // Prevent Ball from Falling Out of Bounds
            if (ball.y > levelHeight) {
                deathSound.play();
                alert("Oopsi Daisy! Try again.");
                setGameStarted(false);
            }
        
            // 🔹 Ring Collection Logic
            rings.forEach(ring => {
                if (!ring.passed && Math.abs(ball.x - ring.x) < 20 && Math.abs(ball.y - ring.y) < 20) {
                    ring.texture = PIXI.Texture.from(ringGreenTexture); // Change to GREEN
                    ring.passed = true;
                    setScore(prev => prev + 1);
                    ringSound.play();
                }
            });
        
            // if ball hit spikes = Game Over
            spikes.forEach(spike => {
                if (Math.abs(ball.x - spike.x) < 20 && Math.abs(ball.y - spike.y) < 20) {
                    deathSound.play();
                    setGameResult("Ooopsi Daisy! Couldn't be saved! 💀 Try Again 💪");
                    setGameStarted(false);
                    }
                });
                
        
            // Win Condition - Reach the End of the Level
            if (
                ball.x + ball.width / 2 > winningPlatform.x &&
                ball.x - ball.width / 2 < winningPlatform.x + winningPlatform.width &&
                ball.y + ball.height / 2 > winningPlatform.y &&
                ball.y + ball.height / 2 < winningPlatform.y + winningPlatform.height
            ) {
                setGameResult("Yeeeeah! 🎉 YOU WON! 🎉 Congratulations! 👏");
                setGameStarted(false);
            }
            

        
            // Scrolling with Level Tracking
            app.stage.x = Math.min(0, Math.max(-ball.x + app.renderer.width / 3, -levelWidth + app.renderer.width));

            app.stage.y = Math.max(-levelHeight + app.renderer.height, Math.min(0, -ball.y + app.renderer.height / 1.2));



            if (app.stage.x < -levelWidth + app.renderer.width) { // No scrolling too far left
                app.stage.x = -levelWidth + app.renderer.width; // for different screen sizes
            }
        }
        
        

        app.ticker.add(update);

        return () => {
            app.ticker.remove(update);
            app.destroy(true);
        };
    }, [gameStarted]);

    return (
        <div className="bounce-game">
            <h2>Score: {score}</h2>
            {!gameStarted && (
                <button onClick={() => setGameStarted(true)} className="start-btn">Start Bounce</button>
            )}
            {gameResult && ( // message when player wins or loses
                <div className="game-result">
                    <h1>{gameResult}</h1>
                    <button onClick={restartGame}>Restart</button> {/* Calls the restart function */}
                </div>
            )}
            {gameStarted && <div ref={gameContainer} className="game-canvas"></div>}
        </div>
    );
};

export default BounceGame;
