import { StyleSheet, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import IndexScreen from "./src/screens/IndexScreen";
import { Provider } from "./src/context/BlogContext";
import ShowScreen from "./src/screens/ShowScreen";
import { Feather, Entypo } from "@expo/vector-icons";
import CreateScreen from "./src/screens/CreateScreen";
import EditScreen from "./src/screens/EditScreen";
import StarredMemosScreen from "./src/screens/StarredMemosScreen";
const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <Provider>
            <NavigationContainer>
                <Stack.Navigator
                    screenOptions={{
                        headerTitle: "Final Exam Schedule 📝",
                        headerStyle: { backgroundColor: "#001524" },
                        headerTintColor: "#fff",
                    }}
                >
                    <Stack.Screen
                        name="Index"
                        component={IndexScreen}
                        options={({ navigation }) => ({
                            headerRight: () => (
                                <TouchableOpacity onPress={() => navigation.navigate("Create")}>
                                    <Feather name="plus" size={30} color="white" />
                                </TouchableOpacity>
                            ),
                        })}
                    />
                    <Stack.Screen name="Create" component={CreateScreen} />
                    <Stack.Screen name="Edit" component={EditScreen} />
                    <Stack.Screen name="StarredMemos" component={StarredMemosScreen} />
                    <Stack.Screen
                        name="Show"
                        component={ShowScreen}
                        options={({ navigation, route }) => ({
                            headerRight: () => (
                                <TouchableOpacity
                                    onPress={() =>
                                        navigation.navigate("Edit", {
                                            id: route.params.id,
                                        })
                                    }
                                >
                                    <Entypo name="pencil" size={30} color="white" />
                                </TouchableOpacity>
                            ),
                        })}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});

