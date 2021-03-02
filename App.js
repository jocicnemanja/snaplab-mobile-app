import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Home from './screens/Home';
import TakePhoto from './screens/TakePhoto';
import Header from './components/Header';
import ProductReport from './screens/ProductReport';

export default function App() {
  const [screen, setScreen] = useState('home');
  const [products, setProducts] = useState([]);

  const handleAddProduct = () => {
    setScreen('camera');
  };

  const handleRemoveProduct = (product) => {
    setProducts(products.filter((p) => p.id !== product.id));
  };

  const handleTakePhoto = (product) => {
    setScreen('productReport');
    setProducts((products) => [...products, product]);
  };

  const handleSaveProductReport = () => {
    setScreen('home');
  };

  const getScreen = () => {
    if (screen === 'home') {
      return (
        <View style={styles.screen}>
          <Header />
          <Home
            products={products}
            onProductRemove={(product) => handleRemoveProduct(product)}
            onAddProduct={handleAddProduct}
          />
        </View>
      );
    } if (screen === 'camera') {
      return (
        <View style={styles.screen}>
          <Header />
          <TakePhoto onTakePhoto={handleTakePhoto} />
        </View>
      );
    } if (screen === 'productReport') {
      return (
        <View style={styles.screen}>
          <Header headerWithButtons />
          <ProductReport onSaveProductReport={handleSaveProductReport} />
        </View>
      );
    }
    return null;
  };

  return (
    getScreen()
  );
}

const styles = StyleSheet.create({

  screen: {
    flex: 1,
  },
});
