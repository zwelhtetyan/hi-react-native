import { StyleSheet, Text, View } from "react-native";

interface TodoItemPrpos {
  todoText: string;
}

export default function TodoItem({ todoText }: TodoItemPrpos) {
  return (
    <View style={styles.todoItem}>
      <Text style={styles.todoText}>{todoText}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
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
