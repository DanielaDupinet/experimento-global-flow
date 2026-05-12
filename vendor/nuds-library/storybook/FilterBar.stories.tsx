import React, { useState } from "react";
import { ScrollView, View } from "react-native";
import {
  FilterBar,
  FilterChip,
  NText,
  useNuDSTheme,
} from "@nu-design-org/nuds-vibecode-react-native";
import type { FilterItem, DropdownOption } from "@nu-design-org/nuds-vibecode-react-native";

export default {
  title: "Components/FilterBar",
  component: FilterBar,
};

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

const CATEGORY_OPTIONS: DropdownOption[] = [
  { key: "food", label: "Food & Drinks" },
  { key: "transport", label: "Transportation" },
  { key: "shopping", label: "Shopping" },
  { key: "entertainment", label: "Entertainment" },
];

const DATE_OPTIONS: DropdownOption[] = [
  { key: "today", label: "Today" },
  { key: "week", label: "This week" },
  { key: "month", label: "This month" },
  { key: "custom", label: "Custom range", description: "Pick start and end dates" },
];

const PRICE_OPTIONS: DropdownOption[] = [
  { key: "0-50", label: "Up to R$ 50" },
  { key: "50-200", label: "R$ 50 – R$ 200" },
  { key: "200+", label: "Over R$ 200" },
];

const SIMPLE_FILTERS: FilterItem[] = [
  { key: "1", label: "Category" },
  { key: "2", label: "Price" },
  { key: "3", label: "Date" },
];

// ---------------------------------------------------------------------------
// Filter Chip States
// ---------------------------------------------------------------------------

export const ChipStates = {
  render: () => {
    const theme = useNuDSTheme();
    return (
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{
          gap: theme.spacing[6],
          padding: theme.spacing[4],
        }}
      >
        <NText variant="subtitleMediumStrong">Dropdown Type</NText>
        <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 8 }}>
          <FilterChip label="Enabled" type="dropdown" />
          <FilterChip label="Loading" type="dropdown" state="loading" />
          <FilterChip label="Selected" type="dropdown" selected />
          <FilterChip label="Disabled" type="dropdown" state="disabled" />
          <FilterChip label="Sel+Dis" type="dropdown" selected state="disabled" />
        </View>

        <NText variant="subtitleMediumStrong">Option Type</NText>
        <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 8 }}>
          <FilterChip label="Enabled" type="option" />
          <FilterChip label="Loading" type="option" state="loading" />
          <FilterChip label="Selected" type="option" selected />
          <FilterChip label="Disabled" type="option" state="disabled" />
          <FilterChip label="Sel+Dis" type="option" selected state="disabled" />
        </View>
      </ScrollView>
    );
  },
};

// ---------------------------------------------------------------------------
// Dropdown – Scrollable (toggle only, no dropdown panel)
// ---------------------------------------------------------------------------

export const DropdownScrollable = {
  render: () => {
    const [selected, setSelected] = useState<string | null>(null);
    const filters: FilterItem[] = SIMPLE_FILTERS.map((f) => ({
      ...f,
      selected: f.key === selected,
    }));
    return (
      <FilterBar
        filters={filters}
        variant="dropdown"
        scrollable
        showClearFilters
        clearFiltersLabel="Clear filters"
        onFilterPress={(key) => setSelected(key === selected ? null : key)}
        onClearFilters={() => setSelected(null)}
      />
    );
  },
};

// ---------------------------------------------------------------------------
// Dropdown – With Dropdown Panel
// ---------------------------------------------------------------------------

export const DropdownWithPanel = {
  render: () => {
    const [selections, setSelections] = useState<Record<string, string | null>>({
      category: null,
      date: null,
      price: null,
    });

    const filters: FilterItem[] = [
      {
        key: "category",
        label: selections.category
          ? CATEGORY_OPTIONS.find((o) => o.key === selections.category)?.label ?? "Category"
          : "Category",
        selected: selections.category !== null,
        options: CATEGORY_OPTIONS,
        selectedOptionKey: selections.category,
      },
      {
        key: "date",
        label: selections.date
          ? DATE_OPTIONS.find((o) => o.key === selections.date)?.label ?? "Date"
          : "Date",
        selected: selections.date !== null,
        options: DATE_OPTIONS,
        selectedOptionKey: selections.date,
      },
      {
        key: "price",
        label: selections.price
          ? PRICE_OPTIONS.find((o) => o.key === selections.price)?.label ?? "Price"
          : "Price",
        selected: selections.price !== null,
        options: PRICE_OPTIONS,
        selectedOptionKey: selections.price,
      },
    ];

    return (
      <FilterBar
        filters={filters}
        variant="dropdown"
        scrollable
        showClearFilters
        clearFiltersLabel="Clear filters"
        onOptionSelect={(filterKey, optionKey) => {
          setSelections((prev) => ({
            ...prev,
            [filterKey]: prev[filterKey] === optionKey ? null : optionKey,
          }));
        }}
        onClearFilters={() =>
          setSelections({ category: null, date: null, price: null })
        }
      />
    );
  },
};

// ---------------------------------------------------------------------------
// Dropdown – Fill (non-scrollable)
// ---------------------------------------------------------------------------

export const DropdownFill = {
  render: () => {
    const [selected, setSelected] = useState<string | null>(null);
    const filters: FilterItem[] = SIMPLE_FILTERS.map((f) => ({
      ...f,
      selected: f.key === selected,
    }));
    return (
      <FilterBar
        filters={filters}
        variant="dropdown"
        scrollable={false}
        onFilterPress={(key) => setSelected(key === selected ? null : key)}
      />
    );
  },
};

