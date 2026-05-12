import React from "react";
import { View } from "react-native";
import type { ViewStyle } from "react-native";
import { NText } from "../../primitives/Text";
import { SectionTitle } from "../../components/SectionTitle";
import { Button } from "../../components/Button";
import {
  TransactionListRow,
  type TransactionListRowProps,
} from "../../components/TransactionListRow";
import { useNuDSTheme } from "../../theme";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export type TransactionItem = Omit<
  TransactionListRowProps,
  "size" | "showDivider" | "style"
> & {
  /** Unique key used for list rendering */
  key: string;
};

export type TransactionWidgetProps = {
  /** Section heading text shown above the card */
  title?: string;
  /** Array of transaction data objects */
  transactions?: TransactionItem[];
  /**
   * Row typography size forwarded to every TransactionListRow.
   * @default "small"
   */
  rowSize?: "default" | "small";
  /** When true, shows the empty-state card instead of transaction rows */
  emptyState?: boolean;
  /** Title shown inside the empty-state card */
  emptyTitle?: string;
  /** Description shown inside the empty-state card */
  emptyDescription?: string;
  /** Show the CTA button at the bottom of the card */
  showButton?: boolean;
  /** Button label text */
  buttonLabel?: string;
  /** Called when the CTA button is pressed */
  onButtonPress?: () => void;
  style?: ViewStyle | ViewStyle[];
};

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export const TransactionWidget = ({
  title = "Transactions",
  transactions = [],
  rowSize = "small",
  emptyState = false,
  emptyTitle = "No transactions",
  emptyDescription = "There are no recent events",
  showButton = true,
  buttonLabel = "Full History",
  onButtonPress,
  style,
}: TransactionWidgetProps) => {
  const theme = useNuDSTheme();

  // -----------------------------------------------------------------------
  // Empty state
  // -----------------------------------------------------------------------
  if (emptyState || transactions.length === 0) {
    return (
      <View style={[{ width: "100%" }, style]}>
        <SectionTitle title={title} compact />

        <View style={{ paddingHorizontal: theme.spacing[4] }}>
          <View
            style={{
              backgroundColor: theme.color.surface.feedback.neutral,
              borderRadius: theme.radius.xl,
              paddingVertical: theme.spacing[8],
              paddingHorizontal: theme.spacing[6],
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <NText
              variant="labelMediumStrong"
              tone="primary"
              style={{ textAlign: "center", marginBottom: theme.spacing[1] }}
            >
              {emptyTitle}
            </NText>
            <NText
              variant="labelSmallDefault"
              tone="secondary"
              style={{ textAlign: "center" }}
            >
              {emptyDescription}
            </NText>
          </View>
        </View>
      </View>
    );
  }

  // -----------------------------------------------------------------------
  // Normal state with transaction rows
  // -----------------------------------------------------------------------
  return (
    <View
      style={[
        { width: "100%", paddingBottom: theme.spacing[3] },
        style,
      ]}
    >
      {/* Section title */}
      <SectionTitle title={title} compact />

      {/* Card wrapper */}
      <View style={{ paddingHorizontal: theme.spacing[4] }}>
        <View
          style={{
            backgroundColor: theme.color.surface.default,
            borderWidth: 1,
            borderColor: theme.color.border.default,
            borderRadius: theme.radius.xl,
            overflow: "hidden",
            // Subtle elevation matching Figma spec
            shadowColor: theme.color.content.default,
            shadowOffset: { width: 0, height: 1 },
            shadowOpacity: 0.05,
            shadowRadius: 0,
            elevation: 1,
          }}
        >
          {/* Transaction rows */}
          <View style={{ paddingVertical: theme.spacing[2] }}>
            {transactions.map((tx, index) => {
              const isLast = index === transactions.length - 1;
              return (
                <TransactionListRow
                  key={tx.key}
                  label={tx.label}
                  description={tx.description}
                  timestamp={tx.timestamp}
                  amount={tx.amount}
                  amountPrefix={tx.amountPrefix}
                  secondaryAmount={tx.secondaryAmount}
                  leading={tx.leading}
                  variant={tx.variant}
                  size={rowSize}
                  disabled={tx.disabled}
                  showDivider={!isLast}
                  onPress={tx.onPress}
                />
              );
            })}
          </View>

          {/* CTA button */}
          {showButton ? (
            <View
              style={{
                paddingHorizontal: theme.spacing[3],
                paddingBottom: theme.spacing[3],
              }}
            >
              <Button
                label={buttonLabel}
                variant="secondary"
                compact
                expanded
                onPress={onButtonPress}
              />
            </View>
          ) : null}
        </View>
      </View>
    </View>
  );
};
