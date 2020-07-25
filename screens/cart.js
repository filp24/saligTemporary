import React from 'react';
import { View, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { globalStyles } from '../styles/global';

export default function Cart() {
    return (
        <View style={globalStyles.container}>
           
                <MaterialIcons 
                    name="shopping-cart" 
                    size={400} 
                    color="black"
                     />
                    
            <Text style={{fontWeight: 'bold', fontSize: 50, alignItems: 'center'}}>
                BIG ASS CART
            </Text>
        </View>
    )
}