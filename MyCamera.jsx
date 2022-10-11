import { Camera, CameraType } from 'expo-camera';
import { useState } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { myStyles } from './Styles';



export const MyCamera = () => {
    const [type, setType] = useState(CameraType.back);
    const [permission, requestPermission] = Camera.useCameraPermissions();

    if (!permission) {
        return <View />;

    }

    if (!permission.granted) {
        return (
            <View style={styles.camContainer}>
                <Text style={{ textAlign: 'center' }}> We need your permission to show the camera</Text>
                <Button onPress={requestPermission} title="grant permission" />
            </View>
        );
    }

    function toggleCameraType() {
        setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
    }

    return (
        <View style={styles.camContainer}>
            <Camera style={styles.camCamera} type={type}>
                <View style={styles.buttonCamContainer}>
                    <TouchableOpacity style={styles.camButton} onPress={toggleCameraType}>
                        <Text style={styles.camText}>Flip Camera</Text>
                    </TouchableOpacity>
                </View>
            </Camera>
        </View>
    );
}


const styles = StyleSheet.create({
    camContainer: {
        justifyContent: 'center',
        flex: 1,

    },
    camCamera: {
        flex: 1,
    },
    buttonCamContainer: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'transparent',
        margin: 64,
    },
    camButton: {
        flex: 1,
        alignItems: 'center',
    },
    camText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
    },
});