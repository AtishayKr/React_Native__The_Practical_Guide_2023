import {StyleSheet, Text, View, Image, Button} from 'react-native';
import React, {useLayoutEffect} from 'react';
import {MEALS} from '../data/dummy-data';
import IconButton from '../components/IconButton';
import {useDispatch, useSelector} from 'react-redux';
import {addFavourite, removeFavourite} from '../store/redux/favorites';

export default function MealDetail({route, navigation}) {
  const favoriteMealIds = useSelector(state => state.favoriteMeals.ids);
  const dispatch = useDispatch();

  const mealId = route.params.mealId;
  const selectedMeal = MEALS.find(meal => meal.id === mealId);

  const mealIsFavourite = favoriteMealIds.includes(mealId);

  const changeFavouriteSatatusHandler = () => {
    if (mealIsFavourite) {
      dispatch(removeFavourite({id: mealId}));
    } else {
      dispatch(addFavourite({id: mealId}));
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            name={mealIsFavourite ? 'star' : 'star-o'}
            color={'#900'}
            onPress={changeFavouriteSatatusHandler}
          />
        );
      },
    });
  }, [navigation, changeFavouriteSatatusHandler]);

  return (
    <View>
      <Image style={styles.image} source={{uri: selectedMeal.imageUrl}} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <View style={styles.detail}>
        <Text style={styles.detailItem}>{selectedMeal.duration}m</Text>
        <Text style={styles.detailItem}>
          {selectedMeal.complexity.toUpperCase()}
        </Text>
        <Text style={styles.detailItem}>
          {selectedMeal.affordability.toUpperCase()}
        </Text>
      </View>
      <Text style={styles.subtitle}>Ingredients</Text>
      {selectedMeal.ingredients.map(ingredient => (
        <Text key={ingredient}>{ingredient}</Text>
      ))}

      <Text style={styles.subtitle}>Steps</Text>
      {selectedMeal.steps.map(step => (
        <Text key={step}>{step}</Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 350,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    margin: 8,
    textAlign: 'center',
  },
  detail: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    justifyContent: 'center',
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginHorizontal: 24,
    marginVertical: 4,
    textAlign: 'center',
    padding: 5,
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
  },
});
