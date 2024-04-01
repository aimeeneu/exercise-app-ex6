import React, { useState } from 'react';
import { Text, View, Button } from 'react-native';

const RepetitionExercise = ({ exercise, setMenuScreen }) => {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const resetCount = () => {
    setCount(0);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>{exercise.name}</Text>
      <Text>Count: {count}</Text>
      <Button title="Increase Count" onPress={increaseCount} />
      <Button title="Reset Count" onPress={resetCount} />
      <Button title="Home" onPress={setMenuScreen} />
    </View>
  );
};

export default RepetitionExercise;
