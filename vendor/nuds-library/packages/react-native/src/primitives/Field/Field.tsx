import React from "react";
import { View } from "react-native";
import type { ViewProps, ViewStyle } from "react-native";
import { NText } from "../Text";
import { useNuDSTheme } from "../../theme";

export type FieldProps = ViewProps & {
  label?: string;
  hint?: string;
  error?: string;
  required?: boolean;
  style?: ViewStyle | ViewStyle[];
  children: React.ReactNode;
};

export const Field = ({ label, hint, error, required, style, children, ...rest }: FieldProps) => {
  const theme = useNuDSTheme();
  const hasError = Boolean(error);

  return (
    <View style={[{ gap: theme.spacing[2] }, style]} {...rest}>
      {label ? (
        <NText variant="labelSmallStrong">
          {label}
          {required ? " *" : ""}
        </NText>
      ) : null}
      {children}
      {hasError ? (
        <NText variant="labelXSmallDefault" tone="negative">
          {error}
        </NText>
      ) : hint ? (
        <NText variant="labelXSmallDefault" tone="secondary">
          {hint}
        </NText>
      ) : null}
    </View>
  );
};
