import React from 'react';
import {
  Text, StyleSheet, View, TouchableOpacity
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import colors from '../colors';

const ProductItem = ({ product, onProductRemove }) => {

  const handleRemoveProduct = (product) => {
    onProductRemove(product);
  };
  return (
    <View style={styles.item}>
      <Text style={styles.itemText}>{product.title}</Text>
      <TouchableOpacity onPress={() => handleRemoveProduct(product)}>
        <Ionicons name="close" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: colors.item,
    height: 50,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 5,
    marginVertical: 5,
    marginHorizontal: 5,
    paddingHorizontal: 15,
    shadowColor: colors.shadow,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 6,
    elevation: 5,
  },
  itemText: {
    color: colors.text,
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
  }
});

export default ProductItem;
