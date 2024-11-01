import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';
import ToDoList from './components/ToDoList';

export default function App() {
  // Part A: State Management - Define state with hard-coded tasks
  const [tasks, setTasks] = useState([
    'Do laundry',
    'Go to gym',
    'Walk dog'
  ]);

  return (
    <SafeAreaView>
      {/* Part B: Passing Props - Pass tasks array to ToDoList */}
      <ToDoList tasks={tasks} />
    </SafeAreaView>
  );
}
