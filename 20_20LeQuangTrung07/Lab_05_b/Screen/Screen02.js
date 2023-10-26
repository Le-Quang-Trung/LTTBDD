import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, FlatList, Pressable } from 'react-native';
const Screen02 = ({ navigation }) => {

    const array = [
        {id: 1, image: require('../img/bifour.png'), name: 'Pinarello', price: '$1800', type: "MOUNTAIN PIKE"},
        {id: 2, image: require('../img/bione.png'), name: 'Pina Mountai', price: '$1700', type: "MOUNTAIN PIKE"},
        {id: 3, image: require('../img/bithree.png'), name: 'Pina Bike', price: '$1500', type: "MOUNTAIN PIKE"},
        {id: 4,image: require('../img/bitwo.png'), name: 'Pinarello', price: '$1900', type: "MOUNTAIN PIKE"},
        {id: 5,image: require('../img/bithree.png'), name: 'Pinarello', price: '$2700', type: "ROAD PIKE"},
        {id: 6,image: require('../img/bione.png'), name: 'Pinarello', price: '$1350', type: "ROAD PIKE"},
    ]

    const [selectedButton, setSelectedButton] = useState('ALL');
    const [filteredProducts, setFilteredProducts] = useState(array);

    const handleButtonPress = (buttonName) => {
        setSelectedButton(buttonName);
    };

    useEffect(() => {
        filterProducts();
    }, [selectedButton]);

    const filterProducts = () => {
        if (selectedButton === 'ALL') {
            setFilteredProducts(array);
        } else {
            const filtered = array.filter(item => item.type === selectedButton);
            setFilteredProducts(filtered);
        }
    };

    return (
        
        <View style={styles.container}>

            <Text style={{color:'#E94141', fontSize: 25, fontWeight: 'ubuntu', fontWeight: 700, top: 10, right: 50, width: 255, height: 29 }}>The world's Best Bike</Text>

            <View style={styles.filter}>
                <Pressable onPress={() => handleButtonPress('ALL')}>
                    <Text style={{ color: selectedButton === 'ALL' ? 'red' : '#BEB6B6', width: 99, height: 32, margin: 10, top: 30, justifyContent: 'center', alignItems: 'center', borderRadius: 5, borderWidth: 1, borderColor: '#E94141'}}>All</Text>
                </Pressable>
                <Pressable onPress={() => handleButtonPress('ROAD BIKE')}>
                    <Text style={{color: selectedButton === 'ROAD BIKE' ? 'red' : '#BEB6B6', width: 99, height: 32, margin: 10, top: 30, justifyContent: 'center', alignItems: 'center', borderRadius: 5, borderWidth: 1, borderColor: '#E94141'}}>Roadbike</Text>
                </Pressable>
                <Pressable onPress={() => handleButtonPress('MOUNTAIN BIKE')}>
                    <Text style={{color: selectedButton === 'MOUNTAIN BIKE' ? 'red' : '#BEB6B6', width: 99, height: 32, margin: 10, top: 30, justifyContent: 'center', alignItems: 'center', borderRadius: 5, borderWidth: 1, borderColor: '#E94141'}}>Mountain</Text>
                </Pressable>
            </View>

            <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 50}}>
                <FlatList
                numColumns={2}
                data={filteredProducts}
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