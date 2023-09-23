import React from "react";
import "../styles/TeamScores.css"; // Crie um arquivo CSS para este componente

function TeamScores({ teamAName, teamBName, teamAScore, teamBScore }) {
  return (
    <div className="TeamScores">
      <div className="TeamScore">
        <h2>{teamAName}</h2>
        <h3>{teamAScore}</h3>
      </div>
      <div className="TeamScore">
        <h2>{teamBName}</h2>
        <h3>{teamBScore}</h3>
      </div>
    </div>
  );
}

export default TeamScores;
