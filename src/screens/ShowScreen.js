import React, { useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Context } from "../context/BlogContext";
import { AntDesign } from '@expo/vector-icons';

const ShowScreen = ({ route }) => {
    const { state } = useContext(Context);

    const memo = state.find((memo) => memo.id === route.params.id);

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Memo Details</Text>
            <View style={styles.memoContainer}>
                <Text style={styles.title}>{memo.title}</Text>
                <Text style={styles.content}>{memo.content}</Text>
                <Text style={styles.content}>{memo.date}</Text>
                <Text style={styles.content}>{memo.time}</Text>
                <Text style={styles.content}>{memo.room}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
        backgroundColor: "#F2E3DB",
    },
    header: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 10,
    },
    memoContainer: {
        backgroundColor: "#fff",
        borderRadius: 10,
        padding: 15,
        marginBottom: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    memoHeader: {
        alignItems: "flex-end",
        marginBottom: -20,
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 10,
    },
    content: {
        fontSize: 18,
    },
});

export default ShowScreen;
