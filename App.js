import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import Home from "./screens/Home";
import TakePhoto from "./screens/TakePhoto";
import Header from "./components/Header";
import AddProductButton from "./components/AddProductButton";

export default function App() {
    const [hasCameraOpen, setHasCameraOpen] = useState(false);
    const [products, setProducts] = useState([]);


    const handleAddProduct = () => {
        console.log('CAMERA 44444');
        setHasCameraOpen(true);
    }

    const handleRemoveProduct = (product) => {
        console.log("REMOVE PORDUCT" +
            "")
        setProducts(products.filter(p => p.id !== product.id))

    }

    const handleTakePhoto = (product) => {
        console.log('Product', product);
        setHasCameraOpen(false);
        setProducts(products => [...products, product])
    }

    if (hasCameraOpen === false) {
        return (
            <View style={styles.homeScreen}>
                    <Header/>
                    <Home products={products} onProductRemove={(product) => handleRemoveProduct(product)}
                          onAddProduct={handleAddProduct}/>
            </View>
        )
    }
    return (
        <View style={styles.takePictureScreen}>
                <Header/>
                <TakePhoto onTakePhoto={handleTakePhoto}></TakePhoto>
        </View>
    );
}

const styles = StyleSheet.create({

    homeScreen: {
        flex: 1,
    },
    takePictureScreen: {
        flex: 1,
    },
});
