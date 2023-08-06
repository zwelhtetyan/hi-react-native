import { FlatList, StyleSheet, Text, View } from "react-native";
import { Todo } from "../types/todo";
import TodoItem from "./TodoItem";

interface Todos {
  todos: Todo[];
}

export default function TodoContainer({ todos }: Todos) {
  return (
    <>
      {todos.length > 0 ? (
        <FlatList
          data={todos}
          renderItem={({ item: todo }) => <TodoItem todoText={todo.todoText} />}
          style={styles.todoContainer}
          keyExtractor={(item) => item.id.toString()}
        />
      ) : (
        <View style={styles.noTodoTextContainer}>
          <Text style={styles.noTodoText}>Add your very first Todo 🤩</Text>
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  todoContainer: {
    marginTop: 30,
  },
  noTodoTextContainer: {
    marginTop: 50,
    alignItems: "center",
  },
  noTodoText: {
    fontSize: 16,
  },
});
