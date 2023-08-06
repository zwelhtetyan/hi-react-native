import { Image, StyleSheet, Text, View } from "react-native";

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.logoText}>🗒️ZNOTE</Text>
      <Image style={styles.logo} source={require("../assets/favicon.png")} />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
  },
  logo: {
    width: 35,
    height: 35,
  },
  logoText: {
    fontSize: 20,
    fontWeight: "700",
  },
});
