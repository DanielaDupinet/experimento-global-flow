import { StyleSheet } from "react-native";

export default StyleSheet.create({
  root: {
    width: "100%",
    alignItems: "center",
  },
  wrapper: {
    width: "100%",
    gap: 12, // spacing.x3 between top section and grid
  },
  top: {
    flexDirection: "column",
    alignItems: "flex-start",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  navigation: {
    flexDirection: "row",
    alignItems: "center",
    gap: 24,
  },
  navButton: {
    width: 20,
    height: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  weekdayRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  weekdayCell: {
    alignItems: "center",
    justifyContent: "center",
  },
  monthGrid: {
    flexDirection: "column",
    alignItems: "center",
    overflow: "hidden",
  },
  weekRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    overflow: "hidden",
  },
  dayCell: {
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
});
