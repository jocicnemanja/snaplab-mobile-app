import {
  StyleSheet, Text, View, TouchableOpacity
} from 'react-native';
import React from 'react';
import colors from '../colors';

const Home = ({
  start
}) => {

  const handleStart = () => {
    start();
  };

  return (
    <View style={styles.screen}>
      <View style={styles.screen} />
      <View style={styles.screen}>
        <View style={styles.screenMessageTitle}>
          <Text style={styles.title}>Take picture. </Text>
          <Text style={styles.word}>Stay healthy!</Text>
        </View>
        <Text style={styles.description}>
          Click on "Let's start" button it will open camera, then take a picture of the
          product ingredients, on the back of the product.
        </Text>
      </View>
      <View style={styles.btnContainer}>
        <TouchableOpacity onPress={handleStart} style={styles.appButtonContainer}>
          <Text style={styles.appButtonText}>Let's start</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  screenMessageTitle: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  title: {
    color: colors.title,
    fontSize: 25,
    fontWeight: 'bold',
  },
  word: {
    color: colors.primary,
    fontSize: 25,
    fontWeight: 'bold',
  },
  description: {
    color: colors.text,
    fontSize: 15,
    paddingVertical: '5%',
    paddingHorizontal: '5%',
    lineHeight: 20,
    fontWeight: 'bold',
    textAlign: 'justify'
  },
  btnContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 30
  },
  appButtonContainer: {
    width: '80%',
    elevation: 5,
    backgroundColor: colors.primary,
    borderRadius: 20,
    paddingVertical: 12,
    paddingHorizontal: 15
  },
  appButtonText: {
    fontSize: 15,
    lineHeight: 20,
    color: colors.whiteText,
    fontWeight: 'bold',
    alignSelf: 'center',
  }
});

export default Home;
