import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native';

const bikes = [
  { id: '1', name: 'Pinarello', price: '1800', img: require("../assets/1.png") },
  { id: '2', name: 'Pina Mountain', price: '1700', img: require("../assets/2.png") },
  { id: '3', name: 'Pina Bike', price: '1500', img: require("../assets/3.png") },
  { id: '4', name: 'Pinarello', price: '1900', img: require("../assets/4.png") },
  { id: '5', name: 'Pinarello', price: '2700', img: require("../assets/5.png") },
  { id: '6', name: 'Pinarello', price: '1350', img: require("../assets/6.png") },
  // Thêm các sản phẩm để đảm bảo nội dung đủ dài để cuộn
  { id: '7', name: 'Pinarello', price: '1850', img: require("../assets/1.png") },
  { id: '8', name: 'Pina Mountain', price: '1950', img: require("../assets/2.png") },
];

export default function ProductListScreen({ navigation }) {
  const [filter, setFilter] = useState('all');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>The world's Best Bike</Text>
      <View style={styles.filterContainer}>
        {['All', 'Roadbike', 'Mountain'].map((type, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.filterButton, filter === type.toLowerCase() && styles.activeFilterButton]}
            onPress={() => setFilter(type.toLowerCase())}
          >
            <Text style={[styles.filterText, filter === type.toLowerCase() && styles.activeFilterText]}>
              {type}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <FlatList
        data={bikes}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('ProductDetail', { product: item })}
            style={styles.productItem}
          >
            <View style={styles.card}>
              <Image source={item.img} style={styles.image} />
              <Text style={styles.bikeName}>{item.name}</Text>
              <Text style={styles.price}>${item.price}</Text>
            </View>
          </TouchableOpacity>
        )}
        numColumns={2}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={true}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f8f8f8' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  productItem: {
    flex: 1,
    padding: 10,
    marginBottom: 10,
    borderRadius: 10,
  },
  card: {
    backgroundColor: "#E941411A",
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  bikeName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
  price: {
    fontSize: 14,
    color: '#777',
  },
});
