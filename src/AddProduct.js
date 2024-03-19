import { StyleSheet, Text, TextInput, TouchableOpacity, View, Button, Image } from 'react-native'
import React, { useState } from 'react'
import * as ImagePicker from 'expo-image-picker';

const AddProduct = () => {
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')
    //select image functions
    const [image, setImage] = useState(null);
    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };

    const handleInsert = () => {
        if (name.length == 0) {
            alert('Enter the name')
            return;
        }
        if (price.length == 0) {
            alert('Enter the Price')
            return;
        }
        if (description.length == 0) {
            alert('Enter the Description')
            return;
        }
        fetch("http://173.0.0.247:8112/ecommerce/AddProduct.php", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                img: image,
                Name: name,
                Price: price,
                Description: description,
            })
        }).then(Response => { Response.json() })
            .then(Response => { alert(Response) })
            .then(error => { alert(error) })
    }
    return (
        <View style={styles.container}>
            <View style={styles.iview}>
                <TextInput placeholder='Name of the Product' style={styles.inputtype} onChangeText={text => setName(text)} />
            </View>
            <View style={styles.iview}>
                <TextInput placeholder='Price' style={styles.inputtype} onChangeText={text => setPrice(text)} />
            </View>
            <View style={styles.iview}>
                <TextInput placeholder='Description' style={styles.inputtype} onChangeText={text => setDescription(text)} />
            </View>

            <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 40 }}>
                <TouchableOpacity onPress={handleInsert} style={{ height: 39, width: 130, backgroundColor: '#b6aae6', borderRadius: 20, alignItems: 'center' }}>
                    <Text style={{ alignItems: 'center', justifyContent: 'center', padding: 6 }}>Add Product</Text>
                </TouchableOpacity>
            </View>
            <View style={{ height: 39, width: 130, backgroundColor: '#b6aae6', borderRadius: 20, alignItems: 'center', marginTop: 30, marginLeft: 130, padding: 4 }}>
                <Text onPress={pickImage}>Image</Text>
            </View>
            {image && <Image source={{ uri: image }} style={{ width: 200, height: 200, marginLeft: 100, marginTop: 20, }} />}
            <Text style={{ fontSize: 8 }} >{image}</Text>
        </View>
    )
}

export default AddProduct

const styles = StyleSheet.create({
    container: {
        marginTop: 130
    },
    iview: {
        justifyContent: 'center',
        alignItems: 'center',

    },
    inputtype: {
        marginTop: 15,
        textAlign: "center",
        marginBottom: 4,
        height: 60,
        borderRadius: 15,
        backgroundColor: 'white',
        width: 350,
        justifyContent: 'center'
    }
})