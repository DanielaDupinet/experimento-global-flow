import React from "react";
import { View } from "react-native";
import { CircularLoader, LoadingButton } from "@nu-design-org/nuds-vibecode-react-native";

const onPress = (name: string) => () => {
  console.log(`[storybook] ${name}`);
};

export default {
  title: "Components/Feedback"
};

export const Loaders = {
  render: () => (
    <View style={{ flexDirection: "row", alignItems: "center", gap: 12 }}>
      <CircularLoader />
      <CircularLoader size="large" />
      <CircularLoader tone="secondary" />
    </View>
  )
};

export const LoadingButtons = {
  render: () => (
    <View style={{ gap: 12 }}>
      <LoadingButton label="Submit" isLoading onPress={onPress("loading")} />
      <LoadingButton label="Submit" isLoading variant="secondary" onPress={onPress("loading-secondary")} />
    </View>
  )
};
