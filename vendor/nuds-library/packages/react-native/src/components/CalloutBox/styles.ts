import { StyleSheet } from "react-native";

export default StyleSheet.create({
  outer: {
    alignItems: "center",
    width: "100%",
  },
  wrapper: {
    width: "100%",
    overflow: "hidden",
  },
  container: {
    width: "100%",
  },
  content: {
    gap: 8,
    overflow: "hidden",
  },
  textBox: {
    width: "100%",
  },
  actions: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  dismissButton: {
    position: "absolute",
    top: 8,
    right: 8,
    width: 48,
    height: 48,
    alignItems: "center",
    justifyContent: "center",
  },
});
