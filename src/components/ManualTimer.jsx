import React, { useState, useEffect } from "react";
import "../styles/ManualTimer.css"; 

import buzzerSound from "../audio/basqueteTime.mp3";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause, faRotateRight } from "@fortawesome/free-solid-svg-icons";

function ManualTimer() {
  const initialMinutes = 10;
  const [minutes, setMinutes] = useState(initialMinutes);
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let timer;
    const audio = new Audio(buzzerSound);
    if (running && (minutes > 0 || seconds > 0)) {
      timer = setInterval(() => {
        if (seconds === 0) {
          if (minutes > 0) {
            setMinutes((prevMinutes) => prevMinutes - 1);
            setSeconds(59);
          } else {
            setRunning(false);
            clearInterval(timer);
          }
        } else {
          setSeconds((prevSeconds) => prevSeconds - 1);
        }
      }, 1000);
    } else if (minutes === 0 && seconds === 0) {
      playSound(audio);
      setRunning(false);
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [running, minutes, seconds]);

  const playSound = (audio) => {
    audio.play();
  };

  const startTimer = () => {
    setRunning(true);
  };

  const pauseTimer = () => {
    setRunning(false);
  };

  const resetTimer = () => {
    setMinutes(initialMinutes);
    setSeconds(0);
    setRunning(false);
  };

  const updateManualTime = () => {
    const newMinutes = parseInt(prompt("Digite os minutos desejados:"), 10);
    if (!isNaN(newMinutes)) {
      setMinutes(newMinutes);
    }
  };

  return (
    <div className="ManualTimer">
      <h2>
        {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
      </h2>
      <button onClick={startTimer}><FontAwesomeIcon icon={faPlay} /></button>
      <button onClick={pauseTimer}><FontAwesomeIcon icon={faPause} /></button>
      <button onClick={resetTimer}><FontAwesomeIcon icon={faRotateRight} /></button>
      <button onClick={updateManualTime}>Editar Tempo</button>
    </div>
  );
}

export default ManualTimer;
