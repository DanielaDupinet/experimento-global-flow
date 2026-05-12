import { StyleSheet } from "react-native";

export default StyleSheet.create({
  /* ---------- FilterBar ---------- */
  bar: {
    flexDirection: "row",
    alignItems: "center",
  },

  /* ---------- FilterChip ---------- */
  chipOuter: {
    height: 48,
    justifyContent: "center",
    flexShrink: 0,
  },
  chipFill: {
    flex: 1,
  },
  chip: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: 40,
    minWidth: 40,
  },
  chipPressable: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  chipWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  chipLeading: {
    marginRight: 4,
  },
  chipTrailing: {
    alignItems: "center",
    justifyContent: "center",
  },
  disabled: {
    opacity: 0.5,
  },

  /* ---------- Clear Filters Button ---------- */
  clearButton: {
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 16,
    borderRadius: 64,
  },
});
