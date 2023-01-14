import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {CATEGORIES} from '../data/dummy-data';
import CategoryGridTile from '../components/CategoryGridTile';



export default function CategoryScreen({navigation}) {

  function renderCategoryItem(itemData) {

    const pressHandler = () => {
      navigation.navigate("MealsOverview", {
        categoryId: itemData.item.id
      });
    }
  
    return (
      <CategoryGridTile title={itemData.item.title} onPress={pressHandler} color={itemData.item.color} />
    );
  }


  return (
    <FlatList
      data={CATEGORIES}
      key={'_'}
      keyExtractor={itemData => itemData.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
}

const styles = StyleSheet.create({});
