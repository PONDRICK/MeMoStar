import React, { useContext } from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";

import { Context } from "../context/BlogContext";

const StarredMemosScreen = ({ navigation, route }) => {
    const { state } = useContext(Context);

    const starredMemos = route.params.starredMemos;

    const starredMemosData = state.filter(memo => starredMemos.includes(memo.id));

    return (
        <View style={styles.container}>
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
        backgroundColor: "#F2E3DB",
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "#F2E3DB",
        margin: 15,
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: "#E86A33",
    },
    title: {
        fontSize: 18,
    },
});

export default StarredMemosScreen;
