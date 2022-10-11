
import { StyleSheet } from "react-native";

export const myStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightgray',
        alignItems: 'center',

    },
    title:
    {
        borderRadius: 10,
        borderWidth: 4,
        fontWeight: 700,
        backgroundColor: "white",
        fontWeight: "bold",
        width: 150,
        paddingVertical: 10,
        flexDirection: 'row',
        marginHorizontal: 5,
        width: '95%',
        margin: 10,
        textAlign: 'center'
    },
    btn:
    {
        padding: 10,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 5,
        width: '90%',
        marging: 70,

    },
    btn2:
    {
        padding: 10,
        alignItems: 'center',
        padding: 10,
        justifyContent: 'space-between',
        marginHorizontal: 5,
        marginLeft: 20,
        marginRight: 20,

    },
    txtStyle: {
        margin: 6,
        backgroundColor: " ",
        padding: 20,
        borderWidth: 2,
        borderRadius: 10,

    },
    txtInput: {
        borderWidth: 3,
        flexDirection: "row",
        fontWeight: 500,
        textAlign: 'center',
        borderRadius: 10,
        marginTop: 50,
        backgroundColor: "white",
        color: "black",
        width: 400,
        height: 100,

    },
});
