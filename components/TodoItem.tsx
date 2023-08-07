import { Alert, Pressable, StyleSheet, Text } from "react-native";
import type { Todo } from "../types/todo";

interface TodoItemProps {
  todo: Todo;
  onDeleteTodo: (id: number) => void;
}

export default function TodoItem({ todo, onDeleteTodo }: TodoItemProps) {
  const showAlert = () =>
    Alert.alert("Delete Todo", "Are you sure you want to delete?", [
      { text: "Cancel", style: "cancel" },
      { text: "Delete", onPress: () => onDeleteTodo(todo.id) },
    ]);

  return (
    <Pressable onLongPress={showAlert} style={styles.todoItem}>
      <Text style={styles.todoText}>{todo.todoText}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  todoItem: {
    minHeight: 50,
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
