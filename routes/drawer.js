import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import HomeStack from './homeStack';
import CartStack from './cartStack';

const Drawer = createDrawerNavigator();

export default function App() {
    return (
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen name="Home" component={HomeStack} />
          <Drawer.Screen name="Cart" component={CartStack} />
        </Drawer.Navigator>
      </NavigationContainer>
    );
  }