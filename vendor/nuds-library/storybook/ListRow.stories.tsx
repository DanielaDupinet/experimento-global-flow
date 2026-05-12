import React from "react";
import { View } from "react-native";
import {
  ListRow,
  Badge,
  SettingsIcon,
  CashbackIcon,
  CheckIcon,
  CardIcon,
  LinkIcon,
  LockIcon,
  useNuDSTheme,
} from "@nu-design-org/nuds-vibecode-react-native";

const onPress = (name: string) => () => {
  console.log(`[storybook] ${name}`);
};

export default {
  title: "Components/ListRow",
  component: ListRow,
};

/* ── Basic ── */

export const Default = {
  render: () => (
    <ListRow
      label="Primary label"
      leading={<SettingsIcon size={20} />}
      onPress={onPress("settings")}
    />
  ),
};

export const WithChevron = {
  render: () => (
    <ListRow
      label="Navigate somewhere"
      leading={<CardIcon size={20} />}
      showChevron
      onPress={onPress("navigate")}
    />
  ),
};

export const WithDescription = {
  render: () => (
    <ListRow
      label="Primary label"
      description="This is a description that provides more context"
      leading={<SettingsIcon size={20} />}
      showChevron
      onPress={onPress("description")}
    />
  ),
};

/* ── Secondary content ── */

export const WithSecondaryLabel = {
  render: () => (
    <ListRow
      label="Primary label"
      secondaryLabel="$1,234.56"
      leading={<CashbackIcon size={20} />}
      showChevron
      onPress={onPress("secondary")}
    />
  ),
};

export const WithSecondaryAndDescription = {
  render: () => (
    <ListRow
      label="Primary label"
      description="Description text"
      secondaryLabel="$1,234.56"
      secondaryDescription="Yesterday"
      leading={<CardIcon size={20} />}
      showChevron
      onPress={onPress("full")}
    />
  ),
};

/* ── Trailing slots ── */

export const WithBadgeTrailing = {
  render: () => (
    <ListRow
      label="Rewards"
      description="You have unclaimed rewards"
      leading={<CashbackIcon size={20} />}
      trailing={<Badge label="New" color="accent" />}
      onPress={onPress("badge")}
    />
  ),
};

/* ── Compact ── */

export const Compact = {
  render: () => (
    <ListRow
      label="Compact row"
      leading={<SettingsIcon size={20} />}
      showChevron
      compact
      onPress={onPress("compact")}
    />
  ),
};

/* ── Inverted labels ── */

export const InvertedLabels = {
  render: () => {
    const theme = useNuDSTheme();
    return (
      <ListRow
        label="From"
        description="Spending balance"
        invertLabels
        leading={<CashbackIcon size={20} color={theme.color.content.default} />}
        showChevron
        onPress={onPress("inverted")}
      />
    );
  },
};

export const InvertedLabelsComparison = {
  render: () => {
    const theme = useNuDSTheme();
    return (
      <View style={{ gap: theme.spacing[2] }}>
        <ListRow
          label="From"
          description="Spending balance"
          leading={<CashbackIcon size={20} color={theme.color.content.default} />}
          showChevron
          onPress={onPress("default")}
        />
        <ListRow
          label="From"
          description="Spending balance"
          invertLabels
          leading={<CashbackIcon size={20} color={theme.color.content.default} />}
          showChevron
          onPress={onPress("inverted")}
        />
      </View>
    );
  },
};

/* ── States ── */

export const Disabled = {
  render: () => (
    <ListRow
      label="Disabled action"
      leading={<LockIcon size={20} />}
      showChevron
      disabled
      onPress={onPress("disabled")}
    />
  ),
};

export const Loading = {
  render: () => (
    <ListRow
      label="Processing…"
      leading={<LinkIcon size={20} />}
      loading
      onPress={onPress("loading")}
    />
  ),
};

/* ── List with dividers ── */

export const ListWithDividers = {
  render: () => {
    const theme = useNuDSTheme();
    return (
      <View
        style={{
          borderWidth: 1,
          borderColor: theme.color.border.default,
          borderRadius: theme.radius.xl,
          overflow: "hidden",
        }}
      >
        <ListRow
          label="Pay bill"
          description="Due Feb 15"
          secondaryLabel="$2,450.00"
          leading={<CheckIcon size={20} color={theme.color.content.default} />}
          showChevron
          showDivider
          onPress={onPress("pay")}
        />
        <ListRow
          label="View cashback"
          description="This month"
          secondaryLabel="$12.30"
          leading={<CashbackIcon size={20} color={theme.color.content.default} />}
          showChevron
          showDivider
          onPress={onPress("cashback")}
        />
        <ListRow
          label="Card settings"
          leading={<SettingsIcon size={20} color={theme.color.content.default} />}
          showChevron
          onPress={onPress("settings")}
        />
      </View>
    );
  },
};

/* ── Full showcase ── */

export const AllVariants = {
  render: () => {
    const theme = useNuDSTheme();
    return (
      <View style={{ gap: theme.spacing[4] }}>
        <ListRow label="Simple row" onPress={onPress("simple")} />
        <ListRow label="With chevron" showChevron onPress={onPress("chevron")} />
        <ListRow label="With leading" leading={<SettingsIcon size={20} />} showChevron onPress={onPress("leading")} />
        <ListRow label="With description" description="Description text" showChevron onPress={onPress("desc")} />
        <ListRow label="With secondary" secondaryLabel="$100" showChevron onPress={onPress("sec")} />
        <ListRow label="Compact" compact showChevron onPress={onPress("compact")} />
        <ListRow label="Disabled" disabled showChevron onPress={onPress("disabled")} />
        <ListRow label="Loading" loading onPress={onPress("loading")} />
        <ListRow label="With badge" trailing={<Badge label="New" color="success" />} onPress={onPress("badge")} />
        <ListRow label="From" description="Spending balance" invertLabels showChevron onPress={onPress("inverted")} />
      </View>
    );
  },
};
