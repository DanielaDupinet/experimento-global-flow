import { StyleSheet } from "react-native";

export default StyleSheet.create({
  root: {
    alignItems: "flex-start",
    justifyContent: "center",
    flexDirection: "row",
  },
  wrapper: {
    flexDirection: "row",
    alignItems: "center",
    maxWidth: 375,
    flexShrink: 0,
  },
  disabled: {
    opacity: 0.5,
  },
});
