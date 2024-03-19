import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { AntDesign } from '@expo/vector-icons';
import { Card, Button, Title, Paragraph, TextInput } from 'react-native-paper';
import { FontAwesome6 } from '@expo/vector-icons';
import { ImageBackground } from 'react-native';

const Product = ({ navigation, route }) => {

    const [data, setData] = useState([])

    const handleAdd = () => {
        navigation.navigate('Add Products')
    }

    const handleDetails = (data) => {
        navigation.navigate('productDetails', { Data: data.item })
    }

    useEffect(() => {
        fetch("http://173.0.0.247:8112/ecommerce/GetProducts.php", {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        })
            .then(Response => Response.json())
            .then(Response => setData(Response))
            .catch(error => alert(error))
    })

    return (
        <View style={styles.container}>
            <ImageBackground source={require('../assets/bg.png')} resizeMode="cover" style={styles.image}>
               <View style={styles.view1}>
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        data={data}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={(data) => {
                            return (
                                <TouchableOpacity onPress={() => handleDetails(data)}>
                                    <View style={{ padding: 15 }}>
                                        <Card style={{ borderWidth: 1, borderColor: '#967bb6', borderRadius: 20 }}>
                                            <Card.Content style={{ padding: 5, marginLeft: 10 }}>
                                                <FontAwesome6 name="image" size={84} color="grey" />
                                            </Card.Content>
                                            <Card.Content style={{ padding: 5, marginLeft: 10 }}>
                                                <Text style={{ fontSize: 20, }}>{data.item.Name}</Text>
                                            </Card.Content>
                                            <Card.Content style={{ padding: 5, marginLeft: 10 }}>
                                                <Text style={{ fontSize: 15, }}>$ {data.item.Price}</Text>
                                            </Card.Content>
                                        </Card>
                                    </View>
                                </TouchableOpacity>
                            )
                        }}
                    />
                </View>
                <View style={styles.footer}>
                    <AntDesign name="pluscircle" onPress={handleAdd} size={54} color="#9c9afc" style={{ backgroundColor: 'white', position: 'absolute', borderRadius: 70 }} />
                </View>
            </ImageBackground>
        </View>
    )
}

export default Product

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#ecf0f1',
    },
    view1: {
        flex: 1
    },
    footer: {
        alignItems: 'center',
        height: 50,
        backgroundColor: '#dfdee3'
    }
    ,
    image: {
        flex: 1,
        justifyContent: 'center',
    }
})