import React from "react";
import { View } from "react-native";
import { BellIcon, CloseIcon, NText, SettingsIcon, TopBar } from "@nu-design-org/nuds-vibecode-react-native";

const onPress = (name: string) => () => {
  console.log(`[storybook] ${name}`);
};

export default {
  title: "Components/TopBar",
  component: TopBar
};

export const Tones = {
  render: () => (
    <View style={{ gap: 12 }}>
      <TopBar title="Default TopBar" variant="default" onBackPress={onPress("back-default")} />
      <TopBar title="Subtle TopBar" variant="dropdown" background="subtle" onBackPress={onPress("back-subtle")} />
      <TopBar
        title="Modal TopBar"
        variant="modal-dropdown"
        trailing={<CloseIcon />}
        onBackPress={onPress("back-inverted")}
        show2ndAction
      />
    </View>
  )
};

export const TitleCentering = {
  name: "Title Centering",
  render: () => (
    <View style={{ gap: 16 }}>
      <NText variant="labelXSmallDefault" tone="secondary" style={{ paddingHorizontal: 8 }}>
        Back + 0 trailing actions
      </NText>
      <TopBar
        title="Centered Title"
        show1stAction={false}
        show2ndAction={false}
        onBackPress={onPress("back")}
      />

      <NText variant="labelXSmallDefault" tone="secondary" style={{ paddingHorizontal: 8 }}>
        Back + 1 trailing action
      </NText>
      <TopBar
        title="Centered Title"
        show1stAction
        show2ndAction={false}
        trailing={<BellIcon size={20} opacity={0.62} />}
        onBackPress={onPress("back")}
        on1stActionPress={onPress("bell")}
      />

      <NText variant="labelXSmallDefault" tone="secondary" style={{ paddingHorizontal: 8 }}>
        Back + 2 trailing actions
      </NText>
      <TopBar
        title="Centered Title"
        show1stAction
        show2ndAction
        trailing={<BellIcon size={20} opacity={0.62} />}
        trailingSecond={<SettingsIcon size={20} opacity={0.62} />}
        onBackPress={onPress("back")}
        on1stActionPress={onPress("bell")}
        on2ndActionPress={onPress("settings")}
      />

      <NText variant="labelXSmallDefault" tone="secondary" style={{ paddingHorizontal: 8 }}>
        Title + 2 trailing actions
      </NText>
      <TopBar
        title="Centered Title"
        show1stAction
        show2ndAction
        trailing={<BellIcon size={20} opacity={0.62} />}
        trailingSecond={<SettingsIcon size={20} opacity={0.62} />}
        onBackPress={onPress("back")}
        on1stActionPress={onPress("bell")}
        on2ndActionPress={onPress("settings")}
      />
    </View>
  )
};
