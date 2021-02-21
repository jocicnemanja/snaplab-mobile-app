import {StyleSheet, Text, View} from "react-native";
import React from "react";
import ProductList from "../components/ProductList";
import AddProductButton from "../components/AddProductButton";

const Home = ({onAddProduct, onProductRemove, products}) => {

    const handleAddProduct = () => {
        onAddProduct()
    };

    const handleRemoveProduct = (product) => {
        onProductRemove(product)
    }

    const view = products.length > 0 ?
        <View style={styles.screen}>
            <ProductList onProductRemove={(product) => handleRemoveProduct(product)} products={products}/>
        </View>
        :
        <View style={styles.screenMessage}>
            <Text style={styles.description}>Click on "+" button, it will open camera, then take a picture of the
                product ingredients. It is usually located on the back of the product.</Text>
            <Text style={styles.description}>Take a picture. Stay healthy!</Text>
        </View>

    return (
        <View style={{flex:1}}>
            {view}
            <AddProductButton onAddProduct={handleAddProduct} />
        </View>
    );
}


const styles = StyleSheet.create({
    screenMessage: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "snow",
    },
    screen: {
        flex: 1,
    },
    description: {
        color: "black",
        fontSize: 15,
        fontWeight: "bold",
        textAlign: 'center',
        padding: "3%",
        lineHeight:20
    },
});

export default Home;