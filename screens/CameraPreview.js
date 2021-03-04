import React from 'react';
import {
  ImageBackground, Text, TouchableOpacity, View
} from 'react-native';

const CameraPreview = ({
  photo,
  onCapturedPhotoNext
}) => {
  return (
    <>
      <View>
        <TouchableOpacity onPress={onCapturedPhotoNext}>
          <Text>
            Next
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          backgroundColor: 'transparent',
          flex: 1,
          width: '100%',
          height: '100%'
        }}
      >
        <ImageBackground
          source={{ uri: photo && photo.uri }}
          style={{
            flex: 1
          }}
        />
      </View>
    </>

  );
};

export default CameraPreview;
