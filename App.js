import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Home from './screens/Home';
import TakePhoto from './screens/TakePhoto';
import Header from './components/Header';
import ProductReport from './screens/ProductReport';
import Loading from './screens/Loading';

export default function App() {
  const [screen, setScreen] = useState('home');
  const [product, setProduct] = useState(null);
  const [products, setProducts] = useState([]);
  const [capturedPhoto, setCapturedPhoto] = useState(null);

  const handleAddProduct = () => {
    setScreen('camera');
  };

  const handleRemoveProduct = (product) => {
    setProducts(products.filter((p) => p.id !== product.id));
  };

  const evaluatePhoto = async (photoUri) => {
    const formData = new FormData();
    formData.append('image', {
      uri: photoUri,
      type: 'image/jpeg',
      name: 'image.jpg'
    });
    formData.append('path', photoUri, 'test');
    const res = await fetch('https://snaplab-306315.ew.r.appspot.com/report', {
      method: 'POST',
      body: formData,
      redirect: 'follow'
    });
    console.log('RESULATATTTT111111', res);
    return res;
  };

  const handleTakePhoto = (capturedPhoto) => {
    try {
      setScreen('loading');
      evaluatePhoto(capturedPhoto.uri)
        .then((res) => res.json())
        .then((res) => {
          console.log('RESULATATTTT', res);
          setProduct({
            photoUri: capturedPhoto.uri,
            ingredients: res.result
          });
          setScreen('productReport');
        });
    } catch (e) {
      console.log('ERROR UPS', e);
    }
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
    }
    if (screen === 'camera') {
      return (
        <View style={styles.screen}>
          <Header />
          <TakePhoto onTakePhoto={handleTakePhoto} />
        </View>
      );
    }
    if (screen === 'productReport') {
      return (
        <View style={styles.screen}>
          <Header headerWithButtons />
          <ProductReport product={product} onSaveProductReport={handleSaveProductReport} />
        </View>
      );
    }
    if (screen === 'loading') {
      return (
        <View style={styles.screen}>
          <Header />
          <Loading />
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
