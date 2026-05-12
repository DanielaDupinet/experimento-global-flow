import React, { useCallback, useRef, useState } from "react";
import { Pressable, ScrollView, View } from "react-native";
import type { LayoutChangeEvent, ViewStyle } from "react-native";
import { NText } from "../../primitives/Text";
import { useNuDSTheme } from "../../theme";
import { FilterChip } from "./FilterChip";
import { FilterDropdownPanel } from "./FilterDropdownPanel";
import type { FilterChipType } from "./FilterChip";
import type { DropdownOption } from "./FilterDropdownPanel";
import styles from "./styles";

// -------------------------------------------------------------------------
// Types
// -------------------------------------------------------------------------

export type FilterItem = {
  /** Unique key for this filter */
  key: string;
  /** Display label */
  label: string;
  /** Whether this filter is currently selected */
  selected?: boolean;
  /** Whether this filter is disabled */
  disabled?: boolean;
  /** Optional leading icon */
  leadingIcon?: React.ReactNode;
  /** Dropdown options — when provided, pressing the chip opens a dropdown panel */
  options?: DropdownOption[];
  /** Currently selected option key (for dropdown chips) */
  selectedOptionKey?: string | null;
};

export type FilterBarProps = {
  /** Array of filter items to display */
  filters: FilterItem[];
  /** Chip visual style — dropdown shows a chevron, option does not */
  variant?: FilterChipType;
  /** When true the bar scrolls horizontally; when false chips stretch to fill */
  scrollable?: boolean;
  /** Show the "Clear filters" button at the end */
  showClearFilters?: boolean;
  /** Label for the clear button (defaults to "Clear filters") */
  clearFiltersLabel?: string;
  /** Called when the clear button is pressed */
  onClearFilters?: () => void;
  /** Called when a chip is pressed (for option-type or chips without dropdown options) */
  onFilterPress?: (key: string) => void;
  /** Called when a dropdown option is selected */
  onOptionSelect?: (filterKey: string, optionKey: string) => void;
  style?: ViewStyle | ViewStyle[];
};

// -------------------------------------------------------------------------
// Component
// -------------------------------------------------------------------------

export const FilterBar = ({
  filters,
  variant = "dropdown",
  scrollable = true,
  showClearFilters = false,
  clearFiltersLabel = "Clear filters",
  onClearFilters,
  onFilterPress,
  onOptionSelect,
  style,
}: FilterBarProps) => {
  const theme = useNuDSTheme();
  const [openDropdownKey, setOpenDropdownKey] = useState<string | null>(null);
  const [barBottom, setBarBottom] = useState(0);
  const barRef = useRef<View>(null);

  const gap = theme.spacing[2]; // 8px
  const paddingHorizontal = theme.spacing[4]; // 16px
  const paddingVertical = theme.spacing[3]; // 12px

  // Measure the bar's bottom edge so the dropdown appears just below it
  const measureBar = useCallback(() => {
    barRef.current?.measureInWindow((_x, y, _w, h) => {
      setBarBottom(y + h);
    });
  }, []);

  const handleChipPress = (filter: FilterItem) => {
    if (variant === "dropdown" && filter.options && filter.options.length > 0) {
      if (filter.key === openDropdownKey) {
        setOpenDropdownKey(null);
      } else {
        // Measure position then open
        measureBar();
        setOpenDropdownKey(filter.key);
      }
    } else {
      onFilterPress?.(filter.key);
    }
  };

  // --- Chip list ---
  const chipElements = filters.map((filter) => (
    <FilterChip
      key={filter.key}
      label={filter.label}
      type={variant}
      selected={filter.selected}
      disabled={filter.disabled}
      leadingIcon={filter.leadingIcon}
      onPress={() => handleChipPress(filter)}
      fill={!scrollable}
    />
  ));

  // --- Clear button ---
  const clearButton = showClearFilters ? (
    <Pressable
      accessibilityRole="button"
      onPress={onClearFilters}
      style={styles.clearButton}
    >
      <NText variant="labelXSmallStrong" color={theme.color.content.accent.primary}>
        {clearFiltersLabel}
      </NText>
    </Pressable>
  ) : null;

  // --- Currently open dropdown ---
  const activeFilter = filters.find((f) => f.key === openDropdownKey);

  const dropdownPanel = activeFilter?.options ? (
    <FilterDropdownPanel
      visible={openDropdownKey !== null}
      options={activeFilter.options}
      selectedKey={activeFilter.selectedOptionKey}
      topOffset={barBottom}
      onSelect={(optionKey) => {
        onOptionSelect?.(activeFilter.key, optionKey);
      }}
      onClose={() => setOpenDropdownKey(null)}
    />
  ) : null;

  // --- Scrollable layout ---
  if (scrollable) {
    return (
      <>
        <View ref={barRef} collapsable={false}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={[
              styles.bar,
              { gap, paddingHorizontal, paddingVertical },
              style,
            ]}
          >
            {chipElements}
            {clearButton}
          </ScrollView>
        </View>
        {dropdownPanel}
      </>
    );
  }

  // --- Non-scrollable (fill) layout ---
  return (
    <>
      <View
        ref={barRef}
        collapsable={false}
        style={[
          styles.bar,
          { gap, paddingHorizontal, paddingVertical },
          style,
        ]}
      >
        {chipElements}
      </View>
      {dropdownPanel}
    </>
  );
};
