import { useState } from "react";
import {
  Alert,
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import type { Todo as TodoType } from "./types/todo";
import { Todo } from "./utils/todo";

export default function App() {
  const [todos, setTodos] = useState<TodoType[]>([]);
  const [todo, setTodo] = useState("");

  const handleInputChange = (todoText: string) => {
    setTodo(todoText);
  };

  const handleAddTodo = () => {
    const newTodo = new Todo(todo);

    if (!newTodo.todoText.trim().length)
      return Alert.alert("Oops!", "Todo can't be blank!");

    setTodos((prevTodos) => [newTodo, ...prevTodos]);
    setTodo("");
  };

  return (
    <View style={styles.container}>
      {/* header */}
      <View style={styles.header}>
        <Text style={styles.logoText}>📝NOTE</Text>
        <Image style={styles.logo} source={require("./assets/favicon.png")} />
      </View>

      {/* input */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={todo}
          onChangeText={handleInputChange}
          placeholder="Add new todo..."
        />
        <View style={styles.addBtn}>
          <Button title="Add Todo" color="#ffffff" onPress={handleAddTodo} />
        </View>
      </View>

      {/* todos */}
      <ScrollView style={styles.todoContainer}>
        {todos.map((todo) => (
          <View style={styles.todoItem} key={todo.id}>
            <Text style={styles.todoText}>{todo.todoText}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 70,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  header: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
  },
  logo: {
    width: 35,
    height: 35,
  },
  logoText: {
    fontSize: 20,
    fontWeight: "700",
  },
  inputContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 30,
  },
  input: {
    borderWidth: 1,
    borderColor: "#cbd5e1",
    height: 45,
    padding: 10,
    borderRadius: 5,
    flex: 1,
    marginRight: 10,
  },
  addBtn: {
    backgroundColor: "#2563eb",
    height: 45,
    justifyContent: "center",
    borderRadius: 5,
  },
  todoContainer: {
    marginTop: 30,
  },
  todoItem: {
    height: 50,
    backgroundColor: "#f1f5f9",
    borderRadius: 5,
    padding: 10,
    paddingHorizontal: 20,
    justifyContent: "center",
    marginBottom: 10,
  },
  todoText: {
    fontSize: 18,
  },
});
