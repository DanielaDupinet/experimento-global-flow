import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  root: {
    position: "relative"
  },
  alignLeft: {
    alignItems: "flex-start"
  },
  alignCenter: {
    alignItems: "center"
  },
  alignRight: {
    alignItems: "flex-end"
  },
  arrowWrapperBase: {
    width: 64,
    height: 8
  },
  arrowWrapperCenter: {
    alignItems: "center"
  },
  label: {
    textAlign: "center"
  }
});

export default styles;
