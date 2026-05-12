import React from "react";
import { Pressable, View } from "react-native";
import type { StyleProp, ViewStyle } from "react-native";
import { NText } from "../../primitives/Text";
import { useNuDSTheme } from "../../theme";
import styles from "./styles";

// ── Types ──────────────────────────────────────────────────────────────────

export type DataSelectItem = {
  /** Display label inside the circle (e.g. "04", "15") */
  label: string;
  /** Unique value used for selection */
  value: string | number;
};

export type DataSelectProps = {
  /** Array of selectable items */
  items: DataSelectItem[];
  /** Currently selected value */
  selectedValue?: string | number;
  /** Called when an item is pressed */
  onSelect?: (value: string | number) => void;
  /** Number of columns per row (2–5, default 5) */
  columns?: number;
  /** Custom style applied to the outer container */
  style?: StyleProp<ViewStyle>;
};

// ── Item ───────────────────────────────────────────────────────────────────

const ITEM_SIZE = 48;

type ItemProps = {
  label: string;
  active: boolean;
  onPress: () => void;
  accentColor: string;
  primaryColor: string;
  borderColor: string;
  surfaceColor: string;
};

const DataSelectCircle = ({
  label,
  active,
  onPress,
  accentColor,
  primaryColor,
  borderColor,
  surfaceColor,
}: ItemProps) => {
  const theme = useNuDSTheme();
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityState={{ selected: active }}
      onPress={onPress}
      style={[
        styles.item,
        {
          width: ITEM_SIZE,
          height: ITEM_SIZE,
          borderRadius: ITEM_SIZE,
        },
        active
          ? {
              backgroundColor: theme.color.surface.accent.selectedSubtle,
              borderWidth: 2,
              borderColor: accentColor,
            }
          : {
              backgroundColor: surfaceColor,
              borderWidth: 1,
              borderColor,
              // Subtle shadow for inactive items
              shadowColor: theme.color.content.default,
              shadowOffset: { width: 0, height: 1 },
              shadowOpacity: 0.05,
              shadowRadius: 0,
              elevation: 1,
            },
      ]}
    >
      <NText
        variant="titleXSmall"
        color={active ? accentColor : primaryColor}
      >
        {label}
      </NText>
    </Pressable>
  );
};

// ── Main Component ─────────────────────────────────────────────────────────

export const DataSelect = ({
  items,
  selectedValue,
  onSelect,
  columns = 5,
  style,
}: DataSelectProps) => {
  const theme = useNuDSTheme();

  // Chunk items into rows
  const rows: DataSelectItem[][] = [];
  for (let i = 0; i < items.length; i += columns) {
    rows.push(items.slice(i, i + columns));
  }

  return (
    <View style={[styles.root, { gap: 8 }, style]}>
      {rows.map((row, rowIndex) => (
        <View key={rowIndex} style={[styles.row, { gap: 8 }]}>
          {row.map((item) => (
            <DataSelectCircle
              key={item.value}
              label={item.label}
              active={item.value === selectedValue}
              onPress={() => onSelect?.(item.value)}
              accentColor={theme.color.content.accent.primary}
              primaryColor={theme.color.content.default}
              borderColor={theme.color.border.default}
              surfaceColor={theme.color.surface.default}
            />
          ))}
        </View>
      ))}
    </View>
  );
};
