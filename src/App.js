import React, { useState } from "react";
import "./App.css";
import { Board } from "./components/Board";
import { ScoreBoard } from "./components/ScoreBoard";
import { ResetButton } from "./components/ResetButton";
import { Header } from "./components/Header";

function App() {
  // Array containing all the possible winning combinations on the Tic-Tac-Toe board
  const WIN_CONDITION = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  // State variables to manage the game state
  const [board, setBoard] = useState(Array(9).fill(null)); // Represents the current state of the game board
  const [xPlaying, setPlaying] = useState(true); // Indicates whether it's X player's turn
  const [scores, setScores] = useState({ xScore: 0, oScore: 0 }); // Keeps track of the scores for X and O players
  const [gameOver, setGameOver] = useState(false); // Helps to disable further box clicks when the game is over

  // Function to handle clicks on the game boxes
  const handleBoxClick = (boxIdx) => {
    const updatedBoard = board.map((value, idx) => {
      if (idx === boxIdx) {
        return xPlaying ? "X" : "O";
      } else {
        return value;
      }
    });

    // Check for a winner after each move
    const winner = checkWinner(updatedBoard);

    if (winner) {
      // If a winner is found, update the scores accordingly
      if (winner === "O") {
        let { oScore } = scores;
        oScore += 1;
        setScores({ ...scores, oScore });
      } else if (winner === "X") {
        let { xScore } = scores;
        xScore += 1;
        setScores({ ...scores, xScore });
      }
    }

    // Update the game board and toggle the turn between X and O players
    setBoard(updatedBoard);
    setPlaying(!xPlaying);
  };

  // Function to check if there's a winner based on the current state of the board
  const checkWinner = (board) => {
    for (let i = 0; i < WIN_CONDITION.length; i++) {
      const [x, y, z] = WIN_CONDITION[i];

      if (board[x] && board[x] === board[y] && board[y] === board[z]) {
        setGameOver(true); // Set the 'gameOver' state to true to disable further clicks
        return board[x]; // Return the winning player's value ('X' or 'O')
      }
    }

    // If no winner is found, return null
    return null;
  };

  // Function to reset the game state when the Reset Button is clicked
  const resetBoard = () => {
    setGameOver(false); // Set 'gameOver' to false to enable further clicks
    setBoard(Array(9).fill(null)); // Reset the board to an empty state (an array of 9 null values)
  };

  // Render the components with appropriate props
  return (
    <div className="App">
      {/* Render the Header component */}
      <Header />

      {/* Render the ScoreBoard component and pass the scores and current player as props */}
      <ScoreBoard scores={scores} xPlaying={xPlaying} />

      {/* Render the Board component and pass the board state and click handler as props */}
      {/* If the game is over, pass the resetBoard function as the click handler */}
      <Board board={board} onClick={gameOver ? resetBoard : handleBoxClick} />

      {/* Render the ResetButton component and pass the resetBoard function as the click handler */}
      <ResetButton resetBoard={resetBoard} />
    </div>
  );
}

export default App;
