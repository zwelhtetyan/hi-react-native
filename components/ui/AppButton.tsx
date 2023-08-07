import { StyleSheet, Text, TouchableOpacity } from "react-native";

interface AppButtonProps {
  onPress?: () => void;
}

export default function AppButton({ onPress }: AppButtonProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      style={styles.addBtn}
      onPress={onPress}
    >
      <Text style={styles.addBtnText}>Add Todo</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  addBtn: {
    backgroundColor: "#2563eb",
    height: 45,
    justifyContent: "center",
    borderRadius: 5,
    padding: 10,
  },
  addBtnText: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "500",
  },
});
