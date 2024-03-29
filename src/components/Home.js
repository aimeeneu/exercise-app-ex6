import React from 'react';
import { FlatList, Button } from 'react-native';

const Home = ({ navigation }) => {
  const exerciseList = [
    { type: 'RUNNING_EXERCISE', name: 'Running' },
    { type: 'DURATION_EXERCISE', name: 'Plank' },
    { type: 'DURATION_EXERCISE', name: 'Walking' },
    { type: 'REPETITION_EXERCISE', name: 'Squats' },
    { type: 'REPETITION_EXERCISE', name: 'Calf Raises' },
    { type: 'REPETITION_EXERCISE', name: 'Lunges' },
  ];

  const data = [
    { key: 'Duration', title: 'Duration Exercise', exercises: exerciseList.filter(exercise => exercise.type === 'DURATION_EXERCISE') },
    { key: 'Repetition', title: 'Repetition Exercise', exercises: exerciseList.filter(exercise => exercise.type === 'REPETITION_EXERCISE') },
  ];
  
    const renderItem = ({ item }) => (
      <Button
        title={item.title}
        onPress={() => navigation.navigate(item.key)}
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
  
  export default Home;
  