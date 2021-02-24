import React from "react";
import {StyleSheet, View, FlatList} from "react-native";
import ProductItem from "./ProdcutItem";

const ProductList = ({products, onProductRemove}) => {

    const handleRemoveProduct = (product) => {
        onProductRemove(product)
    }

    const renderItem = (itemData) => (
        <ProductItem onProductRemove={handleRemoveProduct} product={itemData.item}/>
    );

    return (
        <View style={styles.itemList}>
            <FlatList
                data={products}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </View>);
}

const styles = StyleSheet.create({
    itemList: {
        flex: 1,
        justifyContent: "center",
        paddingHorizontal: 10,
        paddingVertical: 10,
        backgroundColor: "ghostwhite",
    },
});

export default ProductList