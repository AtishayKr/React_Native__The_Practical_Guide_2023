import { StyleSheet, Text, View, FlatList } from 'react-native'
import MealItem from './MealItem';
import React from 'react'

export default function MealsList({items}) {
    const renderMealItem = itemData => {
        return (
          <MealItem
            id={itemData.item.id}
            title={itemData.item.title}
            imageUrl={itemData.item.imageUrl}
            duration={itemData.item.duration}
            complexity={itemData.item.complexity}
            affordability={itemData.item.affordability}
          />
        );
      };
    
      return (
        <View style={styles.container}>
          <FlatList
            data={items}
            keyExtractor={item => item.id}
            renderItem={renderMealItem}
          />
        </View>
      );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
      },
})