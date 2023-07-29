import React from "react";
import "./ScoreBoard.css";

// ScoreBoard component receives 'scores' and 'xPlaying' as props
export const ScoreBoard = ({ scores, xPlaying }) => {
  // Extract 'xScore' and 'oScore' from the 'scores' object using destructuring
  const { xScore, oScore } = scores;

  return (
    <div className="scoreboard">
      {/* Display X player's score, and add 'inactive' class to style when it's not their turn */}
      <span className={`score x-score ${!xPlaying && "inactive"}`}>X - {xScore}</span>
      {/* Display O player's score, and add 'inactive' class to style when it's not their turn */}
      <span className={`score o-score ${xPlaying && "inactive"}`}>O - {oScore}</span>
    </div>
  );
};
