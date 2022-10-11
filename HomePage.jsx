import { Button, View, Text } from "react-native"
import { myStyles } from './Styles';


export const HomePage = ({ navigation }) => {
    return (
        <View>
            <Text style={myStyles.title}> Wellcome in Home Page</Text>
            <View style={myStyles.btn}>
                <Button title="Go To Page 1"
                    onPress={() => { navigation.navigate("Page1") }} />
                <Button title="Open Camera"
                    onPress={() => { navigation.navigate("MyCamera") }} />
                <Button title="Go To Page 2"
                    onPress={() => { navigation.navigate("Page2") }} />
            </View>

            <View style={myStyles.btn}>
                <Button title="Open web Viewer "
                    onPress={() => { navigation.navigate("WebView") }} />
                <Button title="Open Location "
                    onPress={() => { navigation.navigate("Location") }} />
                <Button title="Open Image Picker "
                    onPress={() => { navigation.navigate("ImgPicker") }} />
            </View>
        </View>
    )
}

