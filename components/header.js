import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
//import { DrawerActions } from '@react-navigation/native';

export default function Header({navigation, title}) {

    const openMenu = () => {
        navigation.openDrawer()
    }

    const openCart = () => {
        navigation.navigate('Cart')
    }

    return(
        <View style={styles.header}>
            <MaterialIcons name='menu' size={28} onPress={openMenu} style={styles.icon}/>
            <View>
                <Text style={styles.headerText}>
                    {title}
                </Text>
            </View>
            <MaterialIcons name="shopping-cart" size={24} color="black" style={styles.cart} onPress={openCart} />
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#333',
        letterSpacing: 1
    },
    icon: {
        position: 'absolute',
        left: 5
    },
    cart: {
        position: 'absolute',
        right: 5
    }
});