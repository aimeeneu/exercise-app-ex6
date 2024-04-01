import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '/Users/aimeen/dig4639-s24-react-aimeeneu/unit2/lab9/src/components/Home.js';
import ExerciseScreen from '/Users/aimeen/dig4639-s24-react-aimeeneu/unit2/lab9/src/components/ExerciseScreen.js';
import DurationExercise from './components/DurationExercise';
import RepetitionExercise from './components/RepetitionExercise';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="ExerciseScreen" component={ExerciseScreen} />
        <Stack.Screen name="DurationExercise" component={DurationExercise} />
        <Stack.Screen name="RepetitionExercise" component={RepetitionExercise} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

// I used various resources to help me write this code