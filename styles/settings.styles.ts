import { Platform, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    marginTop: 12
  },
  buttonBack: {
    paddingLeft: 12,
    paddingTop: Platform.OS === "android" ? 32 : 0,
    paddingBottom: Platform.OS === "ios" ? 12 : 10,
    width: 50
  },
  langTitleContainer: {
    marginLeft: 8,
  },
  langTitleText: {
    fontSize: 16,
  },
  lang: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 16,
  },
  toggleRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
