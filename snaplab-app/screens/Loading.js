import React from 'react';
import {
  ActivityIndicator, StyleSheet, View, Text
} from 'react-native';
import colors from '../colors';

const LoadingScreen = () => {
  return (
    <View style={styles.container}>
      <View styles={styles.horizontal}>
        <ActivityIndicator size="large" color={colors.primary} />
        <Text style={styles.message}>We are doing some magic for you 😉</Text>
      </View>
    </View>
  );
};

export default LoadingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primaryBackground,
  },
  horizontal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  message: {
    color: colors.text,
    fontSize: 15,
    paddingVertical: '5%',
    paddingHorizontal: '5%',
    lineHeight: 20,
    fontWeight: 'bold',
  },
});
