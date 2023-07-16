import {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput ,ScrollView } from 'react-native';


export default function App() {

  const [enteredGoal,setEnteredGoal]=useState('');
  const [goals,setGoals]=useState([])

  function goalInputHandler(enteredText){
    setEnteredGoal(enteredText);
  };

  function addGoalHandler(){
    setGoals(currentGoals=>
      [...currentGoals,enteredGoal]
    );
  };

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder="Your course goal!" 
        onChangeText={goalInputHandler} />
        <Button title="+" onPress={addGoalHandler}/>
      </View>
      <View style={styles.goalsContainer}>
        <ScrollView>
        {goals.map( (goal)=> 
        <View style={styles.goalItem} key={goal} >
          <Text style={styles.goalText}>
            {goal}
          </Text>
        </View>
        )}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor:'#f9f9f9'
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc'
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 8,
    padding: 8
  },
  goalsContainer: {
    flex: 5
  },
  goalItem:{
    margin:8,
    padding:8,
    borderRadius:6,
    backgroundColor:'#003329',
    
  },
  goalText:{
    color:'white'
  }
});
