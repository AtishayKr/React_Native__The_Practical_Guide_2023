import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import PlaceItem from './PlaceItem';
import { Colors } from '../../constants/Colors';

export default function PlacesList({places}) {
  const handleRanderItem = item => {
    return <PlaceItem place={item} />;
  };

  if (!places || places.length === 0) {
    return (
      <View style={styles.fallbackContainer}>
        <Text style={styles.fallbackText}>
          No places addded yet - start adding some
        </Text>
      </View>
    );
  }

  return (
    <FlatList
      data={places}
      renderItem={handleRanderItem}
      keyExtractor={item => item.id}
    />
  );
}

const styles = StyleSheet.create({
  fallbackContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fallbackText: {
    fontSize: 16,
    color: Colors.primary200
  },
});
