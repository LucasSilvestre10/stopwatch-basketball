import React, { useState, useEffect } from "react";
import "../styles/ShotClock.css"; 

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons";

import buzzerSound from "../audio/basqueteTime.mp3";

function ShotClock() {
  const [seconds, setSeconds] = useState(24);
  const [running, setRunning] = useState(false);
  const [initialSeconds] = useState(24);

  useEffect(() => {
    let shotClock;
    const audio = new Audio(buzzerSound);

    const tick = () => {
      setSeconds((prevSeconds) => prevSeconds - 1);
    };

    if (running && seconds > 0) {
      shotClock = setInterval(tick, 1000);
    } else if (seconds === 0) {
      setRunning(false);
      clearInterval(shotClock);
      playSound(audio);
    }
    return () => clearInterval(shotClock);
  }, [running, seconds]);

  const playSound = (audio) => {
    audio.play();
  };

  const startShotClock = () => {
    if (!running) {
      setRunning(true);
    }
  };

  const pauseShotClock = () => {
    setRunning(false);
  };

  const resetTo24 = () => {
    if (running || seconds === 0) {
      setSeconds(initialSeconds);
      setRunning(true);
    } else {
      setSeconds(initialSeconds);
    }
  };

  const resetTo14 = () => {
    if (running || seconds === 0) {
      setSeconds(14);
      setRunning(true);
    } else {
      setSeconds(14);
    }
  };

  return (
    <div className="ShotClock">
      <h2>{seconds}</h2>
      <button onClick={startShotClock}><FontAwesomeIcon icon={faPlay} /></button>
      <button onClick={pauseShotClock}><FontAwesomeIcon icon={faPause} /></button>
      <button onClick={resetTo24}>24</button>
      <button onClick={resetTo14}>14</button>
    </div>
  );
}

export default ShotClock;
