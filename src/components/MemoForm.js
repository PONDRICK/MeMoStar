import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from "react-native";

const MemoForm = ({ onSubmit, initValues }) => {
    const [title, setTitle] = useState(initValues.title);
    const [content, setContent] = useState(initValues.content);

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Title:</Text>
            <TextInput
                style={styles.input}
                value={title}
                onChangeText={(text) => setTitle(text)}
            />
            <Text style={styles.label}>Content:</Text>
            <TextInput
                style={[styles.input, styles.multiline]} // Added styles for multiline input
                multiline
                numberOfLines={5}
                value={content}
                onChangeText={(text) => setContent(text)}
            />
            <TouchableOpacity // Changed to TouchableOpacity for better styling
                style={[styles.button, { backgroundColor: '#E86A33' }]} // Set button style and color
                onPress={() => {
                    onSubmit(title, content);
                }}
            >
                <Text style={styles.buttonText}>Submit Memo</Text>
            </TouchableOpacity>
        </View>
    );
};

MemoForm.defaultProps = {
    initValues: { title: "", content: "" },
};

const styles = StyleSheet.create({
    container: {
        flex:1,
        margin: 15,
        backgroundColor:'#F2E3DB',
        borderRadius: 10
    },
    label: {
        fontSize: 20,
        marginBottom: 5,
        marginLeft: 5,
        fontWeight: 'bold',
    },
    input: {
        fontSize: 18,
        borderWidth: 1,
        borderColor: "#E86A33",
        borderRadius: 5,
        padding: 5,
        paddingLeft: 10,
        margin: 10,
        marginBottom: 15,
        backgroundColor: "#fff"
    },
    multiline: {
        minHeight: 100, // Set a minimum height for multiline input
    },
    button: {
        borderRadius: 15,
        padding: 10,
        alignItems: 'center',
        backgroundColor: '#E86A33',
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default MemoForm;
