import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Cart from '../screens/cart';
import Header from '../components/header';


const { Navigator, Screen } = createStackNavigator();

export default function HomeStack() {
    return(
        <Navigator>
        <Screen 
            name="Cart"
            component={Cart}
            options={{ title: "My Cart" }}
            />
        
    </Navigator>
    )
}