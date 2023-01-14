import { Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function GoalItem(props) {
  const deleteGoalHandler = () => {
    props.onDeleteGoal(props.itemData.item.id);
  };

  return (
      <View style={styles.goalItem}>
        <Pressable
          android_ripple={{color: '#dddddd'}}
          onPress={deleteGoalHandler}>
          <Text style={styles.goalText}>{props.itemData.item.text}</Text>
        </Pressable>
      </View>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,

    backgroundColor: '#5e0acc',
  },
  goalText: {
    color: 'white',
    padding: 10,
  },
});
