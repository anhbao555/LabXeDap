import React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';

export default function ProductDetailScreen({ route, navigation }) {
  const { product } = route.params;
  const discountedPrice = parseFloat(product.price.replace('$', '')) * 0.85;
  return (
    <View style={styles.container}>
      <Image source={product.img} style= {styles.image}/>
      <Text style={styles.title}>{product.name}</Text>
      <View style = {styles.text}>
            <Text>15%OFF{product.price}</Text>
            <Text style= {{fontWeight : "bold"}}>${discountedPrice}</Text>
      </View>

      <Text style={styles.description}>
          Description {"\n"}
          A very important form of writing as we
          
      </Text>
      <Button title="Add to Cart" onPress={() => {}} color="#FF6F61" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  text : {flexDirection : "row",justifyContent : "space-around"},
  title: { fontSize: 24, fontWeight: 'bold' },
  description: { marginTop: 10, color: 'black', fontWeight : "300" },
  image: {
    width: 350,
    height: 200,
    resizeMode: 'contain',
    backgroundColor :"#E941411A"
  },
});
