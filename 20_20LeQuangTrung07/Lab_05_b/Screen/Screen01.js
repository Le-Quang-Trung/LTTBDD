import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useState } from "react";

const Screen01 = ({ navigation }) => {
  
  return (
    <View style={styles.container}>

        <Text style={styles.text}>A premium online store for<br></br>sporter and their stylish choice</Text>

        <View style={{ flexDirection: "row", justifyContent: "center", marginTop:10, }}>
          <Image style={styles.img} source={require("../img/bifour.png")}></Image>
        </View>

        <Text style={{fontWeight: 'ubuntu', fontWeight: 700, fontSize: 26, textAlign: 'center', marginTop:15,}}>POWER BIKE<br></br>SHOP</Text>

        <View style={styles.containerbtn}> 
          <TouchableOpacity onPress={() => navigation.navigate("Screen02")}>
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
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    width: 375,
    height: 812,
    top: 61,
    left: 12,
    fontSize: 26,
    fontWeight: 'VT323',
    fontWeight: 400,
    textAlign: 'center',
  },
  img: {
    height: 301,
    width: 361,
    resizeMode: "contain",
  },
  containerbtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  btn: {
    display: "flex",
    width: 340,
    height: 61,
    backgroundColor: '#E94141',
    color: '#fff',
    alignItems: "center",
    justifyContent: "center",
    marginTop: 60,
    borderRadius: 30,
    fontWeight: 'VT323',
    fontWeight: 400,
    fontSize: 20,
  },
});