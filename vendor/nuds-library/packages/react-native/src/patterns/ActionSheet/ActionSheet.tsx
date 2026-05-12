import React from "react";
import { View } from "react-native";
import type { StyleProp, ViewStyle } from "react-native";
import { BottomSheet } from "../../components/BottomSheet";
import { ListRow } from "../../components/ListRow";
import { useNuDSTheme } from "../../theme";

export type ActionSheetItem = {
  key: string;
  label: string;
  icon?: React.ReactNode;
  onPress: () => void;
  disabled?: boolean;
  accessibilityLabel?: string;
};

export type ActionSheetProps = {
  visible: boolean;
  onClose: () => void;
  title?: string;
  actions: ActionSheetItem[];
  style?: StyleProp<ViewStyle>;
};

export const ActionSheet = ({
  visible,
  onClose,
  title = "More actions",
  actions,
  style
}: ActionSheetProps) => {
  const theme = useNuDSTheme();

  return (
    <BottomSheet
      visible={visible}
      onClose={onClose}
      title={title}
      showHandle
      show1stAction={false}
      show2ndAction={false}
      style={style}
    >
      {/* Action list */}
      <View
        style={{
          paddingHorizontal: theme.spacing[4],
          paddingBottom: theme.spacing[3]
        }}
      >
        <View
          style={{
            backgroundColor: theme.color.surface.default,
            borderWidth: 1,
            borderColor: theme.color.border.default,
            borderRadius: theme.radius.xl,
            paddingVertical: theme.spacing[1],
            overflow: "hidden",
            ...theme.elevation.level1
          }}
        >
          {actions.map((action, index) => (
            <ListRow
              key={action.key}
              label={action.label}
              leading={action.icon}
              disabled={action.disabled}
              accessibilityLabel={action.accessibilityLabel}
              showDivider={index < actions.length - 1}
              onPress={() => {
                action.onPress();
                onClose();
              }}
            />
          ))}
        </View>
      </View>
    </BottomSheet>
  );
};