// ---------------------------------------------------------------------------
// Option – Scrollable
// ---------------------------------------------------------------------------

export const OptionScrollable = {
  render: () => {
    const [selected, setSelected] = useState<string | null>(null);
    const filters: FilterItem[] = SIMPLE_FILTERS.map((f) => ({
      ...f,
      selected: f.key === selected,
    }));
    return (
      <FilterBar
        filters={filters}
        variant="option"
        scrollable
        showClearFilters
        clearFiltersLabel="Clear filters"
        onFilterPress={(key) => setSelected(key === selected ? null : key)}
        onClearFilters={() => setSelected(null)}
      />
    );
  },
};

// ---------------------------------------------------------------------------
// Option – Fill (non-scrollable)
// ---------------------------------------------------------------------------

export const OptionFill = {
  render: () => {
    const [selected, setSelected] = useState<string | null>(null);
    const filters: FilterItem[] = SIMPLE_FILTERS.map((f) => ({
      ...f,
      selected: f.key === selected,
    }));
    return (
      <FilterBar
        filters={filters}
        variant="option"
        scrollable={false}
        onFilterPress={(key) => setSelected(key === selected ? null : key)}
      />
    );
  },
};

// ---------------------------------------------------------------------------
// All Variants
// ---------------------------------------------------------------------------

export const AllVariants = {
  render: () => {
    const theme = useNuDSTheme();
    const [selectedToggle, setSelectedToggle] = useState<string | null>("2");
    const [selectedOption, setSelectedOption] = useState<string | null>("1");
    const [dropdownSelections, setDropdownSelections] = useState<Record<string, string | null>>({
      category: null,
      date: "week",
      price: null,
    });

    const toggleFilters: FilterItem[] = SIMPLE_FILTERS.map((f) => ({
      ...f,
      selected: f.key === selectedToggle,
    }));
    const optionFilters: FilterItem[] = SIMPLE_FILTERS.map((f) => ({
      ...f,
      selected: f.key === selectedOption,
    }));
    const dropdownFilters: FilterItem[] = [
      {
        key: "category",
        label: dropdownSelections.category
          ? CATEGORY_OPTIONS.find((o) => o.key === dropdownSelections.category)?.label ?? "Category"
          : "Category",
        selected: dropdownSelections.category !== null,
        options: CATEGORY_OPTIONS,
        selectedOptionKey: dropdownSelections.category,
      },
      {
        key: "date",
        label: dropdownSelections.date
          ? DATE_OPTIONS.find((o) => o.key === dropdownSelections.date)?.label ?? "Date"
          : "Date",
        selected: dropdownSelections.date !== null,
        options: DATE_OPTIONS,
        selectedOptionKey: dropdownSelections.date,
      },
      {
        key: "price",
        label: dropdownSelections.price
          ? PRICE_OPTIONS.find((o) => o.key === dropdownSelections.price)?.label ?? "Price"
          : "Price",
        selected: dropdownSelections.price !== null,
        options: PRICE_OPTIONS,
        selectedOptionKey: dropdownSelections.price,
      },
    ];

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
          Dropdown with Panel
        </NText>
        <FilterBar
          filters={dropdownFilters}
          variant="dropdown"
          scrollable
          showClearFilters
          clearFiltersLabel="Clear filters"
          onOptionSelect={(filterKey, optionKey) => {
            setDropdownSelections((prev) => ({
              ...prev,
              [filterKey]: prev[filterKey] === optionKey ? null : optionKey,
            }));
          }}
          onClearFilters={() =>
            setDropdownSelections({ category: null, date: null, price: null })
          }
        />

        <NText
          variant="subtitleMediumStrong"
          style={{ paddingHorizontal: theme.spacing[4] }}
        >
          Dropdown – Toggle
        </NText>
        <FilterBar
          filters={toggleFilters}
          variant="dropdown"
          scrollable
          showClearFilters
          clearFiltersLabel="Clear filters"
          onFilterPress={(key) =>
            setSelectedToggle(key === selectedToggle ? null : key)
          }
          onClearFilters={() => setSelectedToggle(null)}
        />

        <NText
          variant="subtitleMediumStrong"
          style={{ paddingHorizontal: theme.spacing[4] }}
        >
          Dropdown – Fill
        </NText>
        <FilterBar
          filters={toggleFilters}
          variant="dropdown"
          scrollable={false}
          onFilterPress={(key) =>
            setSelectedToggle(key === selectedToggle ? null : key)
          }
        />

        <NText
          variant="subtitleMediumStrong"
          style={{ paddingHorizontal: theme.spacing[4] }}
        >
          Option – Scrollable
        </NText>
        <FilterBar
          filters={optionFilters}
          variant="option"
          scrollable
          showClearFilters
          clearFiltersLabel="Clear filters"
          onFilterPress={(key) =>
            setSelectedOption(key === selectedOption ? null : key)
          }
          onClearFilters={() => setSelectedOption(null)}
        />

        <NText
          variant="subtitleMediumStrong"
          style={{ paddingHorizontal: theme.spacing[4] }}
        >
          Option – Fill
        </NText>
        <FilterBar
          filters={optionFilters}
          variant="option"
          scrollable={false}
          onFilterPress={(key) =>
            setSelectedOption(key === selectedOption ? null : key)
          }
        />
      </ScrollView>
    );
  },
};
