import React, {useState} from 'react';
import GoalItem from './components/GoalItem'
import GoalInput from './components/GoalInput';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  FlatList,
  ScrollView,
} from 'react-native';

export default function App() {
  
  const [goals, setgoals] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  const onAddGoalHandler = (enteredGoalText) => {
    setgoals(prevGoals => [...prevGoals, {text: enteredGoalText, id: Math.random().toString()}]);
    closeModel();
  };

  const onDeleteItemHandler = (id) =>{
    setgoals(prevGoals => {return prevGoals.filter((goal) => goal.id!==id)});
  }

  const openModel = () => {
    setModalIsVisible(true);
  }

  const closeModel = () => {
    setModalIsVisible(false);
  }

  return (
    <View style={styles.appContainer}>
      <Button title='Add New Goal' onPress={openModel}/>
      <GoalInput closeModel={closeModel} modalIsVisible={modalIsVisible} btnPressHandle={onAddGoalHandler}/>
      <View style={styles.goalContiner}>

        <FlatList
          data={goals}
          keyExtractor={(item, index)=> {return item.id}}
          renderItem={itemData => {
            return (
              <GoalItem itemData={itemData} onDeleteGoal={onDeleteItemHandler}/>
            );
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 25,
    paddingHorizontal: 15,
  },
  
  goalContiner: {
    flex: 6,
  },
  
});
