import React from "react";
import "./ResetButton.css";

// ResetButton component receives 'resetBoard' as a prop
export const ResetButton = ({ resetBoard }) => {
  return (
    // The button triggers the 'resetBoard' function when clicked
    <button className="reset-btn" onClick={resetBoard}>
      Reset
    </button>
  );
};
