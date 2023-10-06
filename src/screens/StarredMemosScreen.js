import React, { useContext } from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import { Context } from "../context/BlogContext";

const StarredMemosScreen = ({ navigation, route }) => {
    const { state } = useContext(Context);

    const starredMemos = route.params.starredMemos;

    const starredMemosData = state.filter(memo => starredMemos.includes(memo.id));

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Final Exam Completed:</Text>
            <FlatList
                data={starredMemosData}
                keyExtractor={(memo) => memo.title}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity
                            onPress={() => navigation.navigate("Show", { id: item.id })}
                        >
                            <View style={styles.row}>
                                <Text style={[styles.title]} color="#fff">
                                    {item.title}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    );
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F5F5F5",
        padding: 15
    },
    header: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 10,
        color: '#444',
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "#fff",
        margin: 10,
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    title: {
        fontSize: 18,
        color: '#444',
    },
});

export default StarredMemosScreen;
