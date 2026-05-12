import React from "react";
import { ScrollView, View } from "react-native";
import {
  ListSection,
  ListRow,
  NText,
  useNuDSTheme,
} from "@nu-design-org/nuds-vibecode-react-native";

export default {
  title: "Components/ListSection",
  component: ListSection,
};

// ---------------------------------------------------------------------------
// Single Row
// ---------------------------------------------------------------------------

export const SingleRow = {
  render: () => (
    <ListSection>
      <ListRow label="Primary label" />
    </ListSection>
  ),
};

// ---------------------------------------------------------------------------
// Two Rows
// ---------------------------------------------------------------------------

export const TwoRows = {
  render: () => (
    <ListSection>
      <ListRow label="Primary label" />
      <ListRow label="Primary label" />
    </ListSection>
  ),
};

// ---------------------------------------------------------------------------
// Three Rows
// ---------------------------------------------------------------------------

export const ThreeRows = {
  render: () => (
    <ListSection>
      <ListRow label="Primary label" />
      <ListRow label="Primary label" />
      <ListRow label="Primary label" />
    </ListSection>
  ),
};

// ---------------------------------------------------------------------------
// With Section Title
// ---------------------------------------------------------------------------

export const WithSectionTitle = {
  render: () => (
    <ListSection sectionTitle="Section title">
      <ListRow label="Primary label" />
      <ListRow label="Primary label" />
      <ListRow label="Primary label" />
    </ListSection>
  ),
};

// ---------------------------------------------------------------------------
// With Chevrons
// ---------------------------------------------------------------------------

export const WithChevrons = {
  render: () => (
    <ListSection sectionTitle="Settings">
      <ListRow label="Account" showChevron onPress={() => {}} />
      <ListRow label="Notifications" showChevron onPress={() => {}} />
      <ListRow label="Privacy" showChevron onPress={() => {}} />
      <ListRow label="Help" showChevron onPress={() => {}} />
    </ListSection>
  ),
};

// ---------------------------------------------------------------------------
// Rich Rows
// ---------------------------------------------------------------------------

export const RichRows = {
  render: () => (
    <ListSection sectionTitle="Account details">
      <ListRow
        label="Full name"
        secondaryLabel="John Doe"
      />
      <ListRow
        label="Email"
        secondaryLabel="john@email.com"
      />
      <ListRow
        label="Phone"
        secondaryLabel="+55 11 99999-9999"
      />
    </ListSection>
  ),
};

// ---------------------------------------------------------------------------
// All Variants
// ---------------------------------------------------------------------------

export const AllVariants = {
  render: () => {
    const theme = useNuDSTheme();
    return (
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{
          gap: theme.spacing[6],
          paddingVertical: theme.spacing[4],
        }}
      >
        <NText
          variant="subtitleMediumStrong"
          style={{ paddingHorizontal: theme.spacing[4] }}
        >
          1 Row
        </NText>
        <ListSection>
          <ListRow label="Primary label" />
        </ListSection>

        <NText
          variant="subtitleMediumStrong"
          style={{ paddingHorizontal: theme.spacing[4] }}
        >
          3 Rows
        </NText>
        <ListSection>
          <ListRow label="Primary label" />
          <ListRow label="Primary label" />
          <ListRow label="Primary label" />
        </ListSection>

        <NText
          variant="subtitleMediumStrong"
          style={{ paddingHorizontal: theme.spacing[4] }}
        >
          With Section Title
        </NText>
        <ListSection sectionTitle="Section title">
          <ListRow label="Primary label" />
          <ListRow label="Primary label" />
        </ListSection>

        <NText
          variant="subtitleMediumStrong"
          style={{ paddingHorizontal: theme.spacing[4] }}
        >
          With Chevrons
        </NText>
        <ListSection sectionTitle="Settings">
          <ListRow label="Account" showChevron onPress={() => {}} />
          <ListRow label="Notifications" showChevron onPress={() => {}} />
          <ListRow label="Privacy" showChevron onPress={() => {}} />
        </ListSection>

        <NText
          variant="subtitleMediumStrong"
          style={{ paddingHorizontal: theme.spacing[4] }}
        >
          Rich Content
        </NText>
        <ListSection sectionTitle="Account details">
          <ListRow label="Full name" secondaryLabel="John Doe" />
          <ListRow label="Email" secondaryLabel="john@email.com" />
          <ListRow label="Phone" secondaryLabel="+55 11 99999-9999" />
        </ListSection>
      </ScrollView>
    );
  },
};
