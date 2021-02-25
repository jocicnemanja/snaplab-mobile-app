import React from "react";
import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";

const Header = ({headerWithButtons = false}) => {


    const header = () => {
        if (headerWithButtons) {
            return (<View style={styles.headerWithButtons}>
                <TouchableOpacity>
                    <View style={styles.closeReportBtn}>
                        <Text style={styles.btnCloseText}>Close</Text>
                    </View>
                </TouchableOpacity>
                <Image
                    source={require('../assets/logo.png')}
                    style={styles.logo}
                    resizeMode="contain"
                >
                </Image>
                <TouchableOpacity>
                    <View style={styles.saveReportBtn}>
                        <Text style={styles.btnSaveText}>Save</Text>
                    </View>
                </TouchableOpacity>
            </View>)
        } else {
            return (<View style={styles.header}>
                <Image
                    source={require('../assets/logo.png')}
                    style={styles.logo}
                    resizeMode="contain"
                >
                </Image>
            </View>);
        }
    }
    return (
        <>
            {header()}
        </>);
}

const styles = StyleSheet.create({
    header: {
        height: 90,
        paddingTop: 30,
        justifyContent: "center",
        paddingHorizontal: 10,
        alignItems: "center",
        flexDirection: "row",
        backgroundColor: "white",
        shadowColor: "black",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowRadius: 6,

        elevation: 5,
    },
    headerWithButtons: {
        height: 90,
        paddingTop: 30,
        justifyContent: "space-between",
        paddingHorizontal: 10,
        alignItems: "center",
        flexDirection: "row",
        backgroundColor: "white",
        shadowColor: "black",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowRadius: 6,

        elevation: 5,
    },
    logo: {
        width: 100,
        height: 180,
    },
    closeReportBtn: {
        marginHorizontal: 10,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
    },
    saveReportBtn: {
        marginHorizontal: 10,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center"
    },
    btnCloseText: {
        color: "tomato",
        fontSize: 15,
        fontWeight: "bold"
    },
    btnSaveText: {
        color: "mediumseagreen",
        fontSize: 15,
        fontWeight: "bold"
    },
});

export default Header;