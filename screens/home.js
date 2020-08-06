
import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, FlatList } from 'react-native'
import { Card, ListItem, Button, Icon } from 'react-native-elements';
import { globalStyles } from '../styles/global';
import database from '@react-native-firebase/database';
import { db } from '../src/config';

const Home = ({ navigation }) => {

    // useEffect(() => {
    //     db.ref('/items').push({
    //         names
            
    //       });
    // })

    const [names, setName] = useState(
        // db.ref('/items/-ME0LOFi7ZCAiV7FuWZN/names')
        // .once('value')
        // .then(snapshot => {
        //     snapshot.val()
        // })
    )

    // { name: "Jaliby", status:"OPEN", key: '1' },
    //     { name: "Mang Enasal", status:"OPEN", key: '2' },
    //     { name: "Makdo", status:"OPEN", key: '3' },
    //     { name: "Chawkeng", status:"OPEN", key: '4' },
    //     { name: "Bin Ros", status:"OPEN", key: '5' },
    //     { name: "Grahi", status:"OPEN", key: '6' }
    const stores = () => {
       
    }
    
    return (
        <View style={globalStyles.container}>
           <FlatList
            data={names}
            renderItem={({ item }) => (
                <TouchableOpacity onPress={() => navigation.navigate('Details', item)}> 
                    <Card
                        image={require('../assets/palkon.jpg')}
                        imageStyle={{borderTopLeftRadius: 10, borderTopRightRadius: 10}}
                        containerStyle={globalStyles.cardCont}
                        >
                    <Text style={globalStyles.resName}> {item.name} </Text>
                    </Card>
                </TouchableOpacity>
            )}
            />
        </View>
    )
}

// const styles = StyleSheet.create({
//     resName: {
//         fontWeight: 'bold',
//         marginBottom: 10,
//         //textAlign: 'left',
//         fontSize: 20
      
//     },
//     resNameRight: {
//         fontWeight: 'bold',
//         marginBottom: 10,
//        // textAlign: 'right',
//         fontSize: 20,
//         color: 'green',
//         marginRight: 10
      
//     },
//     baga: {
//         flexDirection: 'row',
//     },
//     cardCont: {
//           borderRadius: 10,
          
//     }
    
// })
export default Home;