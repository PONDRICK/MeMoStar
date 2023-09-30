import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from "react-native";

const MemoForm = ({ onSubmit, initValues }) => {
    const [title, setTitle] = useState(initValues.title);
    const [content, setContent] = useState(initValues.content);
    const [date, setDate] = useState(initValues.date);
    const [time, setTime] = useState(initValues.time);
    const [room, setRoom] = useState(initValues.room)

    const isDateValid = /^([0-2][0-9]|3[0-1])\/(0[1-9]|1[0-2])\/\d{4}$/.test(date);
    const isTimeValid = /^([01][0-9]|2[0-3]):[0-5][0-9]$/.test(time);

    let dateObj = null;
    let timeObj = null;

    if (isDateValid) {
        const [day, month, year] = date.split('/').map(Number);
        dateObj = new Date(year, month - 1, day); // Month is 0-indexed
    }

    if (isTimeValid) {
        const [hour, minute] = time.split(':').map(Number);
        timeObj = new Date();
        timeObj.setHours(hour, minute, 0, 0);
    }
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
                style={[styles.input, styles.multiline]}
                multiline
                numberOfLines={5}
                value={content}
                onChangeText={(text) => setContent(text)}
            />
            <Text style={styles.label}>Date (dd/mm/yyyy):</Text>
            <TextInput
                style={styles.input}
                value={date}
                onChangeText={(text) => setDate(text)}
            />
            {isDateValid || date === "" ? null : (
                <Text style={styles.errorText}>Invalid date format (dd/mm/yyyy)</Text>
            )}
            <Text style={styles.label}>Time (hh:mm):</Text>
            <TextInput
                style={styles.input}
                value={time}
                onChangeText={(text) => setTime(text)}
            />
            {isTimeValid || time === "" ? null : (
                <Text style={styles.errorText}>Invalid time format (hh:mm)</Text>
            )}
            <Text style={styles.label}>Test Room</Text>
            <TextInput
                style={styles.input}
                value={room}
                onChangeText={(text) => setRoom(text)}
            />
            <TouchableOpacity
                style={[styles.button, { backgroundColor: '#E86A33' }]}
                onPress={() => {
                    if (isDateValid && isTimeValid) {
                        onSubmit(title, content, date, time,room);
                    }
                }}
            >
                <Text style={styles.buttonText}>Submit Memo</Text>
            </TouchableOpacity>
        </View>
    );
};

MemoForm.defaultProps = {
    initValues: { title: "", content: "", date: "", time: "" ,room:""},
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 15,
        backgroundColor: '#F2E3DB',
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
    errorText: {
        color: "red",
        fontSize: 16,
        alignSelf: "center",
        marginTop: 5,
    },
});

export default MemoForm;
