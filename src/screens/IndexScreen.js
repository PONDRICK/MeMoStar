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
            "Confirm",
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
        // Show confirmation dialog
        Alert.alert(
            "Delete All Memos",
            "Are you sure you want to delete all memos?",
            [
                {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel to delete all memos'),
                    style: 'cancel'
                },
                {
                    text: 'Delete',
                    onPress: () => {
                        // Delete all memos
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
            <TouchableOpacity // Change to TouchableOpacity for better styling
                style={[styles.button, { backgroundColor: '#E86A33' }]} // Set button style and color
                onPress={() => {
                    navigation.navigate("StarredMemos", { starredMemos });
                }}
            >
                <Text style={styles.buttonText}>Show Favorite</Text>
            </TouchableOpacity>

           <TouchableOpacity // Change to TouchableOpacity for better styling
                style={[styles.button, { backgroundColor: '#E86A33' }]} // Set button style and color
                onPress={deleteAllMemos}
            >
                <Text style={styles.buttonText}>Delete All Memos</Text>
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
                                    {/* Use conditional rendering to toggle between star icons */}
                                    {starredMemos.includes(item.id) ?
                                        <AntDesign name="star" size={24} color="black" /> :
                                        <AntDesign name="staro" size={24} color="black" />
                                    }
                                </TouchableOpacity>
                                <Text style={[styles.title]} color='#fff'>
                                    {item.title}-{item.id}
                                </Text>
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
        backgroundColor: "#F2E3DB",
        paddingHorizontal: 15,
        paddingTop: 10,
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "#F2E3DB",
        margin: 15,
        paddingVertical: 10,
        paddingHorizontal: 15,
        marginVertical: 10,
        alignItems: 'center',
        borderRadius: 10,
        borderWidth: 2,
        borderColor: "#E86A33",
    },
    title: {
        fontSize: 18,
    },
    button: {
        borderRadius: 15,
        padding: 10,
        marginVertical: 10,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default IndexScreen;