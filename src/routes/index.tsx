import React from 'react';
import { Home } from 'pages/Home';

import { RootParams } from 'interfaces';

import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/FontAwesome';

const Drawer = createDrawerNavigator<RootParams>();

export const Routes = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        drawerInactiveTintColor: '#333333',
        drawerActiveBackgroundColor: '#000',
        drawerInactiveBackgroundColor: '#333333',
        drawerLabelStyle: {
          marginLeft: -25,
          fontSize: 15,
          color: '#fff',
        },
      }}
    >
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          drawerLabel: 'Início',
          drawerIcon: ({ color }) => (
            <Icon name="home" size={22} color={'#fff'} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};
