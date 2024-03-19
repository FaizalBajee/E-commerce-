import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useState } from 'react';
import { useContext } from 'react';
import { Card } from 'react-native-paper'
import { FontAwesome6 } from '@expo/vector-icons';
import { CartContext } from '../CartContext';

const ProductDetails = ({ route, navigation }) => {
  const { Data } = route.params;
  const { addItemToCart } = useContext(CartContext);

  const onAddToCart = () => {
    addItemToCart(Data.id);
  }
  return (
    <ImageBackground source={require('../assets/bg.png')} resizeMode="cover" style={{ flex: 1, justifyContent: 'center' }}>
      <View style={{ padding: 15, marginBottom: 320 }}>

        <Card style={{ padding: 3 }}>
          <Card.Content style={{ alignItems: 'center', width: '100%' }}>
            <FontAwesome6 name="image" size={99} color="grey" />
          </Card.Content>
          <Card.Content style={{ marginTop: 40 }}>
            <Text style={{ fontSize: 20, marginLeft: 10 }}>{Data.Name}</Text>
          </Card.Content>
          <Card.Content style={{ marginTop: 10 }}>
            <Text style={{ fontSize: 20, marginLeft: 10 }}>$ {Data.Price}</Text>
          </Card.Content>
          <Card.Content style={{ marginTop: 20 }}>
            <Text style={{ fontSize: 14, marginLeft: 10 }}>{Data.Description}</Text>
          </Card.Content>
        </Card>
        <TouchableOpacity style={styles.button}>
          <Text onPress={onAddToCart} style={{ alignItems: 'center', justifyContent: 'center', padding: 7, fontSize: 20, color: 'white' }}>Add To Card</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  )
}

export default ProductDetails

const styles = StyleSheet.create({

  button: {
    alignItems: 'center',
    backgroundColor: '#967bb6',
    marginTop: 30,
    height: 40,
    width: '60%',
    borderRadius: 15,
    marginLeft: 60
  }

})