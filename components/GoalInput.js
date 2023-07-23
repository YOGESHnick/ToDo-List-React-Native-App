import {useState} from 'react';
import {View,TextInput,Button,StyleSheet,Modal,Image} from 'react-native';

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
            <Image source={require('../assets/images/goal.png')} style={styles.image} />
            <TextInput style={styles.textInput} placeholder="Your course goal!" 
            onChangeText={goalInputHandler} 
            value={enteredGoal}    />
            <View style={styles.buttonContainer}>
                <View style={styles.button}>
                    <Button title="+" onPress={addGoalHandler} color="#f5f5f5" />
                </View>
                <View style={styles.button}>
                    <Button title="-" onPress={props.onCancel} color="#f5f5f5" />
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
        backgroundColor:'#003329',
      },
      image:{
        width:100,
        height:100,
        margin:25,
        borderColor:'#003329',
      },
      textInput: {
        borderWidth: 1,
        borderColor: '#3d8072',
        backgroundColor:'#3d8072',
        // backgroundColor:'#91d9cb',
        borderRadius:12,
        color:'#f5f5f5',
        width: '100%',
        padding: 16,
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