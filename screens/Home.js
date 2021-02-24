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
            <View style={{flexDirection: "row", }} >
                <Text style={styles.title}>Take picture. </Text><Text style={styles.word} >Stay healthy!</Text>
            </View>
            <Text style={styles.description}>Click on "+" button, it will open camera, then take a picture of the
                product ingredients. It is usually located on the back of the product.</Text>
        </View>

    return (
        <View style={{flex: 1}}>
            {view}
            <AddProductButton onAddProduct={handleAddProduct}/>
        </View>
    );
}


const styles = StyleSheet.create({
    screenMessage: {
        flex: 1,
        flexDirection:"column",
        justifyContent: 'center',
        alignItems: "center",
        backgroundColor: "ghostwhite",
    },
    screen: {
        flex: 1,
    },
    title: {
        color: "black",
        fontSize: 25,
        fontWeight: "bold",
    },
    word:{
        color: "mediumseagreen",
        fontSize: 25,
        fontWeight: "bold",
    },
    description: {
        color: "grey",
        fontSize: 15,
        paddingVertical: "5%",
        paddingHorizontal: "5%",
        lineHeight: 20,
    },
});

export default Home;