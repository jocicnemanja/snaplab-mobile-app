import React, {useState, useEffect} from 'react';
import {Text, View} from 'react-native';
import {Camera} from 'expo-camera';
import Home from "./screens/Home";
import TakePhoto from "./screens/TakePhoto";

export default function App() {
    const [hasCameraOpen, setHasCameraOpen] = useState(false);


    const handleAddProduct = () => {
        setHasCameraOpen(true);
    }

    const handleTakePhoto = () => {
        setHasCameraOpen(false);
    }

    if (hasCameraOpen === false) {
        return (
            <Home onAddProduct={handleAddProduct}/>
        )
    }
    return (
        <TakePhoto onTakePhoto={handleTakePhoto}></TakePhoto>
    );
}
