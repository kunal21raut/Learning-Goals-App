import { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';


export default function App() {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [learnningGoals, setLearningGoals] = useState([]);

  const modalHandler = () => {
    setIsModalVisible(true);
  }

  const addGoalHandler = (enteredGoalText) => {
    // console.log(enteredGoalText);
    // setLearningGoals([...learnningGoals,enteredGoalText])
    setLearningGoals(currentlearningGoals => [...currentlearningGoals,
    { text: enteredGoalText, id: Math.random().toString() }
    ]);
  };

  const deleteGoalHandler = (id) => {
    setLearningGoals((currentlearningGoals) => {
      return currentlearningGoals.filter((goal) => goal.id !== id);
    })
  };

  return (
    <View style={styles.appContainer}>
    <View style={styles.buttonStyle}>
      <Button title="Add New Goal" onPress={modalHandler} color="#ff474a" />
     </View>
      <GoalInput
        visible={isModalVisible}
        modalHandler={setIsModalVisible}
        onAddGoal={addGoalHandler}
      />

      <View style={styles.goalsContainer}>
        <FlatList
          data={learnningGoals}
          renderItem={(itemData) => {
            return <GoalItem text={itemData.item.text}
              onDeleteitem={deleteGoalHandler}
              id={itemData.item.id}
            />;
          }}
          keyExtractor={(item) => {
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
    backgroundColor: "#1d0225ff",
    // backgroundColor:"#56aa8c",
    // backgroundColor:"#ff474a"
  },
  goalsContainer: {
    flex: 6,
    borderRadius: 6,
    padding:5,
    marginTop:20,
  },
  buttonStyle: {
    margin: 10,
    padding: 14,
    borderBottomWidth: 3,
    borderBlockColor:"white",
},

});
