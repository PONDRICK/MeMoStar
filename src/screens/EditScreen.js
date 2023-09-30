import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Context } from "../context/BlogContext";
import MemoForm from "../components/MemoForm";
const EditScreen = ({ route, navigation }) => {
    const { state, editMemo } = useContext(Context);
    const id = route.params.id;
    const memo = state.find((memo) => memo.id === id);

    return (
        <View style={styles.container}>
            <MemoForm initValues={{ title: memo.title, content: memo.content, date: memo.date, time: memo.time, room: memo.room }}
                onSubmit={(title, content, date, time, room) => {
                    editMemo(id, title, content, date, time, room)
                    navigation.pop();
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        fontSize: 20,
        marginBottom: 5,
    },
    content: {
        fontSize: 16,
    },
});

export default EditScreen;