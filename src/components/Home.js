import React from 'react';
import { FlatList, Button, View } from 'react-native';

console.log('Home component rendered'); // troubleshooting

const Home = ({ navigation }) => {
  const exerciseList = [
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
      onPress={() => navigation.navigate('ExerciseScreen', { exerciseType: item.key })}
    />
  );

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.key}
      />
    </View>
  );
};

export default Home;
