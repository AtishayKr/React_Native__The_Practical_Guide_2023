import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import MealsList from '../components/mealList/MealsList'
import { MEALS } from '../data/dummy-data'


export default function FavourateScreen() {

  const favoriteMealIds =  useSelector( (state) => state.favoriteMeals.ids);

  const favoriteMeals =  MEALS.filter((meal) => favoriteMealIds.includes(meal.id));

  if(favoriteMeals.length === 0) {
    return <View>
      <Text> There is no items in your favorite</Text>
    </View>
  }

  return (
    <MealsList items={favoriteMeals} />
  )
}

const styles = StyleSheet.create({})