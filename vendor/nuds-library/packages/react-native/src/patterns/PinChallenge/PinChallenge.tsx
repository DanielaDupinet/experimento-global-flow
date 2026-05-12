import React, { useCallback, useEffect, useRef, useState } from "react";
import { View } from "react-native";
import { BottomSheet } from "../../components/BottomSheet";
import { PinCode } from "../../components/PinCode";
import { NText } from "../../primitives/Text";
import { useNuDSTheme } from "../../theme";

export type PinChallengeProps = {
  /** Controls visibility of the PIN challenge bottom sheet */
  visible: boolean;
  /** Called when the bottom sheet is dismissed (overlay tap, close button, or drag) */
  onClose: () => void;
  /** Called when all digits have been entered */
  onComplete?: (pin: string) => void;
  /** Large header title displayed below the top bar */
  title?: string;
  /** Number of PIN digits (default 4) */
  length?: number;
  /** Error state — pass `true` for a default error, or a string for a custom error message */
  error?: boolean | string;
  /** Helper text shown below the PIN dots */
  helperText?: string;
};

export const PinChallenge = ({
  visible,
  onClose,
  onComplete,
  title = "Enter your 4-digit PIN",
  length = 4,
  error = false,
  helperText,
}: PinChallengeProps) => {
  const theme = useNuDSTheme();
  const [value, setValue] = useState("");
  const wasVisible = useRef(visible);

  // Reset PIN value every time the sheet opens
  useEffect(() => {
    if (visible && !wasVisible.current) {
      setValue("");
    }
    wasVisible.current = visible;
  }, [visible]);

  // Also reset when error clears (e.g. after a retry)
  const prevError = useRef(error);
  useEffect(() => {
    if (prevError.current && !error) {
      setValue("");
    }
    prevError.current = error;
  }, [error]);

  const handleChange = useCallback((v: string) => {
    setValue(v);
  }, []);

  const handleComplete = useCallback(
    (pin: string) => {
      // Small delay so the last dot animates in before the sheet closes
      setTimeout(() => {
        onComplete?.(pin);
      }, 300);
    },
    [onComplete]
  );

  return (
    <BottomSheet
      visible={visible}
      onClose={onClose}
      title=""
      show1stAction={false}
      showHandle
      avoidKeyboard
    >
      {/* Header with large title */}
      <View
        style={{
          paddingTop: theme.spacing[2],
          paddingBottom: theme.spacing[6],
          paddingHorizontal: theme.spacing[6],
        }}
      >
        <NText variant="titleMedium">{title}</NText>
      </View>

      {/* PIN dots */}
      <View
        style={{
          alignItems: "center",
          paddingBottom: theme.spacing[10],
        }}
      >
        <PinCode
          value={value}
          onChange={handleChange}
          onComplete={handleComplete}
          length={length}
          error={error}
          helperText={helperText}
          autoFocus={visible}
        />
      </View>
    </BottomSheet>
  );
};
