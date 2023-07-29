import React from "react";
import { Box } from "./Box"; // Importing the Box component
import "./Board.css";

// Board component renders the Tic-Tac-Toe game board
export const Board = ({ board, onClick }) => {
  return (
    <div className="board">
      {/* Map over each value in the 'board' array and render a Box component for each */}
      {board.map((value, idx) => {
        // The 'onClick' function is conditionally set to be called only if the box is empty (value === null)
        return <Box value={value} onClick={() => value === null && onClick(idx)} />;
      })}
    </div>
  );
};
