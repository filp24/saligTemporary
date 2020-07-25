import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { Card, Button } from 'react-native-elements';
import { MaterialIcons } from '@expo/vector-icons';

import { globalStyles } from '../styles/global';


export default function InsideStore({ route }) {

    const [products, setProducts] = useState([
        { name: 'Chickenjoi', price: '85', store: 'Jaliby', key: '1' },
        { name: 'Unli Rice', price: '10', store: 'Mang Enasal', key: '2'},
        { name: 'Chicken Fillet', price: '35', store: 'Makdo', key: '3' },
        { name: 'Burger Steak', price: '50', store: 'Jaliby', key: '4' },
        { name: 'Mango Pie', price: '30', store: 'Jaliby', key: '5' },
        { name: 'Paa', price: '105', store: 'Mang Enasal', key: '6' },
        { name: 'Pecho', price: '115', store: 'Mang Enasal', key: '7' },
        
    ])
    
   
    return(
        
        <View style={globalStyles.container}>
            <FlatList 
                data={products.filter((e) => e.store === route.params.name)}
                renderItem={( {item} ) => (
                    <TouchableOpacity onPress={() => Alert.alert('Alert','Added to cart')}>
                        <Card containerStyle={globalStyles.cardCont}>
                        <View style={styles.itemView}>

                            <Text style={styles.itemStyle}>
                                {item.name}{'\n'}
                                <Text style={styles.priceStyle}>₱{item.price}</Text>
                            </Text>
                                
                                
                                {/* <Button
                                    icon={
                                        <MaterialIcons name="shopping-cart" size={24} color="white" />
                                    }
                                    style={styles.addCart}
                                    /> */}
                            </View>
                            
                        </Card>
                        
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    itemStyle: {
        fontWeight: 'bold',
        fontSize: 20,
    },
    priceStyle: {
        fontSize: 15,
        color: "green",
        fontWeight: 'bold'
    },
    addCart: {
        position: 'absolute',
        marginLeft: 20
    },
    itemView: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
});