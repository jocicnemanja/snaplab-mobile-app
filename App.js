import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {Camera} from 'expo-camera';
import {SafeAreaView} from "react-native-web";

export default function App() {
    const [hasPermission, setHasPermission] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);
    const [hasCameraOpen, setHasCameraOpen] = useState(false);
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

    if (hasCameraOpen === false) {
        return <View style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            flex: 1,
            padding: 20
        }}><Text onPress={() => setHasCameraOpen(true)}>Click to open
            camera</Text></View>;
    }
    const snap = () => {
        if (camera) {
            const options = {
                base64: true
            };
            camera.takePictureAsync(options)
                .then(photo => {
                    console.log('SLIKANOOOO11', photo)
                    return photo;
                })
                .catch(e => console.log('My ERROR', e))
        }
    }
    return (
        <View style={styles.container}>
            <Camera onCameraReady={() => console.log('Camera ready')} style={styles.camera} type={type} ref={(cam) => {
                camera = cam;
            }}>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                            setType(
                                type === Camera.Constants.Type.back
                                    ? Camera.Constants.Type.front
                                    : Camera.Constants.Type.back
                            );
                        }}>
                        <Text style={styles.text} onPress={() => snap()}> Take a picture </Text>
                    </TouchableOpacity>
                </View>
            </Camera>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center"
    },
    camera: {
        flex: 1,
    },
    buttonContainer: {
        flex: 1,
        backgroundColor: 'transparent',
        flexDirection: 'row',
        margin: 20,
    },
    button: {
        flex: 0.1,
        alignSelf: 'flex-end',
        alignItems: 'center',
    },
    text: {
        fontSize: 18,
        color: 'white',
    },
});
