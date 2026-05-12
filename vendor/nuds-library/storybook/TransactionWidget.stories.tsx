import React from "react";
import { View } from "react-native";
import {
  Avatar,
  TransactionWidget,
  PlaceholderIcon,
} from "@nu-design-org/nuds-vibecode-react-native";
import type { TransactionItem } from "@nu-design-org/nuds-vibecode-react-native";

export default {
  title: "Patterns/TransactionWidget",
  component: TransactionWidget,
};

// ---------------------------------------------------------------------------
// Shared sample data
// ---------------------------------------------------------------------------

const sampleTransactions: TransactionItem[] = [
  {
    key: "1",
    label: "Transaction Label",
    description: "Description",
    timestamp: "11:08",
    amount: "999.000,00",
    amountPrefix: "R$",
    leading: <Avatar variant="icon" size="small" icon={<PlaceholderIcon size={16} />} />,
    onPress: () => console.log("[storybook] row 1"),
  },
  {
    key: "2",
    label: "Transaction Label",
    description: "Description",
    timestamp: "11:08",
    amount: "999.000,00",
    amountPrefix: "R$",
    leading: <Avatar variant="icon" size="small" icon={<PlaceholderIcon size={16} />} />,
    onPress: () => console.log("[storybook] row 2"),
  },
  {
    key: "3",
    label: "Transaction Label",
    description: "Description",
    timestamp: "11:08",
    amount: "999.000,00",
    amountPrefix: "R$",
    leading: <Avatar variant="icon" size="small" icon={<PlaceholderIcon size={16} />} />,
    onPress: () => console.log("[storybook] row 3"),
  },
  {
    key: "4",
    label: "Transaction Label",
    description: "Description",
    timestamp: "11:08",
    amount: "999.000,00",
    amountPrefix: "R$",
    leading: <Avatar variant="icon" size="small" icon={<PlaceholderIcon size={16} />} />,
    onPress: () => console.log("[storybook] row 4"),
  },
];

// ---------------------------------------------------------------------------
// Small row size (default)
// ---------------------------------------------------------------------------

export const SmallRows = {
  render: () => (
    <TransactionWidget
      transactions={sampleTransactions}
      rowSize="small"
      onButtonPress={() => console.log("[storybook] Full History")}
    />
  ),
};

// ---------------------------------------------------------------------------
// Default row size
// ---------------------------------------------------------------------------

export const DefaultRows = {
  render: () => (
    <TransactionWidget
      transactions={sampleTransactions}
      rowSize="default"
      onButtonPress={() => console.log("[storybook] Full History")}
    />
  ),
};

// ---------------------------------------------------------------------------
// Empty state
// ---------------------------------------------------------------------------

export const EmptyState = {
  render: () => (
    <TransactionWidget
      emptyState
      emptyTitle="No transactions"
      emptyDescription="There are no recent events"
    />
  ),
};

// ---------------------------------------------------------------------------
// No button
// ---------------------------------------------------------------------------

export const WithoutButton = {
  render: () => (
    <TransactionWidget
      transactions={sampleTransactions.slice(0, 3)}
      rowSize="small"
      showButton={false}
    />
  ),
};
