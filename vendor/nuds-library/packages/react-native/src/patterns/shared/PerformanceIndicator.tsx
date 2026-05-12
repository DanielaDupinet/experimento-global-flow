import React from "react";
import { View } from "react-native";
import { NText } from "../../primitives/Text";
import { TriangleUpFilledIcon } from "../../icons/TriangleUpFilledIcon";
import { TriangleDownFilledIcon } from "../../icons/TriangleDownFilledIcon";
import { useNuDSTheme } from "../../theme";

/** Small inline performance indicator: triangle icon + value text */
export const PerformanceIndicator = ({
  value,
  direction,
}: {
  value: string;
  direction: "up" | "down";
}) => {
  const theme = useNuDSTheme();
  const isUp = direction === "up";
  const iconColor = isUp ? theme.color.content.feedback.success : theme.color.content.feedback.critical;
  const textTone = isUp ? "positive" : "negative";

  return (
    <View style={{ flexDirection: "row", alignItems: "center", gap: 2 }}>
      {isUp ? (
        <TriangleUpFilledIcon size={12} color={iconColor} />
      ) : (
        <TriangleDownFilledIcon size={12} color={iconColor} />
      )}
      <NText variant="labelSmallDefault" tone={textTone} numberOfLines={1}>
        {value}
      </NText>
    </View>
  );
};
