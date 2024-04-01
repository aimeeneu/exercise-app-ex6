import React, { useState } from 'react';
import { Text, View, Button } from 'react-native';

const DurationExercise = ({ exercise, setMenuScreen }) => {
  const [timer, setTimer] = useState(0);
  const [running, setRunning] = useState(false);

  const startTimer = () => {
    setRunning(true);
    const intervalId = setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1000); // Increase timer by 1 second
    }, 1000);
    // Save intervalId to clear it later
    setMenuScreen(() => clearInterval(intervalId));
  };

  const resetTimer = () => {
    setRunning(false);
    setTimer(0);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>{exercise.name}</Text>
      <Text>{timer} seconds</Text>
      {!running ? (
        <Button title="Start Timer" onPress={startTimer} />
      ) : (
        <Button title="Reset Timer" onPress={resetTimer} />
      )}
      <Button title="Home" onPress={setMenuScreen} />
    </View>
  );
};

export default DurationExercise;

