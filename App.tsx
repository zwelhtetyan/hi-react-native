import { useState } from "react";
import { Alert, StyleSheet, View } from "react-native";
import type { Todo as TodoType } from "./types/todo";
import { Todo } from "./utils/todo";
import TodoInput from "./components/TodoInput";
import Header from "./components/Header";
import TodoContainer from "./components/TodoContainer";

export default function App() {
  const [todos, setTodos] = useState<TodoType[]>([]);

  const handleAddTodo = (todo: string) => {
    const newTodo = new Todo(todo);

    if (!newTodo.todoText.trim().length)
      return Alert.alert("Oops!", "Todo can't be blank!");

    setTodos((prevTodos) => [newTodo, ...prevTodos]);
  };

  const handleDeleteTodo = (id: number) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return (
    <View style={styles.container}>
      <Header />
      <TodoInput onAddTodo={handleAddTodo} />
      <TodoContainer todos={todos} handleDeleteTodo={handleDeleteTodo} />
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
});
