import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const ToDoForm = ({ addTask }) => {
  const [taskText, setTaskText] = useState('');  // Manage input text state

  // Handle the add task button press
  const handleAddTask = () => {
    if (taskText.trim()) {
      addTask(taskText);  // Call addTask function passed from parent
      setTaskText('');  // Clear input field after adding the task
    } else {
      alert('Please enter a task!');
    }
  };

  return (
    <View style={styles.form}>
      <TextInput
        style={styles.input}
        placeholder="Add a new task..."
        value={taskText}  // Bind value to taskText state
        onChangeText={setTaskText}  // Update taskText state on text change
      />
      <Button title="Add Task" onPress={handleAddTask} />
    </View>
  );
};

const styles = StyleSheet.create({
  form: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 10,
  },
});

export default ToDoForm;
