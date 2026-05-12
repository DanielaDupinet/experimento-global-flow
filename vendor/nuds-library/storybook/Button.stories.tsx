import React from "react";
import { View } from "react-native";
import {
  ArrowBackIcon,
  Box,
  Button,
  ExpandMoreIcon,
  NText
} from "@nu-design-org/nuds-vibecode-react-native";

const onPress = (name: string) => () => {
  console.log(`[storybook] ${name}`);
};

export default {
  title: "Components/Button",
  component: Button,
  args: {
    label: "Continue",
    variant: "primary"
  }
};

export const Variants = {
  render: () => (
    <View style={{ gap: 12 }}>
      <Button label="Primary" variant="primary" onPress={onPress("primary")} />
      <Button label="Secondary" variant="secondary" onPress={onPress("secondary")} />
      <Button label="Ghost" variant="ghost" onPress={onPress("ghost")} />
      <Button label="Destructive" variant="destructive" onPress={onPress("destructive")} />
    </View>
  )
};

export const CompactVariants = {
  render: () => (
    <View style={{ gap: 12 }}>
      <NText variant="labelSmallStrong">Compact (height 40px)</NText>
      <Button label="Primary" variant="primary" compact onPress={onPress("compact-primary")} />
      <Button
        label="Secondary"
        variant="secondary"
        compact
        onPress={onPress("compact-secondary")}
      />
      <Button label="Ghost" variant="ghost" compact onPress={onPress("compact-ghost")} />
      <Button
        label="Destructive"
        variant="destructive"
        compact
        onPress={onPress("compact-destructive")}
      />
    </View>
  )
};

export const Expanded = {
  render: () => (
    <View style={{ gap: 12 }}>
      <NText variant="labelSmallStrong">Expanded (full width)</NText>
      <Button label="Primary" variant="primary" expanded onPress={onPress("expanded-primary")} />
      <Button
        label="Secondary"
        variant="secondary"
        expanded
        onPress={onPress("expanded-secondary")}
      />
      <Button label="Ghost" variant="ghost" expanded onPress={onPress("expanded-ghost")} />
      <Button
        label="Destructive"
        variant="destructive"
        expanded
        onPress={onPress("expanded-destructive")}
      />
    </View>
  )
};

export const ExpandedCompact = {
  render: () => (
    <View style={{ gap: 12 }}>
      <NText variant="labelSmallStrong">Expanded + Compact</NText>
      <Button
        label="Primary"
        variant="primary"
        expanded
        compact
        onPress={onPress("expanded-compact-primary")}
      />
      <Button
        label="Secondary"
        variant="secondary"
        expanded
        compact
        onPress={onPress("expanded-compact-secondary")}
      />
      <Button
        label="Ghost"
        variant="ghost"
        expanded
        compact
        onPress={onPress("expanded-compact-ghost")}
      />
      <Button
        label="Destructive"
        variant="destructive"
        expanded
        compact
        onPress={onPress("expanded-compact-destructive")}
      />
    </View>
  )
};

export const States = {
  render: () => (
    <View style={{ gap: 12 }}>
      <Button label="Enabled" variant="primary" onPress={onPress("enabled")} />
      <Button label="Loading" variant="primary" loading onPress={onPress("loading")} />
      <Button label="Disabled" variant="primary" disabled onPress={onPress("disabled")} />
      <Button
        label="Loading (disabled)"
        variant="primary"
        loading
        disabled
        onPress={onPress("loading-disabled")}
      />
    </View>
  )
};

export const DisabledVariants = {
  render: () => (
    <View style={{ gap: 12 }}>
      <NText variant="labelSmallStrong">All variants disabled</NText>
      <Button label="Primary" variant="primary" disabled />
      <Button label="Secondary" variant="secondary" disabled />
      <Button label="Ghost" variant="ghost" disabled />
      <Button label="Destructive" variant="destructive" disabled />
    </View>
  )
};

export const LoadingVariants = {
  render: () => (
    <View style={{ gap: 12 }}>
      <NText variant="labelSmallStrong">All variants loading</NText>
      <Button label="Primary" variant="primary" loading />
      <Button label="Secondary" variant="secondary" loading />
      <Button label="Ghost" variant="ghost" loading />
      <Button label="Destructive" variant="destructive" loading />
    </View>
  )
};

export const WithIcons = {
  render: () => (
    <View style={{ gap: 12 }}>
      <Button
        label="Back"
        variant="secondary"
        leadingIcon={<ArrowBackIcon size={20} />}
        onPress={onPress("with-leading-icon")}
      />
      <Button
        label="More"
        variant="ghost"
        trailingIcon={<ExpandMoreIcon size={20} />}
        onPress={onPress("with-trailing-icon")}
      />
      <Button
        label="Leading + Trailing"
        variant="primary"
        leadingIcon={<ArrowBackIcon size={20} color="white" />}
        trailingIcon={<ExpandMoreIcon size={20} color="white" />}
        onPress={onPress("both-icons")}
      />
    </View>
  )
};

export const IconOnly = {
  render: () => (
    <View style={{ gap: 12, flexDirection: "row" }}>
      <Button
        iconOnly
        variant="primary"
        icon={<ExpandMoreIcon size={20} color="white" />}
        accessibilityLabel="More options"
        onPress={onPress("icon-only-primary")}
      />
      <Button
        iconOnly
        variant="primary"
        compact
        icon={<ExpandMoreIcon size={20} color="white" />}
        accessibilityLabel="More options compact"
        onPress={onPress("icon-only-primary-compact")}
      />
      <Button
        iconOnly
        variant="secondary"
        icon={<ExpandMoreIcon size={20} />}
        accessibilityLabel="More options secondary"
        onPress={onPress("icon-only-secondary")}
      />
      <Button
        iconOnly
        variant="ghost"
        icon={<ExpandMoreIcon size={20} />}
        accessibilityLabel="More options ghost"
        onPress={onPress("icon-only-ghost")}
      />
    </View>
  )
};

export const OnColor = {
  render: () => (
    <Box surface="primary" style={{ gap: 12, padding: 16, backgroundColor: "#820AD1" }}>
      <NText variant="labelSmallStrong" color="white">
        On Color (on branded surface)
      </NText>
      <Button
        variant="primary"
        label="Primary on color"
        onColor
        onPress={onPress("primary-on-color")}
      />
      <Button
        variant="secondary"
        label="Secondary on color"
        onColor
        onPress={onPress("secondary-on-color")}
      />
      <Button
        variant="ghost"
        label="Ghost on color"
        onColor
        onPress={onPress("ghost-on-color")}
      />
      <Button
        variant="destructive"
        label="Destructive on color"
        onColor
        onPress={onPress("destructive-on-color")}
      />
    </Box>
  )
};
