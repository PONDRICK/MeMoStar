import React from 'react';
import { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { Feather } from "@expo/vector-icons";

const MemberList = ({ navigation }) => {
    const [showmember1, setShowmember1] = useState(false);
    const [showmember2, setShowmember2] = useState(false);
    const [showmember3, setShowmember3] = useState(false);
    const [showmember4, setShowmember4] = useState(false);
    return (
        <ScrollView style={styles.container}>
            <Image
                source={require("../img/IMG_7038.jpg")}
                style={{ width: 160, height: 160, borderRadius: 200, left: 120 }}
            />
            <View style={styles.row}>
                <Text style={styles.container1}>
                    Mr. Sorrawit Nuernuam 6421604927
                </Text>
                <TouchableOpacity onPress={() => setShowmember1(!showmember1)}>
                    <Feather
                        name={showmember1 ? "chevron-up" : "chevron-down"}
                        size={24}
                        color="black"
                    />
                </TouchableOpacity>
            </View>
            {showmember1 && (
                <Text style={styles.writer}>work : 25%  developer (add, delete, edit from old work, add date time and sort)</Text>
            )}
            <Image
                source={require("../img/image.png")}
                style={{ width: 160, height: 160, borderRadius: 200, left: 120 }}
            />
            <View style={styles.row}>
                <Text style={styles.container1}>
                    Mr. Pasin Sangjun     6421600191
                </Text>
                <TouchableOpacity onPress={() => setShowmember2(!showmember2)}>
                    <Feather
                        name={showmember2 ? "chevron-up" : "chevron-down"}
                        size={24}
                        color="black"
                    />
                </TouchableOpacity>
            </View>
            {showmember2 && (
                <Text style={styles.writer}>work : 25% designer designer (Change all design and fix edit for new project)</Text>
            )}
            <Image
                source={require("../img/fox.jpg")}
                style={{ width: 160, height: 160, borderRadius: 200, left: 120 }}
            />
            <View style={styles.row}>
                <Text style={styles.container1}>
                    Mr. Wichayaut Burong  6421602495
                </Text>
                <TouchableOpacity onPress={() => setShowmember3(!showmember3)}>
                    <Feather
                        name={showmember3 ? "chevron-up" : "chevron-down"}
                        size={24}
                        color="black"
                    />
                </TouchableOpacity>
            </View>
            {showmember3 && (
                <Text style={styles.writer}>work : 25% Human Resource (Profile page)</Text>
            )}
            <Image
                source={require("../img/image1.png")}
                style={{ width: 160, height: 160, borderRadius: 200, left: 120 }}
            />
            <View style={styles.row}>
                <Text style={styles.container1}>
                    Mr. Napat Charoinsilp 6421602444
                </Text>
                <TouchableOpacity onPress={() => setShowmember4(!showmember4)}>
                    <Feather
                        name={showmember4 ? "chevron-up" : "chevron-down"}
                        size={24}
                        color="black"
                    />
                </TouchableOpacity>
            </View>
            {showmember4 && (
                <Text style={styles.writer}>work : 25% Human Resource (Profile description)</Text>
            )}
        </ScrollView>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#D6CC99',
        padding: 10,
    },
    container1: {
        fontSize: 20,
        backgroundColor: '#445D48',
        padding: 10,
        color: '#fff',
        borderRadius: 50,
        alignItems: 'center',
        margin: 5,
    },
    row: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 10,

        borderColor: "#dce25b",

    },
    writer: {
        fontSize: 16,
        marginTop: 10,
        backgroundColor: "#dce25b",
        padding: 10,
        borderRadius: 50,
    },
});


export default MemberList;
