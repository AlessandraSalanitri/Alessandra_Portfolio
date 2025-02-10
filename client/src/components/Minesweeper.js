import React, { useState, useEffect, useRef } from "react";
import "../styles/Minesweeper.css";
import { Howl } from "howler";
import explosionSoundFile from "../assets/explosion.mp3";
import clickSoundFile from "../assets/click.mp3";
import winSoundFile from "../assets/win.mp3"; // ✅ NEW: Victory Sound!

const GRID_SIZE = 10;
const NUM_MINES = 15;

const explosionSound = new Howl({ src: [explosionSoundFile], volume: 1.0 });
const clickSound = new Howl({ src: [clickSoundFile], volume: 0.8 });
const winSound = new Howl({ src: [winSoundFile], volume: 1.0 }); // ✅ New Win Sound!

const generateBoard = () => {
    let board = Array(GRID_SIZE).fill().map(() => Array(GRID_SIZE).fill({
        isMine: false,
        isRevealed: false,
        isFlagged: false,
        nearbyMines: 0,
        exploded: false
    }));

    let minesPlaced = 0;
    while (minesPlaced < NUM_MINES) {
        let x = Math.floor(Math.random() * GRID_SIZE);
        let y = Math.floor(Math.random() * GRID_SIZE);
        if (!board[x][y].isMine) {
            board[x][y] = { ...board[x][y], isMine: true };
            minesPlaced++;
        }
    }

    const directions = [
        [-1, -1], [-1, 0], [-1, 1],
        [0, -1],         [0, 1],
        [1, -1],  [1, 0], [1, 1]
    ];

    for (let i = 0; i < GRID_SIZE; i++) {
        for (let j = 0; j < GRID_SIZE; j++) {
            if (board[i][j].isMine) continue;
            let count = 0;
            directions.forEach(([dx, dy]) => {
                let newX = i + dx, newY = j + dy;
                if (newX >= 0 && newX < GRID_SIZE && newY >= 0 && newY < GRID_SIZE && board[newX][newY].isMine) {
                    count++;
                }
            });
            board[i][j] = { ...board[i][j], nearbyMines: count };
        }
    }

    return board;
};

const Minesweeper = () => {
    const [board, setBoard] = useState(generateBoard());
    const [gameOver, setGameOver] = useState(false);
    const [gameWon, setGameWon] = useState(false);
    const [timer, setTimer] = useState(0);
    const timerRef = useRef(null);

    useEffect(() => {
        if (!gameOver && !gameWon) {
            timerRef.current = setInterval(() => setTimer(prev => prev + 1), 1000);
        } else {
            clearInterval(timerRef.current);
        }

        return () => clearInterval(timerRef.current);
    }, [gameOver, gameWon]);

    const revealTile = (x, y) => {
        if (board[x][y].isRevealed || board[x][y].isFlagged || gameOver) return;

        const newBoard = [...board];

        if (newBoard[x][y].isMine) {
            explosionSound.play();
            newBoard[x][y] = { ...newBoard[x][y], isRevealed: true, exploded: true };
            revealAllMines(newBoard);
            setBoard(newBoard);
            setGameOver(true);
            return;
        }

        clickSound.play();
        newBoard[x][y] = { ...newBoard[x][y], isRevealed: true };

        if (newBoard[x][y].nearbyMines === 0) {
            const directions = [
                [-1, -1], [-1, 0], [-1, 1],
                [0, -1],         [0, 1],
                [1, -1],  [1, 0], [1, 1]
            ];
            directions.forEach(([dx, dy]) => {
                let newX = x + dx, newY = y + dy;
                if (newX >= 0 && newX < GRID_SIZE && newY >= 0 && newY < GRID_SIZE && !newBoard[newX][newY].isRevealed) {
                    revealTile(newX, newY);
                }
            });
        }

        setBoard(newBoard);
        checkWin(newBoard);
    };

    const revealAllMines = (board) => {
        board.forEach(row => row.forEach(tile => {
            if (tile.isMine) tile.isRevealed = true;
        }));
    };

    const checkWin = (board) => {
        let win = true;
        board.forEach(row => {
            row.forEach(tile => {
                if (!tile.isMine && !tile.isRevealed) win = false;
            });
        });

        if (win) {
            winSound.play(); // 
            setGameWon(true);
        }
    };

    const restartGame = () => {
        setBoard(generateBoard());
        setGameOver(false);
        setGameWon(false);
        setTimer(0);
    };

    return (
        <div className="minesweeper">
            <h1>Minesweeper Revival</h1>
            {gameOver && <h2 className="game-over">💥 Game Over! 💥</h2>}
            {gameWon && (
                <div className="win-screen">
                    <h1 className="win-text">🎉 YOU WON! 🎉</h1>
                    <div className="fireworks"></div> {/* 🎆 Fireworks */}
                </div>
            )}

            {gameOver && (
                <div className="lose-screen">
                    <h1 className="lose-text"> Oopsie daisy!!💥</h1>
                    <h1 className="lose-text"> That was a big one! 😵</h1>
                    <h2 className="lose-text2"> You almost made it..... </h2>
                    <h2 className="lose-text2"> Kinda! 😅 Better luck next time! 💪 </h2>
                 </div>
                )}

            <div className="grid">
                {board.map((row, x) => (
                    <div key={x} className="row">
                        {row.map((tile, y) => (
                            <div
                                key={y}
                                className={`tile ${tile.isRevealed ? "revealed" : ""} ${tile.exploded ? "exploded" : ""}`}
                                onClick={() => revealTile(x, y)}
                            >
                                {tile.isRevealed && tile.isMine && !tile.exploded ? "💣" : ""}
                                {tile.exploded ? "🔥" : ""}
                                {tile.isRevealed && !tile.isMine && tile.nearbyMines > 0 ? tile.nearbyMines : ""}
                            </div>
                        ))}
                    </div>
                ))}
            </div>

            <h2>Time: {timer}s</h2>
            <button className="restart-btn" onClick={restartGame}>Restart</button>

            {/* THIS IS JUST AND OOOONLY FOR DEVELOPMENT PURPOSES AND SEE THE WINNING EFFECT XD  
            DO NOT USE!! DO NOT CHEEEAT!! HAHAHAHA


            <button className="cheat-btn" onClick={() => {
                const newBoard = [...board];

                    // Reveal all non-mine tiles
                    newBoard.forEach(row => {
                    row.forEach(tile => {
                        if (!tile.isMine) {
                            tile.isRevealed = true;
                        }
                    });
                    });

                    setBoard(newBoard);
                    checkWin(newBoard); // 🚀 This will trigger the win animation!
                    }}>
                🏆 Cheat Win
                        </button> 
                        
                        */}
        </div>

        



    );
};

export default Minesweeper;
