import React, { useState } from 'react';
import {
  StyleSheet, View, ImageBackground, Text, FlatList
} from 'react-native';
import colors from '../colors';

const ProductReport = ({
  product,
}) => {

  const getStylesForIngredientType = (ingredientType) => {
    const style = {
      borderRadius: 100,
      paddingVertical: 5,
      paddingHorizontal: 10,
      color: colors.whiteText,
      fontWeight: 'bold',
    };
    if (ingredientType === 'good') {
      return { ...style, backgroundColor: colors.primary };
    }
    return { ...style, backgroundColor: colors.danger };
  };

  return (
    <View style={styles.productReportScreen}>
      <View style={styles.picture}>
        <ImageBackground
          source={{ uri: product.photoUri && product.photoUri }}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <View style={styles.report}>
        <Text style={styles.title}>Complete list of ingredients</Text>
        <FlatList
          data={product.ingredients}
          renderItem={(itemData) => (
            <View style={styles.listReportItem}>
              <Text
                style={styles.listReportItemText}
              >
                {itemData.item.label}
              </Text>
              <Text style={getStylesForIngredientType(itemData.item.type)}>
                {itemData.item.type}
                {' '}
              </Text>
            </View>
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>

    </View>
  );
};

export default ProductReport;

const styles = StyleSheet.create({
  productReportScreen: {
    flex: 1,
  },
  picture: {
    flex: 2,
  },
  report: {
    flex: 5,
    backgroundColor: colors.primaryBackground,
  },
  image: {
    width: '100%',
    height: '100%'
  },
  title: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    fontSize: 20,
    fontWeight: 'bold'
  },
  listReportItem: {
    paddingHorizontal: 10,
    paddingVertical: 5,

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  listReportItemText: {
    fontWeight: 'bold',
  },
});
