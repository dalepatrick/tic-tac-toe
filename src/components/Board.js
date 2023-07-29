import React from "react";
import { Box } from "./Box";
import "./Board.css";

export const Board = ({ board, onClick }) => {
  return (
    <div className="board">
      {/* Map over each value in the 'board' array and render a Box component for each */}
      {board.map((value, idx) => (
        // Add a unique 'key' prop to the Box component using the index (idx) of the element
        <Box key={idx} value={value} onClick={() => value === null && onClick(idx)} />
      ))}
    </div>
  );
};
