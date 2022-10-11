import { Button, View, Text, StyleSheet } from "react-native"


export const Page2 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}> Wellcome in Page 2</Text>
      <View style={styles.btn}>
        <Button title="Go To Page 1"
          onPress={() => { navigation.navigate("Page1") }}
        />
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',

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
    textAlign: 'center',
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
});
