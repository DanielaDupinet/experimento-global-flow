import React from "react";
import { Pressable, View } from "react-native";
import type { PressableProps, ViewStyle } from "react-native";
import { ExpandMoreIcon } from "../../icons";
import { Field } from "../../primitives/Field";
import { NText } from "../../primitives/Text";
import { useNuDSTheme } from "../../theme";

export type SelectOption = {
  label: string;
  value: string;
};

export type SelectProps = Omit<PressableProps, "style"> & {
  label?: string;
  hint?: string;
  error?: string;
  required?: boolean;
  placeholder?: string;
  value?: string;
  options?: SelectOption[];
  style?: ViewStyle | ViewStyle[];
};

export const Select = ({
  label,
  hint,
  error,
  required,
  placeholder = "Select an option",
  value,
  options = [],
  disabled,
  style,
  ...rest
}: SelectProps) => {
  const theme = useNuDSTheme();
  const selected = options.find((option) => option.value === value);
  const hasError = Boolean(error);

  return (
    <Field label={label} hint={hint} error={error} required={required}>
      <Pressable
        accessibilityRole="button"
        accessibilityState={{ disabled: Boolean(disabled) }}
        disabled={disabled}
        style={[
          {
            minHeight: 48,
            borderRadius: theme.radius.md,
            borderWidth: 1,
            borderColor: hasError ? theme.color.content.feedback.critical : theme.color.border.strong,
            backgroundColor: disabled ? theme.color.surface.disabled : theme.color.surface.default,
            paddingHorizontal: theme.spacing[3],
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: "row"
          },
          style
        ]}
        {...rest}
      >
        <View style={{ flex: 1, paddingRight: theme.spacing[2] }}>
          <NText tone={selected ? "primary" : "secondary"} variant="paragraphSmallDefault">
            {selected ? selected.label : placeholder}
          </NText>
        </View>
        <ExpandMoreIcon size={18} color={theme.color.content.subtle} />
      </Pressable>
    </Field>
  );
};
