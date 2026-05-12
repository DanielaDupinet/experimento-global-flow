import React, { useMemo, useState } from "react";
import { ScrollView, StyleSheet, Switch, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  semanticColorTokens,
  lightPrimitives,
  spacing,
  radius,
  duration,
  typography,
  zIndex
} from "@nu-design-org/nuds-vibecode-tokens";
import { darkTheme, lightTheme } from "@nu-design-org/nuds-vibecode-theme";
import {
  ArrowBackIcon,
  Box,
  Button,
  ChevronIcon,
  CircularLoader,
  DashboardHero,
  InlineActions,
  LimitBar,
  LoadingButton,
  NText,
  NuDSThemeProvider,
  Select,
  TextField,
  TopBar,
  Widget2x2,
  Widget4xN
} from "@nu-design-org/nuds-vibecode-react-native";

const storybookEnabled = process.env.EXPO_PUBLIC_STORYBOOK_ENABLED === "true";
const StorybookUIRoot = storybookEnabled ? require("./.rnstorybook").default : null;

const flatten = (obj, prefix = []) => {
  const rows = [];
  Object.entries(obj).forEach(([key, value]) => {
    const next = [...prefix, key];
    if (typeof value === "string" || typeof value === "number") {
      rows.push({ key: next.join("."), value });
    } else if (value && typeof value === "object") {
      rows.push(...flatten(value, next));
    }
  });
  return rows;
};

const TokenSection = ({ title, children }) => (
  <View style={styles.section}>
    <NText variant="labelLargeStrong">{title}</NText>
    <View style={styles.sectionBody}>{children}</View>
  </View>
);

const ColorSwatches = ({ title, source }) => {
  const rows = useMemo(() => flatten(source), [source]);
  return (
    <View style={styles.subSection}>
      <NText variant="labelMediumStrong">{title}</NText>
      <View style={styles.swatchGrid}>
        {rows.map((row) => (
          <View key={row.key} style={styles.swatchCard}>
            <View style={[styles.swatch, { backgroundColor: String(row.value) }]} />
            <NText variant="labelSmallStrong">{row.key}</NText>
            <NText variant="labelSmallDefault" tone="secondary">{String(row.value)}</NText>
          </View>
        ))}
      </View>
    </View>
  );
};

