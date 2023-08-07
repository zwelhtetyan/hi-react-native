import { useState } from "react";
import { Modal, StyleSheet, TextInput, View } from "react-native";
import AppButton from "./ui/AppButton";

interface TodoInputProps {
  onAddTodo: (todo: string) => void;
  modalVisible: boolean;
  closeModal: () => void;
}

export default function TodoInput({
  onAddTodo,
  modalVisible,
  closeModal,
}: TodoInputProps) {
  const [todo, setTodo] = useState("");

  const handleInputChange = (todoText: string) => {
    setTodo(todoText);
  };

  const handleAddTodo = () => {
    onAddTodo(todo);
    setTodo("");
    closeModal();
  };

  return (
    <Modal visible={modalVisible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={todo}
          onChangeText={handleInputChange}
          placeholder="Add new todo..."
        />

        <View style={styles.buttonContainer}>
          <AppButton
            title="Back"
            style={{ backgroundColor: "#f1f5f9", color: "#000000" }}
            onPress={closeModal}
          />
          <AppButton title="Add Todo" onPress={handleAddTodo} />
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
    padding: 20,
  },
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#cbd5e1",
    height: 45,
    padding: 10,
    borderRadius: 5,
    marginRight: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    gap: 15,
    marginTop: 20,
  },
});
