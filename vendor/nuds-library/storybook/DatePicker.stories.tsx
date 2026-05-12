import React, { useState } from "react";
import { ScrollView, View } from "react-native";
import {
  DatePicker,
  NText,
  useNuDSTheme,
} from "@nu-design-org/nuds-vibecode-react-native";

export default {
  title: "Components/DatePicker",
  component: DatePicker,
};

// ---------------------------------------------------------------------------
// Default — Interactive
// ---------------------------------------------------------------------------

export const Default = {
  render: () => {
    const [month, setMonth] = useState(new Date(2025, 1, 1)); // Feb 2025
    const [selected, setSelected] = useState(new Date(2025, 1, 20));

    const highlighted = [
      new Date(2025, 1, 16),
      new Date(2025, 1, 19),
      new Date(2025, 1, 23),
    ];

    return (
      <DatePicker
        month={month}
        selectedDate={selected}
        highlightedDates={highlighted}
        onSelectDate={setSelected}
        onPreviousMonth={() =>
          setMonth((m) => new Date(m.getFullYear(), m.getMonth() - 1, 1))
        }
        onNextMonth={() =>
          setMonth((m) => new Date(m.getFullYear(), m.getMonth() + 1, 1))
        }
      />
    );
  },
};

// ---------------------------------------------------------------------------
// No Header
// ---------------------------------------------------------------------------

export const NoHeader = {
  render: () => {
    const [selected, setSelected] = useState(new Date(2025, 1, 10));

    return (
      <DatePicker
        month={new Date(2025, 1, 1)}
        selectedDate={selected}
        onSelectDate={setSelected}
        showHeader={false}
      />
    );
  },
};

// ---------------------------------------------------------------------------
// No Weekdays
// ---------------------------------------------------------------------------

export const NoWeekdays = {
  render: () => {
    const [month, setMonth] = useState(new Date(2025, 1, 1));
    const [selected, setSelected] = useState(new Date(2025, 1, 14));

    return (
      <DatePicker
        month={month}
        selectedDate={selected}
        onSelectDate={setSelected}
        showWeekdays={false}
        onPreviousMonth={() =>
          setMonth((m) => new Date(m.getFullYear(), m.getMonth() - 1, 1))
        }
        onNextMonth={() =>
          setMonth((m) => new Date(m.getFullYear(), m.getMonth() + 1, 1))
        }
      />
    );
  },
};

// ---------------------------------------------------------------------------
// With Highlights
// ---------------------------------------------------------------------------

export const WithHighlights = {
  render: () => {
    const [selected, setSelected] = useState<Date | undefined>(undefined);

    const highlighted = [
      new Date(2025, 1, 5),
      new Date(2025, 1, 10),
      new Date(2025, 1, 15),
      new Date(2025, 1, 20),
      new Date(2025, 1, 25),
    ];

    return (
      <DatePicker
        month={new Date(2025, 1, 1)}
        selectedDate={selected}
        highlightedDates={highlighted}
        onSelectDate={setSelected}
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
    const [month, setMonth] = useState(new Date(2025, 1, 1));
    const [selected, setSelected] = useState(new Date(2025, 1, 20));

    const highlights = [
      new Date(2025, 1, 16),
      new Date(2025, 1, 19),
      new Date(2025, 1, 23),
    ];

    const prev = () =>
      setMonth((m) => new Date(m.getFullYear(), m.getMonth() - 1, 1));
    const next = () =>
      setMonth((m) => new Date(m.getFullYear(), m.getMonth() + 1, 1));

    return (
      <ScrollView contentContainerStyle={{ gap: theme.spacing[6], padding: theme.spacing[4] }}>
        <NText variant="subtitleMediumStrong">Full (header + weekdays + highlights)</NText>
        <DatePicker
          month={month}
          selectedDate={selected}
          highlightedDates={highlights}
          onSelectDate={setSelected}
          onPreviousMonth={prev}
          onNextMonth={next}
        />

        <NText variant="subtitleMediumStrong">No header</NText>
        <DatePicker
          month={month}
          selectedDate={selected}
          onSelectDate={setSelected}
          showHeader={false}
        />

        <NText variant="subtitleMediumStrong">Grid only (no header, no weekdays)</NText>
        <DatePicker
          month={month}
          selectedDate={selected}
          onSelectDate={setSelected}
          showHeader={false}
          showWeekdays={false}
        />
      </ScrollView>
    );
  },
};
