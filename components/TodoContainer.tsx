import { FlatList, StyleSheet, Text, View } from "react-native";
import { Todo } from "../types/todo";
import TodoItem from "./TodoItem";
import AppButton from "./ui/AppButton";

interface Todos {
  todos: Todo[];
  handleDeleteTodo: (id: number) => void;
  openModal: () => void;
}

export default function TodoContainer({
  todos,
  handleDeleteTodo,
  openModal,
}: Todos) {
  return (
    <>
      {todos.length > 0 ? (
        <>
          <View style={{ alignItems: "center" }}>
            <AppButton
              title="Add Todo"
              style={{ marginTop: 50 }}
              onPress={openModal}
            />
          </View>
          <FlatList
            data={todos}
            renderItem={({ item: todo }) => (
              <TodoItem todo={todo} onDeleteTodo={handleDeleteTodo} />
            )}
            style={styles.todoContainer}
            keyExtractor={(item) => item.id.toString()}
          />
        </>
      ) : (
        <View style={styles.noTodoTextContainer}>
          <Text style={styles.noTodoText}>Add your very first Todo 📝🤩</Text>
          <View style={{ alignItems: "center" }}>
            <AppButton
              title="Add Todo"
              style={{ marginTop: 20 }}
              onPress={openModal}
            />
          </View>
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
    fontWeight: "500",
  },
});
