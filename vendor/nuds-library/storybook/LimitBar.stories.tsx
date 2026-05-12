import React from "react";
import { LimitBar } from "@nu-design-org/nuds-vibecode-react-native";

const onPress = () => {
  console.log("[storybook] manage-limit");
};

export default {
  title: "Patterns/LimitBar",
  component: LimitBar
};

export const Default = {
  render: () => <LimitBar availableAmount={1800} totalLimit={5000} onManagePress={onPress} />
};
