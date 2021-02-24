import React from "react";
import  {Image, StyleSheet, View} from "react-native";

const Header = () => {
    return (
        <View style={styles.header}>
            <Image
                source={require('../assets/logo.png')}
                style={styles.logo}
                resizeMode="contain"
            >
            </Image>
        </View>);
}

const styles = StyleSheet.create({
    header: {
        height: 90,
        paddingTop:30,
        justifyContent:"center",
        paddingHorizontal:10,
        alignItems: "center",
        flexDirection: "row",
        backgroundColor: "white",
        shadowColor: "black",
        shadowOffset: {
            width:0,
            height:2
        },
        shadowRadius:6,

        elevation: 5,
    },
    logo: {
        width: 100,
        height: 180,
    },
});

export default Header;