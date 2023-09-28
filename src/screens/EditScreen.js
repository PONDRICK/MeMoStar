import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Context } from "../context/BlogContext";
import MemoForm from "../components/MemoForm";
const EditScreen = ({ route,navigation }) => {
    const { state,editMemo } = useContext(Context);
    const id = route.params.id;

    const memo = state.find((memo)=>memo.id===id);
    //console.log(memo);
    return (
        <View style={styles.container}>
            <Text>{id}</Text>
            <MemoForm initValues = {{title:memo.title,content:memo.content}}
            onSubmit={(title,content)=>{
                editMemo(id,title,content)
                //navigation.navigate("Index");
                navigation.pop();
            }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
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