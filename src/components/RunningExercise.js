import "/Users/aimeen/dig4639-s24-react-aimeeneu/unit2/lab9/src/App.css";
import { useState, useRef } from "react";
import formatTime from "./FormatTime";

export default function RunningExercise({ exercise, setMenuScreen }) {
    const [elapsedTime, setElapsedTime] = useState(0);
    const [lapTimes, setLapTimes] = useState([]);
    const [isRunning, setIsRunning] = useState(false);
    const startTimeRef = useRef(null);
  
    const startExercise = () => {
      setIsRunning(true);
      setElapsedTime(0);
      setLapTimes([]);
  
      // Update elapsed time every 100 milliseconds
      const intervalId = setInterval(() => {
        setElapsedTime((prevTime) => prevTime + 100);
      }, 100);
  
      // Save intervalId to clear it later
      startTimeRef.current = intervalId;
    };
  
    const stopExercise = () => {
      setIsRunning(false);
  
      // Clear the interval
      clearInterval(startTimeRef.current);
    };
  
    const recordLap = () => {
      if (isRunning) {
        const lapTime = elapsedTime;
        setLapTimes((prevLaps) => [...prevLaps, lapTime]);
      }
    };
  
    const resetExercise = () => {
      setIsRunning(false);
      setElapsedTime(0);
  
      // Clear the interval
      clearInterval(startTimeRef.current);
    };
  
    return (
      <div>
        <p>{exercise.name}</p>
        <div style={{ fontSize: "2em" }}>{formatTime(elapsedTime)}</div>
        {isRunning ? (
          <>
            <button style={{ fontSize: "1.3em" }} onClick={stopExercise}>
              Stop Exercise
            </button>
            <button style={{ fontSize: "1.3em" }} onClick={recordLap}>
              Record Lap
            </button>
          </>
        ) : (
          <>
            <button style={{ fontSize: "1.3em" }} onClick={startExercise}>
              Start Exercise
            </button>
            <button style={{ fontSize: "1.3em" }} onClick={resetExercise}>
              Reset Exercise
            </button>
          </>
        )}
        <br />
        <div>
          <p>Lap Times:</p>
          <ul>
            {lapTimes.map((lapTime, index) => (
              <li key={index}>{`Lap ${index + 1}: ${formatTime(lapTime)}`}</li>
            ))}
          </ul>
        </div>
        <button style={{ fontSize: "1em" }} onClick={() => setMenuScreen()}>
          Return to Menu
        </button>
      </div>
    );
  }