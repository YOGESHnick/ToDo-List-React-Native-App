import {useState} from 'react';
import { StyleSheet, View,FlatList,Button } from 'react-native';
import {StatusBar} from 'expo-status-bar';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {

  
  const [goals,setGoals]=useState([])

  const [modalIsVisible,setmodalIsVisible]=useState(false);

  function startAddGoalHandler(){
    setmodalIsVisible(true);
  }

  function endAddGoalHandler(){
    setmodalIsVisible(false);
  }

  function addGoalHandler(enteredGoal){
    setGoals(currentGoals=>
      [...currentGoals,{ text : enteredGoal, id : Math.random().toString()}]
    );
    endAddGoalHandler();
  };

  function deleteGoalHandler(id){
    setGoals(currentGoals=>{
      return currentGoals.filter( (goal) => goal.id!==id );
    })
  }

  return (
    <>
    <StatusBar style='light' />
    <View style={styles.appContainer}>
      
      <GoalInput visible={modalIsVisible} onAddGoal={addGoalHandler} onCancel={endAddGoalHandler}/>
      <View style={styles.goalsContainer}>
        <FlatList data={goals} 
        renderItem={itemData=>{
          return (
          <GoalItem 
          text={itemData.item.text} 
          id={itemData.item.id}
          onDeleteItem={deleteGoalHandler}/>
          );
        }}
        keyExtractor={(item,index)=>{
          return item.id;
        }} 
        alwaysBounceVertical={false} />
      </View>
      <Button 
        title='Add New Goal' 
        color="#f5f5f5"
        onPress={startAddGoalHandler} 
      />
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop:70,
    paddingHorizontal: 16,
    backgroundColor:'#224d44',
    paddingBottom: 170,
  },

  goalsContainer: {
    flex: 5
  }
  
});
