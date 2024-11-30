import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Footer from './Footer';  // Optional footer component

// MainLayout component to wrap screens with a header and footer
const MainLayout = ({ children, title }) => {
  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        {title && <Text style={styles.headerText}>{title}</Text>}
      </View>

      {/* Content Section */}
      <View style={styles.content}>
        {children}
      </View>

      {/* Footer Section */}
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginBottom: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default MainLayout;
