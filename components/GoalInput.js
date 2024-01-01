import { StyleSheet, View, TextInput, Button, Modal,Image } from "react-native";
import { useState } from "react";

const GoalInput = (props) => {
    const [enteredGoalText, setEnteredGoalText] = useState('');

    const goalInputHandler = (enteredText) => {
        setEnteredGoalText(enteredText);
    };

    const addGoalHandler = () => {
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText('');
    }
    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
            <Image source={require('../assets/images/goal.png')} style={styles.imageStyle} />
                <TextInput
                    style={styles.textInput}
                    placeholder="Your Learning Goal!"
                    onChangeText={goalInputHandler}
                    value={enteredGoalText}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.buttonStyle}>
                        <Button
                            title='Add Goal'
                            color="#56aa8c"
                            onPress={addGoalHandler}
                        />
                    </View>
                    <View style={styles.buttonStyle}>
                        <Button
                            title="Cancel"
                            color="#ff474a"
                            onPress={() => props.modalHandler(false)}
                        />
                    </View>
                </View>
            </View>
        </Modal>
    );
}

export default GoalInput;


const styles = StyleSheet.create({
    textInput: {
        borderWidth: 2,
        color: "#002130",
        borderColor: '#cccccc',
        width: '90%',
        marginRight: 8,
        padding: 16,
        backgroundColor:"white",
        borderRadius: 10,
        fontSize:16,
    },
    inputContainer: {
        flex: 1,
        // flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 24,
        backgroundColor:"#1d0225ff"
    },
    buttonContainer: {
        flexDirection: 'row',
    },
    buttonStyle: {
        width: '30%',
        margin: 8,
        padding: 4,
    },
    imageStyle: {
        height:100,
        width:100,
        margin:20,
        tintColor:"#56aa8c",
    },

});