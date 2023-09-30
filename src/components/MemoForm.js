import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from "react-native";

const MemoForm = ({ onSubmit, initValues }) => {
    const [title, setTitle] = useState(initValues.title);
    const [content, setContent] = useState(initValues.content);
    const [date, setDate] = useState(initValues.date);
    const [time, setTime] = useState(initValues.time);
    const [room, setRoom] = useState(initValues.room);
    const [dayValidError, setDayValidError] = useState(false);
    const [maxDaysInMonth, setMaxDaysInMonth] = useState(null);

    const isDateValid = /^([0-2][0-9]|3[0-1])\/(0[1-9]|1[0-2])\/\d{4}$/.test(date);
    const isTimeValid = /^([01][0-9]|2[0-3]):[0-5][0-9]$/.test(time);

    const isDayValid = () => {
        if (isDateValid) {
            const [day, month, year] = date.split('/').map(Number);
            const maxDays = new Date(year, month, 0).getDate();
            setMaxDaysInMonth(maxDays); // Set max days in month
            const isValid = day <= maxDays;
            setDayValidError(!isValid);
            return isValid;
        }
        setDayValidError(false);
        return false;
    };
    let dateObj = null;
    let timeObj = null;

    if (isDateValid) {
        const [day, month, year] = date.split('/').map(Number);
        dateObj = new Date(year, month - 1, day);
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
            <Text style={styles.label}>Date (DD/MM/YYYY):</Text>
            <TextInput
                style={styles.input}
                value={date}
                onChangeText={(text) => setDate(text)}
            />
            {isDateValid || date === "" ? null : (
                <Text style={styles.errorText}>Invalid date format (DD/MM/YYYY)</Text>
            )}
            {dayValidError && (
                <Text style={styles.errorText}>
                    Invalid day for the selected month and year. Maximum days in month: {maxDaysInMonth}
                </Text>
            )}
            <Text style={styles.label}>Time (HH:MM):</Text>
            <TextInput
                style={styles.input}
                value={time}
                onChangeText={(text) => setTime(text)}
            />
            {isTimeValid || time === "" ? null : (
                <Text style={styles.errorText}>Invalid time format (HH:MM)</Text>
            )}
            <Text style={styles.label}>Exam room:</Text>
            <TextInput
                style={styles.input}
                value={room}
                onChangeText={(text) => setRoom(text)}
            />
            <TouchableOpacity
                style={[styles.button, { backgroundColor: '#445D48' }]}
                onPress={() => {
                    if (isDateValid && isTimeValid && isDayValid()) {
                        onSubmit(title, content, date, time, room);
                    }
                }}
            >
                <Text style={styles.buttonText}>Submit Schedule</Text>
            </TouchableOpacity>
        </View>
    );
};

MemoForm.defaultProps = {
    initValues: { title: "", content: "", date: "", time: "", room: "" },
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#D6CC99',
        padding: 10,
    },
    label: {
        fontSize: 20,
        marginBottom: 5,
        marginLeft: 5,
        fontWeight: 'bold',
    },
    input: {
        fontSize: 18,
        borderWidth: 2,
        borderColor: "#000",
        borderRadius: 10,
        padding: 5,
        paddingLeft: 10,
        margin: 10,
        marginBottom: 15,
        backgroundColor: "#FDE5D4"
    },
    multiline: {
        minHeight: 100,
    },
    button: {
        borderRadius: 15,
        padding: 10,
        alignItems: 'center',
        backgroundColor: '#445D48',
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
