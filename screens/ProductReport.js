import React from "react";
import {StyleSheet, View, TouchableOpacity, Button, Image} from "react-native";
import {Entypo} from "@expo/vector-icons";

const ProductReport = ({onSaveProductReport}) => {

    const handleSaveProductReport = () => {
        onSaveProductReport()
    }

    return (
        <View style={styles.productReportScreen}>
            <View style={styles.picture}>
                <Image
                    source={require('../assets/nivea-mock.jpg')}
                    style={styles.image}
                    resizeMode="contain"
                >
                </Image>
            </View>
            <View style={styles.report}>
                <Button title="save" onPress={handleSaveProductReport}></Button>
            </View>
            <View tyle={styles.buttons}>
                <View style={styles.closeReportBtn}>
                    <TouchableOpacity>
                        <Entypo name="plus" size={50} color="black"/>
                    </TouchableOpacity>
                </View>
                <View style={styles.saveReportBtn}>
                    <TouchableOpacity>
                        <Entypo name="plus" size={50} color="black"/>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

export default ProductReport;

const styles = StyleSheet.create({
    productReportScreen: {
        flex: 1,
        backgroundColor: "snow"
    },
    picture: {
        flex: 2,
        backgroundColor: "red",
    },
    report: {
        flex: 5,
        backgroundColor: "snow"
    },
    image: {},
    closeReportBtn: {
        backgroundColor: "red"
    },
    saveReportBtn: {
        backgroundColor: "green"
    },
    buttons: {
        flexDirection: "column",

    }
});