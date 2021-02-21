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
        flex: 1,
        justifyContent: 'space-between',
        alignItems: "center",
        flexDirection: "row"
    },
    logo: {
        width: 120,
        height: 120,
        marginLeft: "2%",
        marginTop: "10%"
    },
});

export default Header;