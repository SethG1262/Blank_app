import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';

function ToDoList({ tasks }) {
  return (
    <ScrollView>
      {/* Dynamically render each task as a list item */}
      {tasks.map((task, index) => (
        <View key={index} style={styles.task}>
          <Text style={styles.taskText}>{task}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  task: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  taskText: {
    fontSize: 16,
  },
});

export default ToDoList;
