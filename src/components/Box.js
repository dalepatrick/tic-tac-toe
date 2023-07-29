import React from "react";
import "./Box.css";

// Box component represents a single box in the Tic-Tac-Toe game
export const Box = ({ value, onClick }) => {
  // Determine the style of the box based on its value ('X' or 'O')
  const style = value === "X" ? "box x" : "box o";

  return (
    // The box is represented by a button, and it triggers the 'onClick' function when clicked
    <button className={style} onClick={onClick}>
      {value}
    </button>
  );
};
