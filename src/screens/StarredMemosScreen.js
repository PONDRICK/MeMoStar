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
                                    {item.title}-{item.id}
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
        backgroundColor: "#D6CC99",
        padding: 15
    },
    header: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 10,
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "#FDE5D4",
        margin: 10,
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: "#000",
    },
    title: {
        fontSize: 18,
    },
});

export default StarredMemosScreen;
