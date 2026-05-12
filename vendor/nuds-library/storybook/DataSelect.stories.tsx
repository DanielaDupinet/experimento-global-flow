import React, { useState } from "react";
import { ScrollView, View } from "react-native";
import {
  DataSelect,
  NText,
  useNuDSTheme,
} from "@nu-design-org/nuds-vibecode-react-native";
import type { DataSelectItem } from "@nu-design-org/nuds-vibecode-react-native";

export default {
  title: "Components/DataSelect",
  component: DataSelect,
};

// Helper to generate numbered items
const makeItems = (count: number, start = 1): DataSelectItem[] =>
  Array.from({ length: count }, (_, i) => ({
    label: String(start + i).padStart(2, "0"),
    value: start + i,
  }));

// ---------------------------------------------------------------------------
// 5 Columns — 1 Row
// ---------------------------------------------------------------------------

export const FiveColumns = {
  render: () => {
    const [selected, setSelected] = useState<number | string>(1);
    return (
      <DataSelect
        items={makeItems(5)}
        selectedValue={selected}
        onSelect={setSelected}
        columns={5}
      />
    );
  },
};

// ---------------------------------------------------------------------------
// 4 Columns — 1 Row
// ---------------------------------------------------------------------------

export const FourColumns = {
  render: () => {
    const [selected, setSelected] = useState<number | string>(1);
    return (
      <DataSelect
        items={makeItems(4)}
        selectedValue={selected}
        onSelect={setSelected}
        columns={4}
      />
    );
  },
};

// ---------------------------------------------------------------------------
// 3 Columns — 1 Row
// ---------------------------------------------------------------------------

export const ThreeColumns = {
  render: () => {
    const [selected, setSelected] = useState<number | string>(1);
    return (
      <DataSelect
        items={makeItems(3)}
        selectedValue={selected}
        onSelect={setSelected}
        columns={3}
      />
    );
  },
};

// ---------------------------------------------------------------------------
// 5 Columns — Multiple Rows (Calendar-style)
// ---------------------------------------------------------------------------

export const CalendarGrid = {
  render: () => {
    const [selected, setSelected] = useState<number | string>(4);
    return (
      <DataSelect
        items={makeItems(30)}
        selectedValue={selected}
        onSelect={setSelected}
        columns={5}
      />
    );
  },
};

// ---------------------------------------------------------------------------
// 4 Columns — Multiple Rows
// ---------------------------------------------------------------------------

export const FourColumnGrid = {
  render: () => {
    const [selected, setSelected] = useState<number | string>(8);
    return (
      <DataSelect
        items={makeItems(12)}
        selectedValue={selected}
        onSelect={setSelected}
        columns={4}
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
    const [sel5, setSel5] = useState<number | string>(1);
    const [sel4, setSel4] = useState<number | string>(1);
    const [sel3, setSel3] = useState<number | string>(1);
    const [sel2, setSel2] = useState<number | string>(1);

    return (
      <ScrollView contentContainerStyle={{ gap: theme.spacing[6], padding: theme.spacing[4] }}>
        <NText variant="subtitleMediumStrong">5 columns</NText>
        <DataSelect
          items={makeItems(10)}
          selectedValue={sel5}
          onSelect={setSel5}
          columns={5}
        />

        <NText variant="subtitleMediumStrong">4 columns</NText>
        <DataSelect
          items={makeItems(8)}
          selectedValue={sel4}
          onSelect={setSel4}
          columns={4}
        />

        <NText variant="subtitleMediumStrong">3 columns</NText>
        <DataSelect
          items={makeItems(6)}
          selectedValue={sel3}
          onSelect={setSel3}
          columns={3}
        />

        <NText variant="subtitleMediumStrong">2 columns</NText>
        <DataSelect
          items={makeItems(4)}
          selectedValue={sel2}
          onSelect={setSel2}
          columns={2}
        />
      </ScrollView>
    );
  },
};
