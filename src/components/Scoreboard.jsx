import React, { useState } from "react";
import "../styles/Scoreboard.css"; 
import TeamScores from "./TeamScores"; 

function Scoreboard() {
  const [teamAName, setTeamAName] = useState("Team A");
  const [teamBName, setTeamBName] = useState("Team B");
  const [teamAScore, setTeamAScore] = useState(0);
  const [teamBScore, setTeamBScore] = useState(0);
  const [isEditingTeamAName, setIsEditingTeamAName] = useState(false);
  const [isEditingTeamBName, setIsEditingTeamBName] = useState(false);

  const updateScore = (team, points) => {
    if (team === "teamA") {
      setTeamAScore((prevScore) => Math.max(0, prevScore + points));
    } else if (team === "teamB") {
      setTeamBScore((prevScore) => Math.max(0, prevScore + points));
    }
  };

  const openEditModal = (team) => {
    if (team === "teamA") {
      setIsEditingTeamAName(true);
    } else if (team === "teamB") {
      setIsEditingTeamBName(true);
    }
  };

  const closeEditModal = (team) => {
    if (team === "teamA") {
      setIsEditingTeamAName(false);
    } else if (team === "teamB") {
      setIsEditingTeamBName(false);
    }
  };

  const handleTeamANameEdit = (e) => {
    setTeamAName(e.target.value);
  };

  const handleTeamBNameEdit = (e) => {
    setTeamBName(e.target.value);
  };

  return (
    <div className="Scoreboard">
      <TeamScores
        teamAName={teamAName}
        teamBName={teamBName}
        teamAScore={teamAScore}
        teamBScore={teamBScore}
      />
      <div className="TeamPanel">
        <div className="TeamName">
          <h2 onClick={() => openEditModal("teamA")}>{teamAName}</h2>
          {isEditingTeamAName && (
            <div className="Modal">
              <input
                type="text"
                value={teamAName}
                onChange={handleTeamANameEdit}
              />
              <button onClick={() => closeEditModal("teamA")}>Salvar</button>
            </div>
          )}
        </div>
        <div className="ScoreButtons">
          <button onClick={() => updateScore("teamA", 1)}>+1</button>
          <button onClick={() => updateScore("teamA", 2)}>+2</button>
          <button onClick={() => updateScore("teamA", 3)}>+3</button>
          <button onClick={() => updateScore("teamA", -1)}>-1</button>
        </div>
      </div>
      <div className="TeamPanel">
        <div className="TeamName">
          <h2 onClick={() => openEditModal("teamB")}>{teamBName}</h2>
          {isEditingTeamBName && (
            <div className="Modal">
              <input
                type="text"
                value={teamBName}
                onChange={handleTeamBNameEdit}
              />
              <button onClick={() => closeEditModal("teamB")}>Salvar</button>
            </div>
          )}
        </div>
        <div className="ScoreButtons">
          <button onClick={() => updateScore("teamB", 1)}>+1</button>
          <button onClick={() => updateScore("teamB", 2)}>+2</button>
          <button onClick={() => updateScore("teamB", 3)}>+3</button>
          <button onClick={() => updateScore("teamB", -1)}>-1</button>
        </div>
      </div>
    </div>
  );
}

export default Scoreboard;
