import { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import AppButton from "./ui/AppButton";

interface TodoInputProps {
  onAddTodo: (todo: string) => void;
}

export default function TodoInput({ onAddTodo }: TodoInputProps) {
  const [todo, setTodo] = useState("");

  const handleInputChange = (todoText: string) => {
    setTodo(todoText);
  };

  const handleAddTodo = () => {
    onAddTodo(todo);
    setTodo("");
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        value={todo}
        onChangeText={handleInputChange}
        placeholder="Add new todo..."
      />
      <AppButton onPress={handleAddTodo} />
    </View>
  );
}

const styles = StyleSheet.create({
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
});
