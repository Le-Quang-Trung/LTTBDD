import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
const Screen03 = ({ navigation}) => {
    return (
        <View style={styles.container}>
            
            <View style={styles.img}>
                <Image source={require('../img/bione.png')} style={{width: 297, height: 310, top:20, left:40,  resizeMode: 'contain'}}></Image>
            </View>

            <Text style={{width: 250, height: 35, fontWeight: 'bold', fontSize: 30, right: 55, marginTop: 10,}}>Pina Mountain</Text>

            <View style={{flexDirection: 'row'}}>
                <Text style={{right: 100, color: 'grey', fontSize: 17}}>15% OFF | 350$</Text>
                <Text style={{right: 10, fontSize: 18, textDecorationLine: 'line-through' }}>449$</Text>
            </View>
        
            <Text style={{width: 130, height: 35, fontWeight: 'bold', fontSize: 23, right: 115}}>Description</Text>

            <Text style={styles.description}>It is a very important form of writing as<br></br>we write almost everything in<br></br>paragraphs, be it an answer, essay, story,<br></br>emails, etc.</Text>
            
            <View style={styles.containerbtn}>
                <Image source={require('../img/heart.png')} style={{width: 25, height:25, right: 30, top: 10}}></Image>
                <TouchableOpacity onPress={() => navigation.navigate("Screen01")}>
                    <Text style={styles.btn}>Add to card</Text>
                </TouchableOpacity>
            </View>
        
        </View>
    );
};
export default Screen03;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: 375,
        height: 812,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
    img:{
        width: 359,
        height: 355,
        borderRadius: 5,
        backgroundColor: '#F8E6E5',
    },
    description:{
        width: 375,
        height: 104,
        fontWeight: 'Voltaire',
        fontWeight: 400,
        fontSize: 18,
        color: '#808080',
        textAlign: 'left',
        left: 10,
        marginTop: 18,
    },
    containerbtn: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    btn: {
        display: 'flex',
        width: 265,
        height: 40,
        backgroundColor: '#E94141',
        color: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
        fontWeight: 'Voltaire',
        fontWeight: 400,
        fontSize: 20,
        marginTop: 20,
        bottom: 10,
    },
});