import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import Home from "./screens/Home";
import TakePhoto from "./screens/TakePhoto";
import Header from "./components/Header";
import AddProductButton from "./components/AddProductButton";
import ProductReport from "./screens/ProductReport";

export default function App() {
    const [hasCameraOpen, setHasCameraOpen] = useState(false);
    const [screen, setScreen] = useState('home');
    const [products, setProducts] = useState([]);


    const handleAddProduct = () => {
        setScreen('camera');
    }

    const handleRemoveProduct = (product) => {
        setProducts(products.filter(p => p.id !== product.id))

    }

    const handleTakePhoto = (product) => {
        setScreen('productReport');
        setProducts(products => [...products, product])
    }

    const handleSaveProductReport = () =>{
        setScreen('home');
    }

    const getScreen = () => {
        if (screen === 'home') {
            return (
                <View style={styles.screen}>
                    <Header/>
                    <Home products={products} onProductRemove={(product) => handleRemoveProduct(product)}
                          onAddProduct={handleAddProduct}/>
                </View>
            )
        } else if (screen === 'camera') {
            return (
                <View style={styles.screen}>
                    <Header/>
                    <TakePhoto onTakePhoto={handleTakePhoto}></TakePhoto>
                </View>
            )
        } else if (screen === 'productReport') {
            return (
                <View style={styles.screen}>
                    <Header headerWithButtons={true} />
                    <ProductReport onSaveProductReport={handleSaveProductReport}/>
                </View>
            )
        }
    }

    return (
        getScreen()
    );
}

const styles = StyleSheet.create({

    screen: {
        flex: 1,
    }
});
