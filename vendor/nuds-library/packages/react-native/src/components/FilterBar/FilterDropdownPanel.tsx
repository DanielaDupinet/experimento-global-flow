import React, { useEffect, useRef } from "react";
import { Animated, Modal, Pressable, View } from "react-native";
import type { ViewStyle } from "react-native";
import { ListRow } from "../ListRow/ListRow";
import { useNuDSTheme } from "../../theme";

// -------------------------------------------------------------------------
// Types
// -------------------------------------------------------------------------

export type DropdownOption = {
  /** Unique key */
  key: string;
  /** Primary label */
  label: string;
  /** Optional description below the label */
  description?: string;
  /** Optional leading icon */
  leading?: React.ReactNode;
};

export type FilterDropdownPanelProps = {
  /** Whether the panel is visible */
  visible: boolean;
  /** List of options to display */
  options: DropdownOption[];
  /** Currently selected option key */
  selectedKey?: string | null;
  /** Called when an option is pressed */
  onSelect: (key: string) => void;
  /** Called when the panel should close (backdrop press) */
  onClose: () => void;
  /** Absolute Y position where the panel should start (just below the filter bar) */
  topOffset?: number;
  style?: ViewStyle;
};

// -------------------------------------------------------------------------
// Component
// -------------------------------------------------------------------------

export const FilterDropdownPanel = ({
  visible,
  options,
  selectedKey,
  onSelect,
  onClose,
  topOffset = 0,
  style,
}: FilterDropdownPanelProps) => {
  const theme = useNuDSTheme();

  // --- Animate in/out ---
  const opacity = useRef(new Animated.Value(0)).current;
  const translateY = useRef(new Animated.Value(-8)).current;

  useEffect(() => {
    if (visible) {
      Animated.parallel([
        Animated.timing(opacity, {
          toValue: 1,
          duration: 180,
          useNativeDriver: true,
        }),
        Animated.timing(translateY, {
          toValue: 0,
          duration: 180,
          useNativeDriver: true,
        }),
      ]).start();
    } else {
      opacity.setValue(0);
      translateY.setValue(-8);
    }
  }, [visible, opacity, translateY]);

  if (!visible) return null;

  // Position the panel 8px below the filter bar
  const panelTop = topOffset + 8;

  return (
    <Modal transparent visible={visible} animationType="none" onRequestClose={onClose}>
      {/* Backdrop */}
      <Pressable
        style={{ flex: 1, backgroundColor: theme.color.surface.overlay.default }}
        onPress={onClose}
      >
        {/* Panel */}
        <Animated.View
          style={[
            {
              position: "absolute",
              top: panelTop,
              left: theme.spacing[4],
              right: theme.spacing[4],
              backgroundColor: theme.color.surface.default,
              borderRadius: theme.radius.xl,
              overflow: "hidden",
              // Elevation / shadow
              shadowColor: theme.color.content.default,
              shadowOffset: { width: 0, height: 4 },
              shadowOpacity: 0.16,
              shadowRadius: 12,
              elevation: 6,
              opacity,
              transform: [{ translateY }],
            },
            style,
          ]}
        >
          <Pressable>
            {options.map((option, index) => (
              <ListRow
                key={option.key}
                label={option.label}
                description={option.description}
                leading={option.leading}
                compact
                showDivider={index < options.length - 1}
                onPress={() => {
                  onSelect(option.key);
                  onClose();
                }}
                trailing={
                  selectedKey === option.key ? (
                    <View
                      style={{
                        width: 8,
                        height: 8,
                        borderRadius: 4,
                        backgroundColor: theme.color.surface.accent.primary,
                      }}
                    />
                  ) : undefined
                }
              />
            ))}
          </Pressable>
        </Animated.View>
      </Pressable>
    </Modal>
  );
};
