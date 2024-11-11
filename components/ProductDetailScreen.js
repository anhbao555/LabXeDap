import React from 'react';
import { View, Text, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function ProductDetailScreen({ route, navigation }) {
  const { product } = route.params;
  const discountedPrice = parseFloat(product.price.replace('$', '')) * 0.85;
  return (
    <View style={styles.container}>
      <Image source={product.img} style= {styles.image}/>
      <Text style={styles.title}>{product.name}</Text>
      <View style = {styles.text}>
            <Text style= {{color : "gray"}}>15%OFF{product.price}</Text>
            <Text style= {{fontWeight : "bold"}}>${discountedPrice}</Text>
      </View>

      <View>
      <Text style={styles.description}>
          Description 
      </Text>
      <Text style={styles.content}>
           A very important form of writing as we write almost everything in paragraph
           be it an answer, easy, story, emails, etc.
      </Text>
      </View>
      <View style = {styles.addToCart}>
        <Icon name="favorite-border" size={30} style= {styles.icon} />
        <TouchableOpacity
          style={styles.button}
        >
        <Text style={styles.buttonText}>Add to Cart</Text>
      </TouchableOpacity>
      </View>
      <View style = {{alignItems : "center"}}>
      <TouchableOpacity
          style={styles.buttonAdd}
          onPress={() => navigation.navigate('AddBike')}
        >
        <Text style={styles.buttonText}>Add Bike</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  text : {flexDirection : "row",justifyContent : "space-around"},
  title: { fontSize: 24, fontWeight: 'bold' },
  description: { marginTop: 10, color: 'black', fontWeight : "bold" },
  content: { color: 'black', fontWeight : "200" },
  image: {
    width: 350,
    height: 200,
    resizeMode: 'contain',
    backgroundColor :"#E941411A"
  },
  addToCart : {
    flexDirection : "row",
    justifyContent : "space-around"
  },
  button: { backgroundColor: '#E94141', paddingVertical: 10, paddingHorizontal: 20, borderRadius: 30, width : 200, alignItems : "center"},
  buttonText: { color: 'white', fontWeight: 'bold', fontSize: 16 },
  buttonAdd: { backgroundColor: 'cyan', paddingVertical: 10, paddingHorizontal: 20, borderRadius: 30, marginTop: 20,width : 200, alignItems : "center"},
});
