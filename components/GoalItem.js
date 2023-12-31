import { StyleSheet, Text, View, Pressable} from "react-native";
import React from "react";

const GoalItem = ({text,onDeleteitem,id}) => {
    return (
        <Pressable onLongPress={onDeleteitem.bind(this,id)}>
        <View style={styles.goalItem}>
            <Text style={styles.goalText}>{text}</Text>
        </View>
        </Pressable>
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
