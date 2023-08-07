import { StyleSheet, Text, TouchableOpacity } from "react-native";

interface AppButtonProps {
  onPress?: () => void;
  title: string;
  style?: { [key: string]: string | number };
}

export default function AppButton({
  onPress,
  title,
  style: resStyle,
}: AppButtonProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      style={{ ...styles.addBtn, ...resStyle }}
      onPress={onPress}
    >
      <Text
        style={{
          ...styles.addBtnText,
          color: (resStyle?.color as string) || "#fff",
        }}
      >
        {title}
      </Text>
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
    fontSize: 15,
    fontWeight: "500",
  },
});
