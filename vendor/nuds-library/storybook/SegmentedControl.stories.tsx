import React, { useState } from "react";
import { View } from "react-native";
import {
  SegmentedControl,
  useNuDSTheme,
  PlaceholderIcon,
} from "@nu-design-org/nuds-vibecode-react-native";
import type { Meta, StoryObj } from "@storybook/react-native";
import type { SegmentedControlSegment } from "@nu-design-org/nuds-vibecode-react-native";

type SegmentType = "label" | "icon" | "icon+label";

type PlaygroundProps = {
  type: SegmentType;
  options: number;
  size: "standard" | "small";
  disabled: boolean;
  notificationDot: boolean;
};

const LABELS = ["Label", "Label", "Label", "Label"];

function buildSegments(
  type: SegmentType,
  count: number,
  notificationDot: boolean,
): SegmentedControlSegment[] {
  return Array.from({ length: count }, (_, i) => {
    const key = String(i);
    const showIcon = type === "icon" || type === "icon+label";
    const showLabel = type === "label" || type === "icon+label";
    return {
      key,
      label: showLabel ? LABELS[i] : undefined,
      icon: showIcon ? <PlaceholderIcon size={20} /> : undefined,
      notificationDot: i === 0 ? notificationDot : false,
    };
  });
}

const Playground = ({ type, options, size, disabled, notificationDot }: PlaygroundProps) => {
  const [selectedKey, setSelectedKey] = useState("0");
  const theme = useNuDSTheme();
  const segments = buildSegments(type, options, notificationDot);
  const effectiveSize = type === "icon" ? size : "standard";

  return (
    <View style={{ paddingHorizontal: theme.spacing[4], paddingBottom: theme.spacing[5] }}>
      <SegmentedControl
        segments={segments}
        selectedKey={selectedKey}
        onSelect={setSelectedKey}
        size={effectiveSize}
        disabled={disabled}
      />
    </View>
  );
};

const meta: Meta<typeof Playground> = {
  title: "Components/SegmentedControl",
  component: Playground,
  argTypes: {
    type: {
      control: { type: "select" },
      options: ["label", "icon", "icon+label"],
    },
    options: {
      control: { type: "select" },
      options: [2, 3, 4],
    },
    size: {
      control: { type: "select" },
      options: ["standard", "small"],
    },
    disabled: {
      control: { type: "boolean" },
    },
    notificationDot: {
      control: { type: "boolean" },
    },
  },
  args: {
    type: "label",
    options: 2,
    size: "standard",
    disabled: false,
    notificationDot: false,
  },
};
export default meta;

type Story = StoryObj<typeof Playground>;

export const Default: Story = {};

export const IconVariant: Story = {
  args: { type: "icon" },
};

export const IconLabelVariant: Story = {
  args: { type: "icon+label" },
};

export const SmallSize: Story = {
  args: { type: "icon", size: "small" },
};

export const ThreeOptions: Story = {
  args: { options: 3 },
};

export const FourOptions: Story = {
  args: { options: 4 },
};

export const DisabledState: Story = {
  args: { disabled: true },
};

export const WithNotificationDot: Story = {
  args: { notificationDot: true },
};
