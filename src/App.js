import React from 'react';
import { useState, useCallback } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './components/Home';
import DurationExercise from './components/DurationExercise';
import RepetitionExercise from './components/RepetitionExercise';
import RunningExercise from './components/RunningExercise';

const Stack = createNativeStackNavigator();

const MENU_SCREEN = 'menu';
const EXERCISE_SCREEN = 'exercise';
const DURATION_EXERCISE = 'duration';
const REPETITION_EXERCISE = 'repetition';
const RUNNING_EXERCISE = 'running';

let exerciseList = [
  { type: RUNNING_EXERCISE, name: 'Running' },
  { type: DURATION_EXERCISE, name: 'Plank' },
  { type: DURATION_EXERCISE, name: 'Walking' },
  { type: REPETITION_EXERCISE, name: 'Squats' },
  { type: REPETITION_EXERCISE, name: 'Calf Raises' },
  { type: REPETITION_EXERCISE, name: 'Lunges' },
];

const App = () => {
  const [currentScreen, setCurrentScreen] = useState(MENU_SCREEN);
  const [currentExercise, setCurrentExercise] = useState(exerciseList[3]);

  const buttonClick = useCallback((exercise) => {
    setCurrentExercise(exercise);
    setCurrentScreen(EXERCISE_SCREEN);
  }, []);

  let screenComponent = null;

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
        screenComponent = null;
    }
  }

  return (
    <NavigationContainer>
      {screenComponent} {/* Include screenComponent here */}
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Duration" component={DurationExercise} />
        <Stack.Screen name="Repetition" component={RepetitionExercise} />
        <Stack.Screen name="Running" component={RunningExercise} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

// I used various resources to help me write this code