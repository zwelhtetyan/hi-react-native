import { useState } from "react";
import {
  Alert,
  Button,
  FlatList,
  Image,
  Text,
  TextInput,
  View,
} from "react-native";
import type { Todo as TodoType } from "./types/todo";
import { Todo } from "./utils/todo";
import { styles } from "./style";

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
        <Text style={styles.logoText}>🗒️ZNOTE</Text>
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
      <FlatList
        data={todos}
        renderItem={({ item: todo }) => (
          <View style={styles.todoItem}>
            <Text style={styles.todoText}>{todo.todoText}</Text>
          </View>
        )}
        style={styles.todoContainer}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}
