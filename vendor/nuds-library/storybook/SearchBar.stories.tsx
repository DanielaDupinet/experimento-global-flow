import React, { useState } from "react";
import { ScrollView, View } from "react-native";
import {
  SearchBar,
  FilterBar,
  Divider,
  NText,
  useNuDSTheme,
} from "@nu-design-org/nuds-vibecode-react-native";
import type { FilterItem } from "@nu-design-org/nuds-vibecode-react-native";

export default {
  title: "Components/SearchBar",
  component: SearchBar,
};

export const Default = {
  render: () => {
    const [value, setValue] = useState("");
    return (
      <View style={{ padding: 24 }}>
        <SearchBar value={value} onChangeText={setValue} />
      </View>
    );
  },
};

export const Disabled = {
  render: () => (
    <View style={{ padding: 24 }}>
      <SearchBar disabled placeholder="Search" />
    </View>
  ),
};

export const Skeleton = {
  render: () => (
    <View style={{ padding: 24 }}>
      <SearchBar skeleton />
    </View>
  ),
};

export const Loading = {
  render: () => (
    <View style={{ padding: 24 }}>
      <SearchBar value="Typing" loading />
    </View>
  ),
};

export const WithSummary = {
  render: () => {
    const theme = useNuDSTheme();
    return (
      <View style={{ padding: theme.spacing[5], gap: theme.spacing[4] }}>
        <SearchBar placeholder="Search" />
        <NText
          variant="labelSmallDefault"
          tone="primary"
          style={{ textAlign: "center" }}
        >
          90 purchases · R$ 3.456,89
        </NText>
      </View>
    );
  },
};

export const WithFilters = {
  render: () => {
    const theme = useNuDSTheme();
    return (
      <View style={{ padding: theme.spacing[5] }}>
        <SearchBar placeholder="Search" />
        <FilterBar
          filters={[
            { key: "1", label: "Label" },
            { key: "2", label: "Label" },
            { key: "3", label: "Label" },
          ]}
          variant="dropdown"
          scrollable
          showClearFilters
          clearFiltersLabel="Clear filters"
          style={{ paddingHorizontal: 0 }}
        />
      </View>
    );
  },
};

export const WithFiltersAndSummary = {
  render: () => {
    const theme = useNuDSTheme();
    return (
      <View style={{ padding: theme.spacing[5] }}>
        <SearchBar placeholder="Search" />
        <FilterBar
          filters={[
            { key: "1", label: "Label" },
            { key: "2", label: "Label" },
            { key: "3", label: "Label" },
          ]}
          variant="dropdown"
          scrollable
          showClearFilters
          clearFiltersLabel="Clear filters"
          style={{ paddingHorizontal: 0 }}
        />
        <NText
          variant="labelSmallDefault"
          tone="primary"
          style={{ textAlign: "center", marginTop: theme.spacing[3] }}
        >
          90 purchases · R$ 3.456,89
        </NText>
        <Divider size="medium" style={{ marginTop: theme.spacing[4] }} />
      </View>
    );
  },
};

export const AllStates = {
  render: () => {
    const theme = useNuDSTheme();

    return (
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{
          gap: theme.spacing[6],
          padding: theme.spacing[5],
        }}
      >
        <NText variant="subtitleMediumStrong">Default</NText>
        <SearchBar placeholder="Search" />

        <NText variant="subtitleMediumStrong">Search bar with summary</NText>
        <View style={{ gap: theme.spacing[4] }}>
          <SearchBar placeholder="Search" />
          <NText
            variant="labelSmallDefault"
            tone="primary"
            style={{ textAlign: "center" }}
          >
            90 purchases · R$ 3.456,89
          </NText>
        </View>

        <NText variant="subtitleMediumStrong">Search bar with filters</NText>
        <View>
          <SearchBar placeholder="Search" />
          <FilterBar
            filters={[
              { key: "1", label: "Label" },
              { key: "2", label: "Label" },
              { key: "3", label: "Label" },
            ]}
            variant="dropdown"
            scrollable
            showClearFilters
            clearFiltersLabel="Clear filters"
            style={{ paddingHorizontal: 0 }}
          />
        </View>

        <NText variant="subtitleMediumStrong">Search bar with filters and summary</NText>
        <View>
          <SearchBar placeholder="Search" />
          <FilterBar
            filters={[
              { key: "1", label: "Label" },
              { key: "2", label: "Label" },
              { key: "3", label: "Label" },
            ]}
            variant="dropdown"
            scrollable
            showClearFilters
            clearFiltersLabel="Clear filters"
            style={{ paddingHorizontal: 0 }}
          />
          <NText
            variant="labelSmallDefault"
            tone="primary"
            style={{ textAlign: "center", marginTop: theme.spacing[3] }}
          >
            90 purchases · R$ 3.456,89
          </NText>
          <Divider size="medium" style={{ marginTop: theme.spacing[4] }} />
        </View>

        <NText variant="subtitleMediumStrong">Disabled</NText>
        <SearchBar disabled placeholder="Search" />

        <NText variant="subtitleMediumStrong">Skeleton</NText>
        <SearchBar skeleton />

        <NText variant="subtitleMediumStrong">Loading</NText>
        <SearchBar value="Typing" loading />
      </ScrollView>
    );
  },
};
