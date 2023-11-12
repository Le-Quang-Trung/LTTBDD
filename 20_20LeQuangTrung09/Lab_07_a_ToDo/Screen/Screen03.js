import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, TextInput, Pressable, FlatList } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

function Screen03({ navigation, route }) {
    const { email, item, data, update } = route.params;
    console.log(item)
    const [toDoNew, setToDoNew] = useState(item ? item : '');

    function addTextToUserById(userId, newText) {
        fetch(`https://6547087f902874dff3abe8cc.mockapi.io/ToDo${userId}`, {
          method: "PUT", 
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            text: [...data.text,newText],
          }),
        })
          .then(response => response.json())
          .then(updatedData => {
            console.log("Dữ liệu đã được cập nhật:", updatedData);
            update=1;
          })
          .catch(error => {
            console.error("Đã xảy ra lỗi khi cập nhật dữ liệu:", error);
          });
      }      
      const handleHome = () => {
        addTextToUserById(data.id, toDoNew);
        navigation.navigate("Screen02", {email, data, update : 1});
      }

    return (
        <View style={styles.container}>
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: 15, width: "100%" }}>
                <View style={{ marginLeft: 30, flexDirection: "row", alignItems: "center" }}>
                    <Image style={{ width: 50, height: 50 }} resizeMode="contain" source={require("../img/avt.png")} />
                    <View style={{ marginLeft: 10 }}>
                        <Text style={{ fontSize: 18, fontWeight: "bold" }}>{email}</Text>
                        <Text style={{ fontSize: 18 }}>Have a agrete day a head</Text>
                    </View>
                </View>
                <Pressable onPress={() => { navigation.navigate("Screen02", { email }) }}>
                    <AntDesign name="arrowleft" size={24} color="black" />
                </Pressable>
            </View>
            <View style={{ marginTop: 20 }}>
                <Text style={{ fontSize: 30, fontWeight: "bold" }}>{item ? "EDIT TO JOB" : "ADD YOUR JOB"}</Text>
            </View>
            <View style={{ width: '300px', height: '50px', borderColor: "#111", borderWidth: 1, borderRadius: 10, flexDirection: "row", alignItems: "center", marginTop: 30 }}>
                <FontAwesome style={{ marginLeft: 20 }} name="sticky-note-o" size={24} color="green" />
                <TextInput style={{ marginLeft: 10, width: "80%", height: "100%", fontSize: 20, outlineStyle: 'none' }} value={toDoNew} onChangeText={setToDoNew} placeholder="Enter your job" />
            </View>
            <Pressable onPress={handleHome} style={{ marginTop: 20, width: 200, height: 45, backgroundColor: "#00bdd5", borderRadius: 10, justifyContent: "center", alignItems: "center", flexDirection: "row" }}>
                <Text style={{ fontSize: 18, fontWeight: "bold", color: "#fff" }}>FINISH</Text>
                <AntDesign name="arrowright" size={24} color="#fff" />
            </Pressable>
            <Image style={{ width: '200px', height: '200px' }} resizeMode="contain" source={require("../img/image.png")} />
        </View>
    )
}
export default Screen03
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: "center",
        justifyContent: "space-between"
    },
});