import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import CategoryScreen from './Screens/CategoryScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MealOverviewScreen from './Screens/MealOverviewScreen';
import MealDetailScreen from './Screens/MealDetailScreen';
import Drawer from './navigator/DrawerNavigation';
import {Provider} from 'react-redux';
import { store } from './store/redux/store';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="MealsCategories"
            component={Drawer}
            options={{headerShown: false}}
          />
          <Stack.Screen name="MealsOverview" component={MealOverviewScreen} />
          <Stack.Screen name="MealDetail" component={MealDetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

const styles = StyleSheet.create({});

export default App;
