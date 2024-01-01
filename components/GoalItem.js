import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";

const GoalItem = ({ text, onDeleteitem, id }) => {
    return (
        <View style={styles.goalItem}>
            <Pressable android_ripple={{color:"#0c0037"}} onLongPress={onDeleteitem.bind(this, id)}>
                <Text style={styles.goalText}>{text}</Text>
            </Pressable>
        </View>
    );
};

export default GoalItem;

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        backgroundColor: "#007371",
        borderRadius: 4,
    },
    goalText: {
        color: "#f7f8fa",
        padding: 20,
        fontWeight: "bold",
        fontSize: 16,
    },
});
