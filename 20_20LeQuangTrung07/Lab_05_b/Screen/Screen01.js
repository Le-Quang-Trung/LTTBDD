import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState } from 'react';

const Screen01 = ({ navigation }) => {
  
  return (
    <View style={styles.container}>

        <Text style={styles.text}>A premium online store for<br></br>sporter and their stylish choice</Text>

        <View style={styles.image}>
          <Image style={styles.img} source={require('../img/bifour.png')}></Image>
        </View>

        <Text style={styles.text1}>POWER BIKE<br></br>SHOP</Text>

        <View style={styles.containerbtn}> 
          <TouchableOpacity onPress={() => navigation.navigate('Screen02')}>
            <Text style={styles.btn}>Get Started</Text>
          </TouchableOpacity>
        </View>

    </View>
     

  );
};
export default Screen01;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 375,
    height: 812,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    width: 351,
    height: 87,
    top: 30,
    fontSize: 20,
    fontWeight: 'VT323',
    textAlign: 'center',
  },
  image:{ 
    justifyContent: 'center', 
    width: 359,
    height: 360,
    top: 10,
    borderRadius: 50,
    backgroundColor: '#F8E6E5',
    marginTop: 15,
  },
  img: {
    height: 292,
    width: 270,
    top: 20,
    left: 31,
    resizeMode: 'contain',
  },
  text1: {
    width: 351,
    height: 61,
    top: 20,
    fontWeight: 'ubuntu',
    fontWeight: 700, 
    fontSize: 26, 
    textAlign: 'center', 
  },
  containerbtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  btn: {
    display: 'flex',
    width: 340,
    height: 61,
    backgroundColor: '#E94141',
    color: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 60,
    borderRadius: 30,
    fontWeight: 'VT323',
    fontWeight: 400,
    fontSize: 20,
    bottom: 15,
  },
});