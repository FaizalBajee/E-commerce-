import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../CartContext'
const Cart = ({navigation}) => {
  const {getItemsCount} = useContext(CartContext);
  return (
    <View>
      <TouchableOpacity onPress={()=>{navigation.navigate('cartpage')}} style={{backgroundColor:'#FFC000',borderRadius:10,width:80,height:30,justifyContent:'center',alignItems:'center'}}>
         <Text style={{fontSize:18,color:'white'}}>Cart ({getItemsCount()})</Text>
     </TouchableOpacity>
    </View>
  )
}
export default Cart
const styles = StyleSheet.create({})