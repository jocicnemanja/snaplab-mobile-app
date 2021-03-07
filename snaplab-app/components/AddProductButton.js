import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import colors from '../colors';

const AddProductButton = ({ onAddProduct }) => {

  const handleAddProduct = () => {
    onAddProduct();
  };

  return (
    <View style={styles.addProductBtn}>
      <TouchableOpacity onPress={handleAddProduct}>
        <Entypo name="plus" size={50} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default AddProductButton;

const styles = StyleSheet.create({
  addProductBtn: {
    left: '75%',
    top: '85%',
    position: 'absolute',
    backgroundColor: colors.primary,
    borderRadius: 100,
    padding: 5,
    shadowColor: colors.shadow,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 6,

    elevation: 5,
  }
});
