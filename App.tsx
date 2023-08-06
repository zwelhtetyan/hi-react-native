import { useState } from "react";
import {
  Alert,
  Button,
  Image,
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
        <Button title="Add Todo" color="#242424" onPress={handleAddTodo} />
      </View>

      {/* todos */}
      <View style={styles.todoContainer}>
        {todos.map((todo) => (
          <Text style={styles.todoText} key={todo.id}>
            {todo.todoText}
          </Text>
        ))}
      </View>
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
    borderColor: "#b9bdc1",
    height: 45,
    padding: 10,
    borderRadius: 5,
    flex: 1,
    marginRight: 10,
  },
  todoContainer: {
    marginTop: 30,
  },
  todoText: {
    fontSize: 18,
    height: 40,
    lineHeight: 40,
  },
});
