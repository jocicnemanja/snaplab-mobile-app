import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import Header from "../components/Header";
import React from "react";

const Home = ({onAddProduct}) => {
    const handleAddProduct = () => {
        console.log("OPEN camera"); onAddProduct()};
    return (
        <View style={styles.container}>
            <Header/>
            <View style={styles.addProduct}>
                <TouchableOpacity style={styles.addProductBtn}>
                    <Text style={styles.addProductBtnText} onPress={handleAddProduct}>Let's start</Text>
                </TouchableOpacity>
            </View>
        </View>);
}


const styles = StyleSheet.create({

    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
    },
    addProduct: {
        flex: 7, justifyContent: 'flex-end',
        alignItems: 'center', backgroundColor: "whitesmoke"
    },
    addProductBtn: {
        width: "70%",
        backgroundColor: "black",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: "10%"
    },
    addProductBtnText: {
        color: "white",
        fontSize: 18,
        fontWeight: "bold"
    },
});

export default Home;