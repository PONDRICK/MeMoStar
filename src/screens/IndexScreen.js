import React, { useContext, useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    Button,
    TouchableOpacity,
    Alert
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { Context } from "../context/BlogContext";
import { AntDesign } from '@expo/vector-icons';
const IndexScreen = ({ navigation }) => {
    const { state, addMemo, delMemo } = useContext(Context);
    const [starredMemos, setStarredMemos] = useState([]);
    const formatDate = (date, time) => {
        const [day, month, year] = date.split('/');
        const [hours, minutes] = time.split(':');
        return new Date(year, month - 1, day, hours, minutes);
    };
    const sortedMemos = [...state].sort((a, b) => {
        const dateA = formatDate(a.date, a.time);
        const dateB = formatDate(b.date, b.time);
        return dateA - dateB;
    });
    const confirmDelete = (id) => {
        return Alert.alert(
            "Delete?",
            "Are you sure you want to delete?",
            [
                {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel to delete'),
                    style: 'cancel'
                },
                {
                    text: 'Confirm',
                    onPress: () => delMemo(id)
                }
            ],
            { cancelable: false }
        )
    }
    const toggleStar = (id) => {
        const isStarred = starredMemos.includes(id);
        if (isStarred) {
            setStarredMemos(starredMemos.filter(item => item !== id));
        } else {
            setStarredMemos([...starredMemos, id]);
        }
    }
    const deleteAllMemos = () => {
        Alert.alert(
            "Delete All Final Exam Schedules?",
            "Are you sure you want to delete all final exam schedules?",
            [
                {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel to delete all final exam schedules'),
                    style: 'cancel'
                },
                {
                    text: 'Delete',
                    onPress: () => {
                        state.forEach((memo) => {
                            delMemo(memo.id);
                        });
                    }
                }
            ],
            { cancelable: false }
        );
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={[styles.button, { backgroundColor: '#445D48' }]}
                onPress={() => {
                    navigation.navigate("StarredMemos", { starredMemos });
                }}
            >
                <Text style={styles.buttonText}>Show Final Exam Completed</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={[styles.button, { backgroundColor: '#445D48' }]}
                onPress={deleteAllMemos}
            >
                <Text style={styles.buttonText}>Delete All Final Exam Schedules</Text>
            </TouchableOpacity>
            <FlatList
                data={sortedMemos}
                keyExtractor={(memo) => memo.title}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity
                            onPress={() => navigation.navigate("Show", { id: item.id })}
                        >
                            <View style={styles.row}>
                                <TouchableOpacity onPress={() => toggleStar(item.id)}>
                                    {starredMemos.includes(item.id) ?
                                        <AntDesign name="star" size={24} color="black" /> :
                                        <AntDesign name="staro" size={24} color="black" />
                                    }
                                </TouchableOpacity>
                                <View>
                                    <Text style={[styles.title]} color='#fff'>
                                        {item.title}
                                    </Text>
                                    <Text>Date :{item.date}</Text>
                                    <Text>Time : {item.time}</Text>
                                    <Text>Test Room: {item.room}</Text>
                                </View>
                                <TouchableOpacity onPress={() => confirmDelete(item.id)}>
                                    <Feather name="trash-2" size={24} color="black" />
                                </TouchableOpacity>
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
        paddingHorizontal: 15,
        paddingTop: 10,
    },
    row: {
        flexDirection:"row",
        justifyContent: "space-between",
        backgroundColor: "#fff",
        marginVertical: 10,
        padding: 10,
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
        fontSize: 16,
        fontWeight: "bold",
        color: '#444',
    },
    button: {
        borderRadius: 5,
        padding: 10,
        marginVertical: 10,
        alignItems: 'center',
        backgroundColor: '#445D48',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default IndexScreen;