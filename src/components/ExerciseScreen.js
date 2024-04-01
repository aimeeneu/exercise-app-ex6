import React from 'react';
import { Text, View, Button } from 'react-native';
import DurationExercise from '/Users/aimeen/dig4639-s24-react-aimeeneu/unit2/lab9/src/components/DurationExercise.js'
import RepetitionExercise from '/Users/aimeen/dig4639-s24-react-aimeeneu/unit2/lab9/src/components/RepetitionExercise.js'; 

export const EXERCISE_SCREEN = 'ExerciseScreen';
export const DURATION_EXERCISE = 'DURATION_EXERCISE';
export const MENU_SCREEN = 'menu';
export const REPETITION_EXERCISE = 'REPETITION_EXERCISE';

const ExerciseScreen = ({ route, navigation }) => {
    const { exerciseType, exerciseList } = route.params;
  
    const navigateToSuggestedExercise = (suggestedExercise) => {
      navigation.navigate(EXERCISE_SCREEN, { exerciseType: suggestedExercise.type, exerciseList });
    };
  
    let exerciseComponent = null;
    switch (exerciseType) {
      case DURATION_EXERCISE:
        exerciseComponent = <DurationExercise exercise={exerciseList[0]} setMenuScreen={() => navigation.navigate(MENU_SCREEN)} />;
        break;
      case REPETITION_EXERCISE:
        exerciseComponent = <RepetitionExercise exercise={exerciseList[0]} setMenuScreen={() => navigation.navigate(MENU_SCREEN)} />;
        break;
      default:
        exerciseComponent = <Text>Unknown Exercise Type</Text>;
        break;
    }
  
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        {exerciseComponent}
        <Button title="Suggested Exercise" onPress={() => navigateToSuggestedExercise(exerciseList[1])} />
        <Button title="Home" onPress={() => navigation.navigate(MENU_SCREEN)} />
      </View>
    );
  };

  export default ExerciseScreen;