import React, { useState } from "react";
import { View } from "react-native";
import { ActionSheet, Button, SettingsIcon, CashbackIcon, CheckIcon } from "@nu-design-org/nuds-vibecode-react-native";

export default {
  title: "Patterns/ActionSheet",
  component: ActionSheet
};

export const Default = {
  render: () => {
    const [visible, setVisible] = useState(false);
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center", padding: 32 }}>
        <Button label="Open Action Sheet" onPress={() => setVisible(true)} />
        <ActionSheet
          visible={visible}
          onClose={() => setVisible(false)}
          title="More actions"
          actions={[
            { key: "pay", label: "Pay bill", icon: <CheckIcon size={20} />, onPress: () => console.log("[storybook] pay") },
            { key: "cashback", label: "View cashback", icon: <CashbackIcon size={20} />, onPress: () => console.log("[storybook] cashback") },
            { key: "settings", label: "Settings", icon: <SettingsIcon size={20} />, onPress: () => console.log("[storybook] settings") }
          ]}
        />
      </View>
    );
  }
};
