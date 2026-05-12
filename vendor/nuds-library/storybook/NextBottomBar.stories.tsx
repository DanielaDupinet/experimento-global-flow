import React from "react";
import { Alert, View } from "react-native";
import {
  ArrowUpRightIcon,
  NText,
  NextBottomBar,
  useNuDSTheme,
} from "@nu-design-org/nuds-vibecode-react-native";

export default {
  title: "Components/NextBottomBar",
  component: NextBottomBar,
};

const onPress = (name: string) => () => Alert.alert(name);

export const Default = {
  render: () => (
    <NextBottomBar
      onPress={onPress("Next pressed")}
    />
  ),
};

export const WithDivider = {
  render: () => (
    <NextBottomBar
      scrolled
      onPress={onPress("Next pressed")}
    />
  ),
};

export const Disabled = {
  render: () => (
    <NextBottomBar
      disabled
      scrolled
      onPress={onPress("Next pressed")}
    />
  ),
};

export const WithCustomIcon = {
  render: () => {
    const theme = useNuDSTheme();
    return (
      <NextBottomBar
        scrolled
        onPress={onPress("Custom icon pressed")}
        icon={<ArrowUpRightIcon size={20} color={theme.color.content.onColor} />}
      />
    );
  },
};

export const InContext = {
  render: () => {
    const theme = useNuDSTheme();
    return (
      <View style={{ flex: 1, backgroundColor: theme.color.background.default }}>
        <View
          style={{
            flex: 1,
            padding: theme.spacing[4],
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <NText variant="subtitleMediumStrong">Screen content above</NText>
          <NText variant="labelSmallDefault" tone="secondary">
            Next Bottom Bar stays at the bottom
          </NText>
        </View>
        <NextBottomBar
          scrolled
          onPress={onPress("Continue")}
        />
      </View>
    );
  },
};
