import { useState } from 'react';
import { StyleSheet, Text, TextInput, Button, View, ScrollView, FlatList } from 'react-native';

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [learnningGoals, setLearningGoals] = useState([]);

  const goalInputHandler = (enteredText) => {
    setEnteredGoalText(enteredText);
  };
  const addGoalHandler = () => {
    // console.log(enteredGoalText);
    // setLearningGoals([...learnningGoals,enteredGoalText])
    setLearningGoals(currentlearningGoals => [...currentlearningGoals,
       {text : enteredGoalText,key : Math.random().toString()}
      ]);
  };

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Your Learning Goal!"
          onChangeText={goalInputHandler} />
        <Button
          title='Add Goal'
          color="#56aa8c"
          onPress={addGoalHandler} />
      </View>

      <View style={styles.goalsContainer}>
        <FlatList
          data={learnningGoals}
          renderItem={(itemData) => {
            return (
              <View style={styles.goalItem}>
                <Text style={styles.goalText}>{itemData.item.text}</Text>
              </View>
            );
          }}
          keyExtractor={(item,index) => {
            return item.id;
          }}

        />
        {/* <ScrollView>
        {learnningGoals.map((goal, index) =>
          <View key={index} style={styles.goalItem}>
            <Text style={styles.goalText}>{goal}</Text>
          </View>
        )}
       </ScrollView> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 16,
    backgroundColor: "#f2f2f1",
    // backgroundColor:"#56aa8c",
    // backgroundColor:"#ff474a"
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 8,
    padding: 8,
  },
  goalsContainer: {
    flex: 6,
  },
  goalItem: {
    margin: 8,
    padding: 20,
    backgroundColor: "#007371",
    borderRadius: 4,
  },
  goalText: {
    color: "#f7f8fa",
    fontWeight: "bold",
    fontSize: 16,
  },

});
