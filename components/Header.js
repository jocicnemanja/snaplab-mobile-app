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
        paddingTop:36,
        justifyContent: 'center',
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
        width: 120,
        height: 120,
    },
});

export default Header;