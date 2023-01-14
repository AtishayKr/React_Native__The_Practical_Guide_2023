import {StyleSheet, Text, View, StatusBar} from 'react-native';
import React from 'react';
import AllPlaces from './Screens/AllPlaces';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AddPlace from './Screens/AddPlace';
import IconButton from './Components/ui/IconButton';
import {Colors} from './constants/Colors';
import Map from './Screens/Map';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar backgroundColor={Colors.primary500} />

      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {backgroundColor: Colors.primary500},
            tintColor: Colors.gray700,
            contentStyle: {backgroundColor: Colors.gray700},
          }}>
          <Stack.Screen
            name="All Places"
            component={AllPlaces}
            options={({navigation}) => ({
              title: 'Your Favorite Places',
              headerRight: ({tintColor}) => (
                <IconButton
                  icon="plus"
                  size={24}
                  color={tintColor}
                  onPress={() => navigation.navigate('Add Place')}
                />
              ),
            })}
          />
          <Stack.Screen
            name="Add Place"
            component={AddPlace}
            options={{
              title: 'Add a new Place',
            }}
          />
          <Stack.Screen
            name="Map"
            component={Map}
            options={
            {title: "you Location"}
            }
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({});
