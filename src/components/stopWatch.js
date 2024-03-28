import { useCallback, useEffect, useState } from "react";
import "/Users/aimeen/dig4639-s24-react-aimeeneu/unit2/lab9/src/App.css";

export default function StopWatch() {
  let [running, setRunning] = useState(false);
  let [timer, setTimer] = useState(0);

  let updateTimer = useCallback(() => {
    if (running) {
      setTimer((time) => time + 10);
    }
  }, [running]);

  useEffect(() => {
    let currentTimer = setInterval(updateTimer, 10);
    return () => clearInterval(currentTimer);
  }, [running, updateTimer]);

  let startStop = useCallback(() => {
    setRunning(!running);
  }, [running]);

  let reset = useCallback(() => {
    setTimer(0);
    setRunning(false); // Stop the timer when resetting
  }, []);

  let mins = (Math.floor((timer / (1000 * 60)) % 60)).toString().padStart(2, "0");
  let secs = (Math.floor((timer / 1000) % 60)).toString().padStart(2, "0");

  return (
    <div style={{ width: "100vw", textAlign: "center" }}>
      <p style={{ fontSize: "7em", margin: "auto", fontFamily: "monospace" }}>
        {mins}:{secs}
      </p>
      <button style={{ fontSize: "4em" }} onClick={startStop}>
        {running ? "Pause" : "Start"}
      </button>
      <button style={{ fontSize: "4em" }} onClick={reset}>
        Reset
      </button>
    </div>
  );
}
