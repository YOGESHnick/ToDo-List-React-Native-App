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
            <View style={styles.buttonContainer}>
                <View style={styles.button}>
                    <Button title="+" onPress={addGoalHandler}/>
                </View>
                <View style={styles.button}>
                    <Button title="-" onPress={props.onCancel}/>
                </View>
            </View>
            </View>
        </Modal>
    );
}

export default GoalInput;

const styles=StyleSheet.create({
    inputContainer: {
        flex: 1,
        // flexDirection: 'row',
        padding:20,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 24,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc'
      },
      textInput: {
        borderWidth: 1,
        borderColor: '#cccccc',
        width: '100%',
        padding: 8
      },
      buttonContainer:{
        marginTop:20,
        flexDirection:'row',
      },
      button:{
        width:100,
        marginHorizontal:8,
      }
})