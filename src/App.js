import React, { useState, useCallback } from 'react';
import { FlatList, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DurationExercise from './components/DurationExercise';
import RepetitionExercise from './components/RepetitionExercise';
import RunningExercise from './components/RunningExercise';

const Stack = createNativeStackNavigator();

const MENU_SCREEN = 'menu';
const EXERCISE_SCREEN = 'exercise';
const DURATION_EXERCISE = 'DURATION_EXERCISE';
const REPETITION_EXERCISE = 'REPETITION_EXERCISE';
const RUNNING_EXERCISE = 'RUNNING_EXERCISE';

const Home = ({ navigation, route }) => {
  const { exerciseList } = route.params;

  const data = [
    { key: 'Duration', title: 'Duration Exercise', exercises: exerciseList.filter(exercise => exercise.type === DURATION_EXERCISE) },
    { key: 'Repetition', title: 'Repetition Exercise', exercises: exerciseList.filter(exercise => exercise.type === REPETITION_EXERCISE) },
  ];

  const renderItem = ({ item }) => (
    <Button
      title={item.title}
      onPress={() => navigation.navigate(item.key, { exerciseList })}
    />
  );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.key}
    />
  );
};

const App = () => {
  const [currentScreen, setCurrentScreen] = useState(MENU_SCREEN);

  const exerciseList = [
    { type: RUNNING_EXERCISE, name: 'Running' },
    { type: DURATION_EXERCISE, name: 'Plank' },
    { type: DURATION_EXERCISE, name: 'Walking' },
    { type: REPETITION_EXERCISE, name: 'Squats' },
    { type: REPETITION_EXERCISE, name: 'Calf Raises' },
    { type: REPETITION_EXERCISE, name: 'Lunges' },
  ];

  const buttonClick = useCallback((exercise) => {
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
    // Switch statement for rendering exercise component based on currentExercise.type
  }

  return (
    <NavigationContainer>
      {screenComponent}
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} initialParams={{ exerciseList }} />
        <Stack.Screen name="Duration" component={DurationExercise} />
        <Stack.Screen name="Repetition" component={RepetitionExercise} />
        <Stack.Screen name="Running" component={RunningExercise} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
