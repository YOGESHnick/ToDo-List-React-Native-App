import {useState} from 'react';
import {View,TextInput,Button,StyleSheet,Modal} from 'react-native';

function GoalInput(props){
    const [enteredGoal,setEnteredGoal]=useState('');

    function goalInputHandler(enteredText){
        setEnteredGoal(enteredText);
      };

    function addGoalHandler(){
        props.onAddGoal(enteredGoal);
        setEnteredGoal('');
    }
    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
            <TextInput style={styles.textInput} placeholder="Your course goal!" 
            onChangeText={goalInputHandler} 
            value={enteredGoal}    />
            <Button title="+" onPress={addGoalHandler}/>
            </View>
        </Modal>
    );
}

export default GoalInput;

const styles=StyleSheet.create({
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
      }
})