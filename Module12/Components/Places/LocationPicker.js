import {StyleSheet, Text, View, PermissionsAndroid} from 'react-native';
import React, {useState, useEffect} from 'react';
import OutlineButton from '../ui/OutlineButton';
import {Colors} from '../../constants/Colors';
import Geolocation from 'react-native-geolocation-service';
import {useNavigation, useRoute, useIsFocused} from '@react-navigation/native';

export default function LocationPicker({onPickLocation}) {
  const [locationObject, setLocationObject] = useState();

  const navigation = useNavigation();
  const route = useRoute();
  const isFocused = useIsFocused();

  
  useEffect(() => {
    if(isFocused && route.params) {
      const mapPicketLocation = route.params && {
        lat: route.params.pickedLat,
        long: route.params.pickedLng,
      };
      setLocationObject(mapPicketLocation)
    }

  }, [route, isFocused])

  useEffect(() => {
    onPickLocation(locationObject)
  }, [locationObject, onPickLocation])
  

  const getLocation = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Example App',
          message: 'Example App access to your location ',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        Geolocation.getCurrentPosition(
          position => {
            console.log(position);
            // console.log(position.coords.latitude);
            setLocationObject({
              lat: position.coords.latitude,
              long: position.coords.longitude,
            });
            
          },
          error => {
            // See error code charts below.
            console.log(error.code, error.message);
          },
          {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
        );
      } else {
        console.log('location permission denied');
        alert('Location permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  const pickLocationHandler = () => {
    getLocation();
  };

  const pickMapHandler = () => {
    navigation.navigate('Map');
  };

  let location = <Text> No location selected yet</Text>;

  if (locationObject) {
    location = (
      <Text>
        {' '}
        Sorry we are unable to preview your location. Your latitute :{' '}
        {locationObject.lat} & longitude: {locationObject.long}{' '}
      </Text>
    );
  }

  return (
    <View>
      <View style={styles.mapPreview}>{location}</View>
      <View style={styles.action}>
        <OutlineButton icon="location-arrow" onPress={pickLocationHandler}>
          Locate User
        </OutlineButton>
        <OutlineButton icon="map" onPress={pickMapHandler}>
          Pick on Map
        </OutlineButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mapPreview: {
    width: '100%',
    height: 200,
    marginVertical: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primary100,
    borderRadius: 4,
  },
  action: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
