import { Platform, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    alignSelf: "flex-end",
    marginBottom: 32,
    marginTop: Platform.OS === "android" ? 40 : 0,
  },
});
