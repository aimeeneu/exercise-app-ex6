import React from 'react';
import { FlatList, Button } from 'react-native';

const Home = ({ navigation }) => {
    const data = [
      { key: 'Duration', title: 'Duration Exercise' },
      { key: 'Repetition', title: 'Repetition Exercise' },
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
  