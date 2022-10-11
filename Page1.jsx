import { Button, View, Text, StyleSheet } from "react-native"


export const Page1 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}> Wellcome in Page 1 </Text>
      <View style={styles.btn}>
        <Button title="Go To Page 2"
          onPress={() => { navigation.navigate("Page2") }} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',

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
