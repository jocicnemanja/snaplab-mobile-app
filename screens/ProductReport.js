import React, {useState} from "react";
import {StyleSheet, View, TouchableOpacity, Image, Text, FlatList} from "react-native";

const ProductReport = ({onSaveProductReport}) => {

    const [ingredients, setIngredients] = useState([{
        id: 1,
        title: 'Aqua'
    }, {
        id: 2,
        title: 'Aluminuimum'
    }, {
        id: 3,
        title: 'Charolhydatre'
    }, {
        id: 4,
        title: 'Isoceteth-20'
    }, {
        id: 5,
        title: 'arafinum Liqudium'
    }, {
        id: 6,
        title: 'Butylene Glycol'
    }]);
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

                <Text style={styles.title}>Product report</Text>
                <View>
                    <View style={styles.listReportItem}><Text style={styles.listReportItemText}>Dangerous </Text>
                        <Text style={styles.badgeDangerous}>2 </Text></View>
                    <View style={styles.listReportItem}><Text style={styles.listReportItemText}>Not so good </Text><Text
                        style={styles.badgeWarring}>5 </Text></View>
                    <View style={styles.listReportItem}><Text style={styles.listReportItemText}>Good </Text><Text
                        style={styles.badgeGood}>9 </Text></View>
                    <View style={styles.listReportItem}><Text
                        style={styles.listReportItemText}>Uncategorized </Text><Text
                        style={styles.badgeNeutral}>1 </Text></View>
                </View>

                <Text style={styles.title}>Complete list of ingredients</Text>
                <FlatList
                    data={ingredients}
                    renderItem={(itemData) => <View style={styles.listReportItem}><Text
                        style={styles.listReportItemText}>{itemData.item.title} </Text>
                        <Text style={styles.badgeGood}>Good </Text></View>}
                    keyExtractor={item => item.id}
                />
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
    },
    report: {
        flex: 5,
        backgroundColor: "ghostwhite",
    },
    reportContent: {},
    buttons: {
        flex: 1,
        width: "100%",
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: "center",
    },

    title: {
        paddingHorizontal: 10,
        paddingVertical: 10,
        fontSize: 20,
        fontWeight: "bold"
    },
    listReportItem: {
        paddingHorizontal: 10,
        paddingVertical: 5,

        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    listReportItemText: {
        fontWeight: "bold",
    },
    badgeDangerous: {
        borderRadius: 100,
        backgroundColor: "red",
        paddingVertical: 5,
        paddingHorizontal: 10,
        color: "white",
        fontWeight: "bold",
    },
    badgeWarring: {
        borderRadius: 100,
        backgroundColor: "darkorange",
        paddingVertical: 5,
        paddingHorizontal: 10,
        color: "white",
        fontWeight: "bold",
    },
    badgeGood: {
        borderRadius: 100,
        backgroundColor: "mediumseagreen",
        paddingVertical: 5,
        paddingHorizontal: 10,
        color: "white",
        fontWeight: "bold",
    },
    badgeNeutral: {
        borderRadius: 100,
        backgroundColor: "grey",
        paddingVertical: 5,
        paddingHorizontal: 10,
        color: "white",
        fontWeight: "bold",
    }
});