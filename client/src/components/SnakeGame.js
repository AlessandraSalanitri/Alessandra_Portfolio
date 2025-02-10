import React, { useEffect, useRef, useState, useCallback } from "react";
import * as PIXI from "pixi.js";
import { Howl } from "howler";
import appleTexture from "../assets/apple.png";
import snakeHeadTexture from "../assets/snake_head.png";
import snakeDeadTexture from "../assets/snake_xx.png";
import snakeBodyTexture from "../assets/snake_blob.png";
import "../styles/SnakeGame.css";

// Import audio files
import eatSoundFile from "../assets/eat.mp3";
import gameOverSoundFile from "../assets/gameover.mp3";

const gridSize = 20;
const gameSpeeds = { easy: 150, medium: 100, hard: 60 };

const SnakeGame = () => {
    const gameContainer = useRef(null);
    const directionRef = useRef("right");
    const [gameStarted, setGameStarted] = useState(false);
    const [isGameOver, setIsGameOver] = useState(false);
    const [gameSpeed, setGameSpeed] = useState(gameSpeeds.medium);
    const [selectedDifficulty, setSelectedDifficulty] = useState("medium");

    const scoreRef = useRef(0);
    const [displayScore, setDisplayScore] = useState(0);

    const [highScore, setHighScore] = useState(
        localStorage.getItem("snakeHighScore") ? parseInt(localStorage.getItem("snakeHighScore"), 10) : 0
    );

    // Howler Sounds Inside useRef
    const eatSound = useRef(new Howl({ src: [eatSoundFile], volume: 1.0 }));
    const gameOverSound = useRef(new Howl({ src: [gameOverSoundFile], volume: 1.0 }));

    // Stop All Sounds when Restarting or Closing
    const stopAllSounds = useCallback(() => {
        eatSound.current.stop();
        gameOverSound.current.stop();
    }, []);

    // Update High Score
    const updateHighScore = useCallback(() => {
        setHighScore(prevHighScore => {
            const newHighScore = Math.max(prevHighScore, scoreRef.current);
            localStorage.setItem("snakeHighScore", newHighScore);
            return newHighScore;
        });
    }, []);

    useEffect(() => {
        if (!gameStarted || !gameContainer.current) return;

        // Responsive Game Size Setup
        const app = new PIXI.Application({
            width: gameContainer.current.clientWidth,  // width dynamic
            height: gameContainer.current.clientHeight, // height dynamic
            backgroundColor: 0x2b2b2b
        });

        gameContainer.current.appendChild(app.view);

        let snake = [
            { x: 100, y: 100 },
            { x: 80, y: 100 },
        ];
        let food = generateFood();
        let isGameOverState = false;

        const snakeContainer = new PIXI.Container();
        const foodSprite = PIXI.Sprite.from(appleTexture);
        app.stage.addChild(snakeContainer, foodSprite);

        function generateFood() {
            const maxX = Math.floor(app.view.width / gridSize) * gridSize;
            const maxY = Math.floor(app.view.height / gridSize) * gridSize;
        
            return {
                x: Math.floor(Math.random() * (maxX / gridSize)) * gridSize,
                y: Math.floor(Math.random() * (maxY / gridSize)) * gridSize
            };
        }
        

        function drawSnake() {
            snakeContainer.removeChildren();
            const headSprite = new PIXI.Sprite.from(isGameOverState ? snakeDeadTexture : snakeHeadTexture);
            headSprite.x = snake[0].x;
            headSprite.y = snake[0].y;
            headSprite.width = gridSize;
            headSprite.height = gridSize;
            headSprite.anchor.set(0.5);
            snakeContainer.addChild(headSprite);

            for (let i = 1; i < snake.length; i++) {
                const bodySprite = new PIXI.Sprite.from(snakeBodyTexture);
                bodySprite.x = snake[i].x;
                bodySprite.y = snake[i].y;
                bodySprite.width = gridSize;
                bodySprite.height = gridSize;
                bodySprite.anchor.set(0.5);
                snakeContainer.addChild(bodySprite);
            }
        }

        function drawFood() {
            foodSprite.x = food.x;
            foodSprite.y = food.y;
            foodSprite.width = gridSize;
            foodSprite.height = gridSize;
            foodSprite.anchor.set(0.5);
        }

        function handleKeydown(e) {
            const keyMap = {
                ArrowUp: "up",
                ArrowDown: "down",
                ArrowLeft: "left",
                ArrowRight: "right",
            };

            if (keyMap[e.key] && keyMap[e.key] !== oppositeDirection(directionRef.current)) {
                directionRef.current = keyMap[e.key];
            }
        }

        function oppositeDirection(dir) {
            const opposite = { up: "down", down: "up", left: "right", right: "left" };
            return opposite[dir];
        }

        function update() {
            if (isGameOverState) return;

            let newHead = { ...snake[0] };

            if (directionRef.current === "right") newHead.x += gridSize;
            if (directionRef.current === "left") newHead.x -= gridSize;
            if (directionRef.current === "down") newHead.y += gridSize;
            if (directionRef.current === "up") newHead.y -= gridSize;

            if (newHead.x >= app.view.width) newHead.x = 0;
            if (newHead.x < 0) newHead.x = app.view.width - gridSize;
            if (newHead.y >= app.view.height) newHead.y = 0;
            if (newHead.y < 0) newHead.y = app.view.height - gridSize;

             // Self-Collision Check
            const hasCollided = snake.slice(1).some(segment => {
                return (
                    Math.abs(segment.x - newHead.x) < gridSize * 0.8 && 
                    Math.abs(segment.y - newHead.y) < gridSize * 0.8
                );
            });

            if (hasCollided && snake.length > 2) {
                gameOverSound.current.play();
                isGameOverState = true;
                setIsGameOver(true);
                updateHighScore();
                return;
            }

             // Eat food and grow snake
             // Eat food and grow snake
            if (Math.abs(newHead.x - food.x) < gridSize && Math.abs(newHead.y - food.y) < gridSize) {
                eatSound.current.play();
                food = generateFood();
                snake.push({});
                scoreRef.current += 1;
                setDisplayScore(scoreRef.current);
            }


            snake.unshift(newHead);
            snake.pop();

            drawSnake();
            drawFood();
        }

        let gameLoop = setInterval(update, gameSpeed);
        window.addEventListener("keydown", handleKeydown);

        function resizeGameCanvas() {
            const newWidth = gameContainer.current.clientWidth;
            const newHeight = gameContainer.current.clientHeight;
            app.renderer.resize(newWidth, newHeight);
        }

        window.addEventListener("resize", resizeGameCanvas);
        resizeGameCanvas();

        return () => {
            clearInterval(gameLoop);
            window.removeEventListener("keydown", handleKeydown);
            window.removeEventListener("resize", resizeGameCanvas);
            app.destroy(true);
            stopAllSounds();
        };
    }, [gameStarted, gameSpeed, updateHighScore, stopAllSounds]);

    function restartGame() {
        stopAllSounds();
        setIsGameOver(false);
        setGameStarted(false);
        scoreRef.current = 0;
        setDisplayScore(0);
    }

    return (
        <div className="snake-game-container">
            {!gameStarted && (
                <div>
                    <h1>Snake Revival</h1>
                    <button onClick={() => setGameStarted(true)}>Start Game</button>
                    <p>Select Difficulty:</p>
                    <button 
                    className={selectedDifficulty === "easy" ? "active-difficulty" : ""}
                    onClick={() => { setGameSpeed(gameSpeeds.easy); setSelectedDifficulty("easy"); }}>
                     Easy
                    </button>
                    <button 
                    className={selectedDifficulty === "medium" ? "active-difficulty" : ""}
                    onClick={() => { setGameSpeed(gameSpeeds.medium); setSelectedDifficulty("medium"); }}>
                     Medium
                    </button>
                    <button 
                    className={selectedDifficulty === "hard" ? "active-difficulty" : ""}
                    onClick={() => { setGameSpeed(gameSpeeds.hard); setSelectedDifficulty("hard"); }}>
                     Hard
                    </button>
                </div>
            )}
            {gameStarted && <div ref={gameContainer} className="game-canvas"></div>}
            <h2>Score: {displayScore}</h2>
            <h3>High Score: {highScore}</h3>
            {isGameOver && (
                <div className="game-over-screen">
                    <h1>GAME OVER</h1>
                    <button onClick={restartGame}>Restart Game</button>
                </div>
            )}
        </div>
    );
};

export default SnakeGame;
