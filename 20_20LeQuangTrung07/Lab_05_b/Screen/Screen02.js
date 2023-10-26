import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList, Pressable } from 'react-native';
const Screen02 = ({ navigation }) => {

    const array = [
        {image: require('../img/bifour.png'), name: 'Pinarello', price: '$1800'},
        {image: require('../img/bione.png'), name: 'Pina Mountai', price: '$1700'},
        {image: require('../img/bithree.png'), name: 'Pina Bike', price: '$1500'},
        {image: require('../img/bitwo.png'), name: 'Pinarello', price: '$1900'},
        {image: require('../img/bithree.png'), name: 'Pinarello', price: '$2700'},
        {image: require('../img/bione.png'), name: 'Pinarello', price: '$1350'},
    ]

    return (
        <View style={styles.container}>

            <Text style={{color:'#E94141', fontSize: 25, fontWeight: 'ubuntu', fontWeight: 700, top: 10, right: 50, width: 255, height: 29 }}>The world's Best Bike</Text>

            <View style={styles.filter}>
                <TouchableOpacity>
                    <View style={styles.button}>All</View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.button}>Roadbike</View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.button}>Mountain</View>
                </TouchableOpacity>
            </View>

            <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 50}}>
                <FlatList
                numColumns={2}
                data={array}
                renderItem={({item}) =>
                    <Pressable style={styles.render} onPress={() => navigation.navigate('Screen03', {item})}>
                        <Image source={require('../img/heart.png')} style={{width: 25, height:25, right: 60, top: 10}}></Image>
                        <Image source={item.image} resizeMode='contain' style={{width: 128, height: 118}}></Image>
                        <Text style={{width: 97, height: 25, fontWeight: 'Voltaire', textAlign: 'center'}}>{item.name}</Text>
                        <Text>{item.price}</Text>
                    </Pressable>    
                }
                >
                </FlatList>

            </View>

        </View>
   
    );
};
export default Screen02;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: 375,
        height: 812,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
    filter:{
        flexDirection: 'row',
    },
    button:{
        width: 99,
        height: 32,
        margin: 10,
        top: 30,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#E94141'
    },
    render:{
        width: 167, 
        height: 170, 
        justifyContent:'center', 
        alignItems: 'center', 
        margin: 5,
        borderRadius: 15, 
        backgroundColor: '#FEF5ED',
  
    },
});