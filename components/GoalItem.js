import { StyleSheet, Text, View } from "react-native";
import React from "react";

const GoalItem = ({text}) => {
    return (
        <View style={styles.goalItem}>
            <Text style={styles.goalText}>{text}</Text>
        </View>
    );
};

export default GoalItem;

const styles = StyleSheet.create({
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
