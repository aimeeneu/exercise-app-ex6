import "./App.css";
import { useState, useCallback, useRef } from "react";
import DurationExercise from "./components/DurationExercise";

const MENU_SCREEN = "menu";
const EXERCISE_SCREEN = "exercise";
const DURATION_EXERCISE = "duration";
const REPETITION_EXERCISE = "repetition";
const RUNNING_EXERCISE = "running"

let exerciseList = [
  {type: RUNNING_EXERCISE, name: "Running"},
  {type: DURATION_EXERCISE, name: "Plank"},
  {type: DURATION_EXERCISE, name: "Walking"},
  {type: REPETITION_EXERCISE, name: "Squats"},
  {type: REPETITION_EXERCISE, name: "Calf Raises"},
  {type: REPETITION_EXERCISE, name: "Lunges"}
]


function RepetitionExercise({ exercise, setMenuScreen }) {
  let [count, setCount] = useState(0);
  return (
    <div>
      <p>{exercise.name}</p>
      <p style={{ fontSize: "5em" }}>{count}</p>
      <button style={{ fontSize: "1.3em" }} onClick={() => setCount(count => count + 1)}>
        Increment
      </button>
      <button style={{ fontSize: "1.3em" }} onClick={() => setCount(0)}>
        Reset
      </button>
      <br />
      <button style={{ fontSize: "1em" }} onClick={() => setMenuScreen()}>
        Return to Menu
      </button>
    </div>
  );
}

function RunningExercise({ exercise, setMenuScreen }) {
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

// Format time in MM:SS format
function formatTime(milliseconds) {
  const seconds = Math.floor(milliseconds / 1000);
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
}

function App() {
  const [currentScreen, setCurrentScreen] = useState(MENU_SCREEN);
  const [currentExercise, setCurrentExercise] = useState(exerciseList[3]);
  let screenComponent = undefined;

  const buttonClick = useCallback((exercise) => {
    setCurrentExercise(exercise);
    setCurrentScreen(EXERCISE_SCREEN);
  }, []);

  if (currentScreen === MENU_SCREEN) {
    screenComponent = (
      <div>
        <p>Exercise Menu</p>
        <ul>
          {exerciseList.map((exercise) => (
            <li key={exercise.name}>
              <button onClick={() => buttonClick(exercise)}>{exercise.name}</button>
            </li>
          ))}
        </ul>
      </div>
    );
  } else if (currentScreen === EXERCISE_SCREEN) {
    switch (currentExercise.type) {
      case DURATION_EXERCISE:
        screenComponent = (
          <DurationExercise
            exercise={currentExercise}
            setMenuScreen={() => setCurrentScreen(MENU_SCREEN)}
          />
        );
        break;
      case REPETITION_EXERCISE:
        screenComponent = (
          <RepetitionExercise
            exercise={currentExercise}
            setMenuScreen={() => setCurrentScreen(MENU_SCREEN)}
          />
        );
        break;
      case RUNNING_EXERCISE:
        screenComponent = (
          <RunningExercise
            exercise={currentExercise}
            setMenuScreen={() => setCurrentScreen(MENU_SCREEN)}
          />
        );
        break;
      default:
        screenComponent = undefined;
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>{screenComponent}</p>
      </header>
    </div>
  );
}

export default App;
