import React, { useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import ToDoList from './components/ToDoList';
import ToDoForm from './components/ToDoForm';

export default function App() {
  // Part A: State Management - Define state with hard-coded tasks
  const [tasks, setTasks] = useState([
    'Do laundry',
    'Go to gym',
    'Walk dog',
  ]);

  // Part 3: Implement the addTask function to update the state of tasks
  const addTask = (taskText) => {
    // Add the new task to the tasks state
    setTasks((prevTasks) => [...prevTasks, taskText]);
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Part B: Passing Props - Pass addTask function to ToDoForm */}
      <ToDoForm addTask={addTask} />
      {/* Passing tasks array to ToDoList */}
      <ToDoList tasks={tasks} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});
