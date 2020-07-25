import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/home';
import InsideStore from '../screens/insideStore';
import Header from '../components/header';


const { Navigator, Screen } = createStackNavigator();

export default function HomeStack({ navigation }) {
    return(
        <Navigator>
        <Screen 
            name="Home"
            component={Home}
            options={{ headerTitle: () => <Header navigation={navigation} title='SALIG APP'/> }}
            />
        <Screen 
            name="Details"
            component={InsideStore}
            options={{title: "Menu"}}
            
            />
    </Navigator>
    )
}