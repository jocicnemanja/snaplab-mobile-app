import React from 'react';
import {
  Image, StyleSheet, Text, TouchableOpacity, View
} from 'react-native';
import colors from '../colors';

const logo = require('../assets/logo.png');

const Header = ({
  headerWithButtons = false,
  onRepeat,
  onExit,
}) => {

  const handleRepeat = () => {
    onRepeat();
  };
  const handleExit = () => {
    onExit();
  };
  const header = () => {
    if (headerWithButtons) {
      return (
        <View style={styles.headerWithButtons}>
          <TouchableOpacity onPress={handleRepeat}>
            <View style={styles.closeReportBtn}>
              <Text style={styles.btnCloseText}>Repeat</Text>
            </View>
          </TouchableOpacity>
          <Image
            source={logo}
            style={styles.logo}
            resizeMode="contain"
          />
          <TouchableOpacity onPress={handleExit}>
            <View style={styles.saveReportBtn}>
              <Text style={styles.btnSaveText}>Exit</Text>
            </View>
          </TouchableOpacity>
        </View>
      );
    }
    return (
      <View style={styles.header}>
        <Image
          source={logo}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>
    );

  };
  return (
    <>
      {header()}
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 90,
    paddingTop: 30,
    justifyContent: 'center',
    paddingHorizontal: 10,
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: colors.primaryHeader,
    shadowColor: colors.shadow,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 6,
    elevation: 5,
  },
  headerWithButtons: {
    height: 90,
    paddingTop: 30,
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: colors.primaryBackground,
    shadowColor: colors.shadow,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 6,
    elevation: 5,
  },
  logo: {
    width: 100,
    height: 180,
  },
  closeReportBtn: {
    marginHorizontal: 10,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  saveReportBtn: {
    marginHorizontal: 10,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnCloseText: {
    color: colors.danger,
    fontSize: 15,
    fontWeight: 'bold'
  },
  btnSaveText: {
    color: colors.primary,
    fontSize: 15,
    fontWeight: 'bold'
  },
});

export default Header;
