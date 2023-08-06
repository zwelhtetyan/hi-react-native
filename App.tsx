import { useState } from "react";
import { Alert, FlatList, StyleSheet, View } from "react-native";
import type { Todo as TodoType } from "./types/todo";
import { Todo } from "./utils/todo";
import TodoItem from "./components/TodoItem";
import TodoInput from "./components/TodoInput";
import Header from "./components/Header";

export default function App() {
  const [todos, setTodos] = useState<TodoType[]>([]);

  const handleAddTodo = (todo: string) => {
    const newTodo = new Todo(todo);

    if (!newTodo.todoText.trim().length)
      return Alert.alert("Oops!", "Todo can't be blank!");

    setTodos((prevTodos) => [newTodo, ...prevTodos]);
  };

  return (
    <View style={styles.container}>
      <Header />

      <TodoInput onAddTodo={handleAddTodo} />

      {/* All todos */}
      <FlatList
        data={todos}
        renderItem={({ item: todo }) => <TodoItem todoText={todo.todoText} />}
        style={styles.todoContainer}
        keyExtractor={(item) => item.id.toString()}
      />
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
  todoContainer: {
    marginTop: 30,
  },
});
