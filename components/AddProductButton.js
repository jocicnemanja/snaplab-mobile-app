import React from "react";
import {StyleSheet, View, TouchableOpacity} from "react-native";
import {Entypo} from '@expo/vector-icons';

const AddProductButton = ({onAddProduct}) => {

    const handleAddProduct = () => {
        onAddProduct()
    }

    return (
        <View style={styles.addProductBtn}>
            <TouchableOpacity onPress={handleAddProduct}>
                <Entypo name="plus" size={50} color="black"/>
            </TouchableOpacity>
        </View>
    );
}

export default AddProductButton;

const styles = StyleSheet.create({
    addProductBtn: {
        left: "75%",
        top: "85%",
        position: 'absolute',
        backgroundColor: "white",
        borderRadius: 100,
        padding: 5,
        elevation: 5,
    }
});