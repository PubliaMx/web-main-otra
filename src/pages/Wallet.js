// src/pages/Marketplace.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Marketplace = () => {
  return (
    <View style={styles.container}>
      <Text>Marketplace Page</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Marketplace;
