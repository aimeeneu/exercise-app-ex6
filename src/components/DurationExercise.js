import "/Users/aimeen/dig4639-s24-react-aimeeneu/unit2/lab9/src/App.css";
import StopWatch from './stopWatch';

export default function DurationExercise({exercise, setMenuScreen}) {
    let {name} = exercise
    return <div>
    <p>{name}</p>
    <StopWatch/>
    <button style={{fontSize:"1em"}} onClick={setMenuScreen}>Back to Menu</button>
    </div>
  }