const AppContent = ({ isDark, setIsDark }) => {
  const theme = isDark ? darkTheme : lightTheme;

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.header}>
          <NText variant="titleMedium">Project-ignition</NText>
          <View style={styles.modeRow}>
            <NText variant="labelMediumStrong">Dark mode</NText>
            <Switch value={isDark} onValueChange={setIsDark} />
          </View>
          <NText variant="labelMediumDefault" tone="secondary">
            This page renders the current baseline tokens and components.
          </NText>
        </View>

        <TokenSection title="Components">
          <View style={styles.componentRow}>
            <Button label="Primary" variant="primary" />
            <Button label="Secondary" variant="secondary" />
            <Button label="Ghost" variant="ghost" />
            <Button label="Destructive" variant="destructive" />
          </View>
          <View style={styles.componentRow}>
            <LoadingButton label="Loading..." isLoading />
            <Button label="With icon" leadingIcon={<ArrowBackIcon size={14} />} trailingIcon={<ChevronIcon size={14} />} />
          </View>
          <View style={styles.componentRow}>
            <CircularLoader />
            <CircularLoader tone="secondary" />
          </View>
          <View style={styles.componentRow}>
            <Box surface="primary" style={styles.boxSample}>
              <NText variant="labelMediumStrong">Primary Surface</NText>
            </Box>
            <Box surface="secondary" style={styles.boxSample}>
              <NText variant="labelMediumStrong">Secondary Surface</NText>
            </Box>
          </View>
        </TokenSection>

        <TokenSection title="Form Components">
          <TextField label="Name" placeholder="Type your name" />
          <TextField label="Email" placeholder="name@company.com" hint="Used for account communication" />
          <Select
            label="Category"
            placeholder="Select one"
            options={[
              { value: "food", label: "Food" },
              { value: "travel", label: "Travel" },
              { value: "shopping", label: "Shopping" }
            ]}
            value="food"
          />
        </TokenSection>

        <TokenSection title="Troy-first Components">
          <TopBar title="Account Overview" subtitle="Current month" variant="dropdown" background="subtle" />
          <InlineActions
            variant="buttons"
            actions={[
              { key: "add", label: "Add", type: "Primary", onPress: () => {} },
              { key: "share", label: "Share", type: "Secondary", onPress: () => {} },
              { key: "delete", label: "Delete", type: "Secondary", onPress: () => {}, notification: true }
            ]}
            showMore
          />
        </TokenSection>

        <TokenSection title="Patterns">
          <DashboardHero
            balance="$12,948.22"
            dueDate="Sep 28"
            showAutopay
            autopayDate="Oct 10"
            autopayStatus="success"
            enableRotation
          />
          <LimitBar availableAmount={1800} totalLimit={5000} />
          <Widget2x2
            variant="list2"
            title="Summary"
            listItems={[
              { key: "income", label: "Income", description: "$5,480", onPress: () => {} },
              { key: "spent", label: "Spent", description: "$2,180", onPress: () => {} },
              { key: "savings", label: "Savings", description: "$1,900", onPress: () => {} }
            ]}
          />
          <Widget4xN
            variant="determinate"
            overline="Weekly progress"
            title="Spend tracking"
            description="You are at 64% of your goal"
            progress={64}
            progressLabel="Target"
            buttons={[
              { key: "details", label: "Details", onPress: () => {}, type: "Primary" },
              { key: "later", label: "Later", onPress: () => {}, type: "Secondary" }
            ]}
          />
        </TokenSection>

        <TokenSection title="Typography Tokens">
          <View style={styles.tokenList}>
            {Object.entries(typography).map(([key]) => (
              <NText key={key} variant={key}>
                {key}: The quick brown fox jumps over the lazy dog
              </NText>
            ))}
          </View>
        </TokenSection>

        <TokenSection title="Spacing Tokens">
          <View style={styles.tokenList}>
            {Object.entries(spacing).map(([key, value]) => (
              <NText key={key} variant="labelSmallDefault">{`spacing.${key} = ${value}`}</NText>
            ))}
          </View>
        </TokenSection>

        <TokenSection title="Radius Tokens">
          <View style={styles.tokenList}>
            {Object.entries(radius).map(([key, value]) => (
              <View key={key} style={styles.radiusRow}>
                <View style={[styles.radiusPreview, { borderRadius: Number(value) }]} />
                <NText variant="labelSmallDefault">{`radius.${key} = ${value}`}</NText>
              </View>
            ))}
          </View>
        </TokenSection>

        <TokenSection title="Motion + Z-Index Tokens">
          <View style={styles.tokenList}>
            {Object.entries(duration).map(([key, value]) => (
              <NText key={key} variant="labelSmallDefault">{`duration.${key} = ${value}ms`}</NText>
            ))}
            {Object.entries(zIndex).map(([key, value]) => (
              <NText key={key} variant="labelSmallDefault">{`zIndex.${key} = ${value}`}</NText>
            ))}
          </View>
        </TokenSection>

        <TokenSection title="Color Tokens">
          <ColorSwatches title="Primitives (Light)" source={lightPrimitives} />
          <ColorSwatches title="Semantic Light" source={semanticColorTokens.pf.light} />
          <ColorSwatches title="Semantic Dark" source={semanticColorTokens.pf.dark} />
        </TokenSection>

        <NText variant="labelSmallDefault" tone="secondary">
          Active mode: {theme.mode}
        </NText>
      </ScrollView>
    </SafeAreaView>
  );
};

export default function App() {
  if (storybookEnabled && StorybookUIRoot) {
    return <StorybookUIRoot />;
  }

  const [isDark, setIsDark] = useState(false);

  return (
    <NuDSThemeProvider mode={isDark ? "dark" : "light"}>
      <AppContent isDark={isDark} setIsDark={setIsDark} />
    </NuDSThemeProvider>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1
  },
  container: {
    padding: 16,
    gap: 16
  },
  header: {
    gap: 8
  },
  modeRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  section: {
    gap: 8
  },
  sectionBody: {
    gap: 10
  },
  subSection: {
    gap: 8
  },
  componentRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8
  },
  boxSample: {
    padding: 12,
    borderRadius: 12,
    minWidth: 140
  },
  tokenList: {
    gap: 6
  },
  radiusRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8
  },
  radiusPreview: {
    width: 26,
    height: 26,
    backgroundColor: "#820AD1"
  },
  swatchGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8
  },
  swatchCard: {
    width: 150,
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.12)",
    borderRadius: 10,
    padding: 8,
    gap: 4
  },
  swatch: {
    height: 36,
    borderRadius: 8
  }
});
