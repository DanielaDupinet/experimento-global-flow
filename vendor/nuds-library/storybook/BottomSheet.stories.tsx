import React, { useState } from "react";
import { View } from "react-native";
import { BottomSheet, Button, NText, useNuDSTheme } from "@nu-design-org/nuds-vibecode-react-native";

export default {
  title: "Components/BottomSheet",
  component: BottomSheet
};

export const Default = {
  render: () => {
    const [visible, setVisible] = useState(false);
    const theme = useNuDSTheme();
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center", padding: 32 }}>
        <Button label="Open Bottom Sheet" onPress={() => setVisible(true)} />
        <BottomSheet
          visible={visible}
          onClose={() => setVisible(false)}
          title="Screen Title"
        >
          <View style={{ padding: theme.spacing[4], gap: theme.spacing[3] }}>
            <NText variant="labelMediumStrong">Bottom Sheet Content</NText>
            <NText variant="labelSmallDefault" tone="secondary">
              This is a reusable bottom sheet component. Tap the overlay or the
              close button to dismiss.
            </NText>
          </View>
        </BottomSheet>
      </View>
    );
  }
};

export const SubtleTone = {
  name: "Subtle Tone",
  render: () => {
    const [visible, setVisible] = useState(false);
    const theme = useNuDSTheme();
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center", padding: 32 }}>
        <Button label="Open Subtle Sheet" onPress={() => setVisible(true)} />
        <BottomSheet
          visible={visible}
          onClose={() => setVisible(false)}
          title="Subtle Background"
          tone="subtle"
        >
          <View style={{ padding: theme.spacing[4], gap: theme.spacing[3] }}>
            <NText variant="labelMediumStrong">Subtle tone</NText>
            <NText variant="labelSmallDefault" tone="secondary">
              This variant uses the secondary background color.
            </NText>
          </View>
        </BottomSheet>
      </View>
    );
  }
};

export const WithHandle = {
  name: "With Handle",
  render: () => {
    const [visible, setVisible] = useState(false);
    const theme = useNuDSTheme();
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center", padding: 32 }}>
        <Button label="Open with Handle" onPress={() => setVisible(true)} />
        <BottomSheet
          visible={visible}
          onClose={() => setVisible(false)}
          title="Draggable Sheet"
          showHandle
        >
          <View style={{ padding: theme.spacing[4], gap: theme.spacing[3] }}>
            <NText variant="labelMediumStrong">Drag to dismiss</NText>
            <NText variant="labelSmallDefault" tone="secondary">
              Drag the handle or header downward to close this sheet.
            </NText>
          </View>
        </BottomSheet>
      </View>
    );
  }
};

export const NoActions = {
  name: "No Action Icons",
  render: () => {
    const [visible, setVisible] = useState(false);
    const theme = useNuDSTheme();
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center", padding: 32 }}>
        <Button label="Open Minimal Sheet" onPress={() => setVisible(true)} />
        <BottomSheet
          visible={visible}
          onClose={() => setVisible(false)}
          title="Simple Sheet"
          show1stAction={false}
          showHandle
        >
          <View style={{ padding: theme.spacing[4], gap: theme.spacing[3] }}>
            <NText variant="labelSmallDefault" tone="secondary">
              Close button only, no trailing action icons.
            </NText>
          </View>
        </BottomSheet>
      </View>
    );
  }
};

export const TallContent = {
  name: "Tall Content",
  render: () => {
    const [visible, setVisible] = useState(false);
    const theme = useNuDSTheme();
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center", padding: 32 }}>
        <Button label="Open Tall Sheet" onPress={() => setVisible(true)} />
        <BottomSheet
          visible={visible}
          onClose={() => setVisible(false)}
          title="Long Content"
          showHandle
        >
          <View style={{ padding: theme.spacing[4], gap: theme.spacing[4] }}>
            {Array.from({ length: 8 }, (_, i) => (
              <View
                key={i}
                style={{
                  height: 56,
                  borderRadius: theme.radius.lg,
                  backgroundColor: theme.color.surface.subtle,
                  justifyContent: "center",
                  paddingHorizontal: theme.spacing[4],
                }}
              >
                <NText variant="labelSmallDefault" tone="secondary">
                  Item {i + 1}
                </NText>
              </View>
            ))}
          </View>
        </BottomSheet>
      </View>
    );
  }
};
