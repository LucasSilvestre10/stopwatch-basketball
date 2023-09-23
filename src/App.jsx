import React from "react";
import "./App.css"; // Importe o arquivo CSS para este componente
import ManualTimer from "./components/ManualTimer";
import Scoreboard from "./components/Scoreboard";
import ShotClock from "./components/ShotClock";

function App() {
  return (
    <div className="App">
      <div className="App-content">
        <div className="App-column">
          <Scoreboard />
          <ShotClock />
          <ManualTimer />
        </div>
      </div>
    </div>
  );
}

export default App;
