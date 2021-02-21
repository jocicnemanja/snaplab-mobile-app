import React, {useEffect, useState} from "react";

import {SafeAreaView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {Camera} from "expo-camera";
import Svg, {Circle} from "react-native-svg";

const TakePhoto = ({onTakePhoto}) => {
    const [hasPermission, setHasPermission] = useState(null);

    let camera = null;
    useEffect(() => {
        (async () => {
            const {status} = await Camera.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    if (hasPermission === null) {
        return <View/>;
    }

    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    const handleTakePhotoPres = () => {
        if (camera) {
            const options = {
                base64: true
            };
            camera.takePictureAsync(options)
                .then(photo => {
                    console.log('Picture taken', photo)
                    onTakePhoto();
                    return photo;
                })
                .catch(e => console.log('My ERROR', e))
        }
    }
    return (
        <SafeAreaView style={styles.cameraContainer}>
            <Camera onCameraReady={() => console.log('Camera ready')} style={styles.camera}
                    type={Camera.Constants.Type.back} ratio={"16:9"}
                    ref={(cam) => {
                        camera = cam;
                    }}>
                <View style={{
                    flex: 1, justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <TouchableOpacity style={{
                        width: "70%",
                        backgroundColor: "#00000080",
                        borderRadius: 15,
                        height: 50,
                        alignItems: "center",
                        justifyContent: "center",
                        marginBottom: "30%"
                    }}>
                        <Text style={{
                            color: "white",
                            textAlign: "center",
                            fontSize: 12,
                        }}>Take a photo of the ingredients on the back of the
                            product</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={handleTakePhotoPres}>
                        <Svg height="70px" width="70px" viewBox="0 0 100 100">
                            <Circle cx="50" cy="50" r="45" stroke="whitesmoke" strokeWidth="5.5"/>
                            <Circle cx="50" cy="50" r="40" strokeWidth="2.5" fill="whitesmoke"/>
                        </Svg>
                    </TouchableOpacity>
                </View>
            </Camera>
        </SafeAreaView>);
}

export default TakePhoto;

const styles = StyleSheet.create({

    cameraContainer: {
        flex: 1,
        justifyContent: "flex-end",
    },
    camera: {
        flex: 1,
    },
    cameraMessageContainer: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: 'black',
        margin: 20,
    },
    message: {
        width: "70%",
        backgroundColor: "black",
        borderRadius: 15,
        height: 80,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: "10%"
    },
    buttonContainer: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: 'transparent',
        flexDirection: 'row',
        margin: 20,
    },
    button: {
        flex: 0.1,
        alignSelf: 'flex-end',
        alignItems: 'center',
    },

});
