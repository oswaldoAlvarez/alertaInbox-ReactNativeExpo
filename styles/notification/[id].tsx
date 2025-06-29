import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  notFoundContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    padding: 24,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  icon: {
    marginBottom: 20,
  },
  title: {
    fontWeight: "bold",
    fontSize: 22,
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    marginBottom: 16,
  },
  date: {
    fontSize: 13,
    marginBottom: 30,
  },
  button: {
    borderWidth: 1,
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 24,
    alignItems: "center",
  },
  textButton: {
    fontWeight: "bold",
    fontSize: 16,
  },
});
