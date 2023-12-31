import { useState } from 'react';
import { StyleSheet, Text, TextInput, Button, View, ScrollView, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';


export default function App() {
  const [learnningGoals, setLearningGoals] = useState([]);


  const addGoalHandler = (enteredGoalText) => {
    // console.log(enteredGoalText);
    // setLearningGoals([...learnningGoals,enteredGoalText])
    setLearningGoals(currentlearningGoals => [...currentlearningGoals,
       {text : enteredGoalText,id : Math.random().toString()}
      ]);
  };

  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal={addGoalHandler}/>

      <View style={styles.goalsContainer}>
        <FlatList
          data={learnningGoals}
          renderItem={(itemData) => {
            return <GoalItem text={itemData.item.text}/>;
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
  goalsContainer: {
    flex: 6,
    borderRadius:6,
  },

});
