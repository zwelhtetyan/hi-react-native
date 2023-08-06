import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 70,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
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
  addBtn: {
    backgroundColor: "#2563eb",
    height: 45,
    justifyContent: "center",
    borderRadius: 5,
  },
  todoContainer: {
    marginTop: 30,
  },
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
