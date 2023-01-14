import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import CategoryScreen from '../Screens/CategoryScreen'
import FavourateScreen from '../Screens/FavourateScreen'
import Icon from 'react-native-vector-icons/FontAwesome';

const Drawer = createDrawerNavigator();

export default function DrawerNavigation() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="All Category" component={CategoryScreen} options={{
        title: "Category",
        drawerIcon: ({color, size}) => <Icon name={'list'} size={size} color={color} />}}/>
      <Drawer.Screen name="Favourate" component={FavourateScreen} 
      options={{
        title: "Davourate",
        drawerIcon: ({color, size}) => <Icon name={'star'} size={size} color={color} />}}/>
    </Drawer.Navigator>
  )
}