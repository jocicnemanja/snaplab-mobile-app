import React, { useEffect, useState } from 'react';
import {
  SafeAreaView, StyleSheet, Text, TouchableOpacity, View
} from 'react-native';
import { Camera } from 'expo-camera';
import Svg, { Circle } from 'react-native-svg';
import colors from '../colors';
import CameraPreview from './CameraPreview';

const TakePhoto = ({ onTakePhoto }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [previewVisible, setPreviewVisible] = useState(false);
  const [capturedImage, setCapturedImage] = useState(null);

  let camera = null;
  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const takePicture = async () => {
    if (!camera) return;
    const photo = await camera.takePictureAsync();
    setPreviewVisible(true);
    setCapturedImage(photo);
  };

  const evaluatePhoto = async (uri) => {
    // const formData = new FormData();
    // formData.append('image', uri);
    //
    // const res = await fetch('https://snaplab-306315.ew.r.appspot.com/report', {
    //   method: 'POST',
    //   body: formData,
    //   header: {
    //     'content-type': 'multipart/form-data',
    //   },
    // });
    // return res;
  };

  if (hasPermission === null) {
    return <View />;
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
        .then((photo) => {
          console.log('Picture taken1', photo.uri);
          // console.log('Picture taken123', photo.base64);
          onTakePhoto({
            id: Math.random()
              .toString(),
            title: 'Nivea krema',
            photo
          });
          return photo;
        })
        .catch((e) => console.log('My ERROR', e));
    }
  };

  const view = () => {
    if (previewVisible && capturedImage) {
      return (
        <CameraPreview
          photo={capturedImage}
          onCapturedPhotoNext={() => onTakePhoto({
            id: Math.random()
              .toString(),
            title: 'Nivea krema',
            photo: capturedImage
          })}
        />
      );
    }
    return (
      <SafeAreaView style={styles.cameraScreen}>
        <Camera
          onCameraReady={() => console.log('Camera ready')}
          style={styles.camera}
          type={Camera.Constants.Type.back}
          ratio="16:9"
          ref={(cam) => {
            camera = cam;
          }}
        >
          <View style={styles.cameraMessage}>
            <TouchableOpacity style={styles.message}>
              <Text style={styles.cameraMessageText}>
                Take a photo of the ingredients on the back of the
                product
              </Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={takePicture}
          >
            <View style={styles.button}>
              <Svg height="70px" width="70px" viewBox="0 0 100 100">
                <Circle cx="50" cy="50" r="45" stroke="whitesmoke" strokeWidth="5.5" />
                <Circle cx="50" cy="50" r="40" strokeWidth="2.5" fill="whitesmoke" />
              </Svg>
            </View>
          </TouchableOpacity>
        </Camera>
      </SafeAreaView>
    );

  };
  return (
    view()
  );
};

export default TakePhoto;

const styles = StyleSheet.create({
  cameraScreen: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  camera: {
    flex: 1,
  },
  cameraMessage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cameraMessageText: {
    color: colors.whiteText,
    textAlign: 'center',
    fontSize: 12,
  },
  message: {
    width: '70%',
    backgroundColor: colors.cameraMessage,
    borderRadius: 15,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '30%'
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    margin: 20,
  },
  button: {
    flex: 0.1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },

});
