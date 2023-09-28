import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import MemoForm from "../components/MemoForm";
import { Context } from "../context/BlogContext";

const CreateScreen = ({ navigation }) => {
    const { addMemo } = useContext(Context);
    return (
        <MemoForm
            onSubmit={(title, content) => {
                addMemo(title, content);
                navigation.navigate("Index");
            }}
        />
    );
};

const styles = StyleSheet.create({});

export default CreateScreen;
