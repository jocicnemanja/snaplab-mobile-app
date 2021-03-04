import React, { useState } from 'react';
import {
  StyleSheet, View, ImageBackground, Text, FlatList
} from 'react-native';
import colors from '../colors';

const ProductReport = ({
  product,
  onSaveProductReport
}) => {

  console.log('PROD', product.photoUri);
  const [ingredients, setIngredients] = useState([{
    id: 1,
    title: 'Aqua'
  }, {
    id: 2,
    title: 'Aluminuimum'
  }, {
    id: 3,
    title: 'Charolhydatre'
  }, {
    id: 4,
    title: 'Isoceteth-20'
  }, {
    id: 5,
    title: 'arafinum Liqudium'
  }, {
    id: 6,
    title: 'Butylene Glycol'
  }]);
  const handleSaveProductReport = () => {
    onSaveProductReport();
  };
  console.log('PRODUCT 433333344433333', product);
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
              <Text style={styles.badgeGood}>
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
  badgeDangerous: {
    borderRadius: 100,
    backgroundColor: 'red',
    paddingVertical: 5,
    paddingHorizontal: 10,
    color: colors.whiteText,
    fontWeight: 'bold',
  },
  badgeWarring: {
    borderRadius: 100,
    backgroundColor: 'darkorange',
    paddingVertical: 5,
    paddingHorizontal: 10,
    color: 'white',
    fontWeight: 'bold',
  },
  badgeGood: {
    borderRadius: 100,
    backgroundColor: colors.primary,
    paddingVertical: 5,
    paddingHorizontal: 10,
    color: 'white',
    fontWeight: 'bold',
  },
  badgeNeutral: {
    borderRadius: 100,
    backgroundColor: 'grey',
    paddingVertical: 5,
    paddingHorizontal: 10,
    color: 'white',
    fontWeight: 'bold',
  }
});
