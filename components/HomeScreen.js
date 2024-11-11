import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.subtitle}>A premium online store for sporter and their stylish choice</Text>
      <Image source={require("../assets/first.png")} style={styles.bikeImage} resizeMode= "contain"/>
      <Text style={styles.title}>
          POWER BIKE {"\n"}
          SHOP
      </Text>
      
      
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('ProductList')}
      >
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
 
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  bikeImage: { width: 300, height: 200, marginBottom: 20, backgroundColor : "#E941411A", borderRadius : 50, padding : 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10, textAlign: 'center' },
  subtitle: { fontSize: 16, color: 'black', fontWeight : "bold", textAlign: 'center', marginBottom: 20 },
  button: { backgroundColor: '#E94141', paddingVertical: 10, paddingHorizontal: 20, borderRadius: 30, marginTop: 20, width : 300, alignItems : "center"},
  buttonText: { color: 'white', fontWeight: 'bold', fontSize: 16 },
});
