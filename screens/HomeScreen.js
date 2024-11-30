import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import ToDoForm from '../components/ToDoForm';
import ToDoList from '../components/ToDoList';
import MainLayout from '../layouts/MainLayout';

const HomeScreen = ({ navigation, addTask, tasks }) => {
  return (
    <MainLayout title="My ToDo App">
      <View style={styles.container}>
        {/* Pass addTask and tasks props to ToDoForm and ToDoList */}
        <ToDoForm addTask={addTask} />
        <ToDoList tasks={tasks} />
        <Button
          title="Go to About"
          onPress={() => navigation.navigate('About')} // Navigate to About screen
        />
      </View>
    </MainLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default HomeScreen;
