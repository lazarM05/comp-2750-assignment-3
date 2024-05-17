import React, {useState} from "react";
import {SafeAreaView, StyleSheet, View, Text, Image, Button} from 'react-native';
import {Picker} from '@react-native-picker/picker'; 

export default function App() {

 const [selectedVeggie, setSelectedVeggie] = useState("Potato: $5");
 const [veggieQuantity, setVeggieQuantity] = useState("1");
 const [selectedFruit, setSelectedFruit] = useState("Strawberries: $11");
 const [fruitQuantity, setFruitQuantity] = useState("1");

 const [calculatedValue, setCalculatedValue] = useState("Press the above button to calculate");

  return (
  <SafeAreaView style={styles.container}>
    <Text style = {styles.h1}> Welcome to POGS! </Text>
    <Image 
    style={styles.image}
    source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/3/34/Veggies%21_%2846409018742%29.jpg'}}/>
    <View style={styles.row1}>
<Picker style={styles.veggie_picker} selectedValue={selectedVeggie} onValueChange={(itemValue,itemIndex) => setSelectedVeggie(itemValue)}>
 <Picker.Item label="Potato: $5" value="5"/>
 <Picker.Item label="Carrot: $8" value="8"/>
 <Picker.Item label="Onion: $3" value="3"/> 
 <Picker.Item label="Broccoli: $7" value="7"/>
 <Picker.Item label="Tomato: $8" value="8"/>
 </Picker>
<Picker style={styles.veggie_quantity} selectedValue={veggieQuantity} onValueChange={(itemValue, itemIndex) => setVeggieQuantity(itemValue)}>
 <Picker.Item label="1" value="1"/>
 <Picker.Item label="2" value="2" />
 <Picker.Item label="3" value="3" />
 <Picker.Item label="4" value="4" />
 <Picker.Item label="5" value="5" />
</Picker>
</View>

<View style={styles.row2}>
<Picker style={styles.fruit_picker} selectedValue={selectedFruit} onValueChange={(itemValue, itemIndex) => setSelectedFruit(itemValue)}>
 <Picker.Item label="Strawberries: $11" value="11"/>
 <Picker.Item label="Apple: $12" value="12"/>
 <Picker.Item label="Banana: $13" value="13"/>
 <Picker.Item label="Pear: $10" value="10"/>
 <Picker.Item label="Blueberries: $12" value="12"/>
</Picker>
<Picker style={styles.fruit_quantity} selectedValue={fruitQuantity} onValueChange={(itemValue, itemIndex) => setFruitQuantity(itemValue)}>
 <Picker.Item label="1" value="1"/>
 <Picker.Item label="2" value="2" />
 <Picker.Item label="3" value="3" />
 <Picker.Item label="4" value="4" />
 <Picker.Item label="5" value="5" />
</Picker>
</View>

<Button title= "Calculate!" style={styles.button} onPress={() => {

const lastChar = selectedVeggie[selectedVeggie.length - 1];
const charToIntForPicker1 = parseInt(lastChar);

const charToIntForPicker2 = parseInt(veggieQuantity);

const lastChar2 = selectedFruit[selectedFruit.length - 1];
const charToIntForPicker3 = parseInt(lastChar2);

const charToIntForPicker4 = parseInt(fruitQuantity);
 
 setCalculatedValue("Total cost of Order: $" + ((charToIntForPicker1 * charToIntForPicker2) + (charToIntForPicker3 * charToIntForPicker4)));
 }}
/>

<Text style={styles.heading}>{calculatedValue}</Text>
  </SafeAreaView>
  );}

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ffffff',

    },

    h1: {
      textAlign: 'center',
      fontFamily: 'Monospace',
      fontSize:35,
      marginTop: 20,
      marginBottom: 20,
    },

    image: {
      width: '100%',
      height: 200,
      marginBottom: 20,
    },

    row1: {
      flexDirection: 'row',
      marginTop:10,
    },

    row2: {
      flexDirection: 'row',
      marginTop:10,
    },

    veggie_picker: {
      flex: 2,
      borderStyle: 'none',
      fontFamily: 'Monospace',
      backgroundColor:'#f2f2f2',
      height:30,
      marginRight: 10,
      marginLeft: 10,
      borderRadius: 5,
    },

    veggie_quantity: {
      flex: 1,
      borderStyle: 'none',
      fontFamily: 'Monospace',
      backgroundColor:'#f2f2f2',
      height:30,
      marginRight: 10,
      borderRadius: 5,
    },

    fruit_picker: {
      flex: 2,
      borderStyle: 'none',
      fontFamily: 'Monospace',
      backgroundColor:'#f2f2f2',
      height:30,
      marginRight: 10,
      marginLeft: 10,
      borderRadius: 5,
    },

    fruit_quantity: {
      flex: 1,
      borderStyle: 'none',
      fontFamily: 'Monospace',
      backgroundColor:'#f2f2f2',
      height:30,
      marginRight: 10,
      borderRadius: 5,
    },

    button: {
      alignSelf: 'center',
      marginTop: 40,
      borderRadius: 10,

      color: '#00cc00',
      width: 200,
      height: 100,
      fontSize: 25,
      borderStyle: 'none',
      fontFamily: 'Monospace',
    },
    heading: {
      marginTop: 20,
      fontSize: 20,
      fontFamily: 'Monospace',
      textAlign: 'center',
    },



  });

