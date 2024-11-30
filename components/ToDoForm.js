import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const ToDoForm = ({ addTask }) => {
  const [taskText, setTaskText] = useState('');  // State for managing input text

  // Handle the add task button press
  const handleAddTask = () => {
    if (taskText.trim()) {  // Ensure text is not empty or just spaces
      addTask(taskText);  // Call addTask function passed from parent (App.js)
      setTaskText('');  // Clear the input field after adding
    } else {
      alert('Please enter a task!');
    }
  };

  return (
    <View style={styles.form}>
      <TextInput
        style={styles.input}
        placeholder="Add a new task..."
        value={taskText}  // Bind input field value to taskText state
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
