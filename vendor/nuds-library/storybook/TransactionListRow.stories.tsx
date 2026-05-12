import React from "react";
import { View } from "react-native";
import {
  Avatar,
  AvatarGroup,
  TransactionListRow,
  PlaceholderIcon,
  NText,
} from "@nu-design-org/nuds-vibecode-react-native";

export default {
  title: "Components/TransactionListRow",
  component: TransactionListRow,
};

// ---------------------------------------------------------------------------
// Helper – reusable leading avatar
// ---------------------------------------------------------------------------

const LeadingAvatar = () => (
  <Avatar variant="icon" size="small" icon={<PlaceholderIcon size={16} />} />
);

const LeadingAvatarGroupDiagonal = () => (
  <AvatarGroup size="small" orientation="diagonal">
    <Avatar variant="icon" size="small" icon={<PlaceholderIcon size={16} />} />
    <Avatar variant="icon" size="small" icon={<PlaceholderIcon size={16} />} />
  </AvatarGroup>
);

// ═══════════════════════════════════════════════════════════════════════════
// VARIANT STORIES  (one per Figma variant)
// ═══════════════════════════════════════════════════════════════════════════

// ---------------------------------------------------------------------------
// Variant: Default
// ---------------------------------------------------------------------------

export const VariantDefault = {
  name: "Variant / Default",
  render: () => (
    <TransactionListRow
      label="Transaction Label"
      description="Description"
      timestamp="11:08"
      amount="999.000,00"
      amountPrefix="R$"
      leading={<LeadingAvatar />}
      variant="default"
      showDivider
    />
  ),
};

// ---------------------------------------------------------------------------
// Variant: Accent
// ---------------------------------------------------------------------------

export const VariantAccent = {
  name: "Variant / Accent",
  render: () => (
    <TransactionListRow
      label="Transaction Label"
      description="Description"
      timestamp="11:08"
      amount="999.000,00"
      amountPrefix="R$"
      leading={<LeadingAvatar />}
      variant="accent"
      showDivider
    />
  ),
};

// ---------------------------------------------------------------------------
// Variant: Success
// ---------------------------------------------------------------------------

export const VariantSuccess = {
  name: "Variant / Success",
  render: () => (
    <TransactionListRow
      label="Transaction Label"
      description="Description"
      timestamp="11:08"
      amount="999.000,00"
      amountPrefix="R$"
      leading={<LeadingAvatar />}
      variant="success"
      showDivider
    />
  ),
};

// ---------------------------------------------------------------------------
// Variant: Attention
// ---------------------------------------------------------------------------

export const VariantAttention = {
  name: "Variant / Attention",
  render: () => (
    <TransactionListRow
      label="Transaction Label"
      description="Description"
      timestamp="11:08"
      amount="999.000,00"
      amountPrefix="R$"
      leading={<LeadingAvatar />}
      variant="attention"
      showDivider
    />
  ),
};

// ---------------------------------------------------------------------------
// Variant: Critical
// ---------------------------------------------------------------------------

export const VariantCritical = {
  name: "Variant / Critical",
  render: () => (
    <TransactionListRow
      label="Transaction Label"
      description="Description"
      timestamp="11:08"
      amount="999.000,00"
      amountPrefix="R$"
      leading={<LeadingAvatar />}
      variant="critical"
      showDivider
    />
  ),
};

// ---------------------------------------------------------------------------
// Variant: Canceled
// ---------------------------------------------------------------------------

export const VariantCanceled = {
  name: "Variant / Canceled",
  render: () => (
    <TransactionListRow
      label="Transaction Label"
      description="Description"
      timestamp="11:08"
      amount="999.000,00"
      amountPrefix="R$"
      leading={<LeadingAvatar />}
      variant="canceled"
      showDivider
    />
  ),
};

// ═══════════════════════════════════════════════════════════════════════════
// STATE STORIES
// ═══════════════════════════════════════════════════════════════════════════

// ---------------------------------------------------------------------------
// State: Disabled
// ---------------------------------------------------------------------------

export const StateDisabled = {
  name: "State / Disabled",
  render: () => (
    <TransactionListRow
      label="Transaction Label"
      description="Description"
      timestamp="11:08"
      amount="999.000,00"
      amountPrefix="R$"
      leading={<LeadingAvatar />}
      disabled
      showDivider
    />
  ),
};

// ---------------------------------------------------------------------------
// State: Skeleton
// ---------------------------------------------------------------------------

export const StateSkeleton = {
  name: "State / Skeleton",
  render: () => (
    <TransactionListRow label="" skeleton showDivider />
  ),
};

// ═══════════════════════════════════════════════════════════════════════════
// ALL VARIANTS COMBINED (matches the Figma component frame)
// ═══════════════════════════════════════════════════════════════════════════

export const AllVariantsCombined = {
  name: "All Variants Combined",
  render: () => (
    <View>
      <TransactionListRow
        label="Transaction Label"
        description="Description"
        timestamp="11:08"
        amount="999.000,00"
        amountPrefix="R$"
        leading={<LeadingAvatar />}
        variant="default"
        showDivider
      />
      <TransactionListRow
        label="Transaction Label"
        description="Description"
        timestamp="11:08"
        amount="999.000,00"
        amountPrefix="R$"
        leading={<LeadingAvatar />}
        variant="accent"
        showDivider
      />
      <TransactionListRow
        label="Transaction Label"
        description="Description"
        timestamp="11:08"
        amount="999.000,00"
        amountPrefix="R$"
        leading={<LeadingAvatar />}
        variant="success"
        showDivider
      />
      <TransactionListRow
        label="Transaction Label"
        description="Description"
        timestamp="11:08"
        amount="999.000,00"
        amountPrefix="R$"
        leading={<LeadingAvatar />}
        variant="attention"
        showDivider
      />
      <TransactionListRow
        label="Transaction Label"
        description="Description"
        timestamp="11:08"
        amount="999.000,00"
        amountPrefix="R$"
        leading={<LeadingAvatar />}
        variant="critical"
        showDivider
      />
      <TransactionListRow
        label="Transaction Label"
        description="Description"
        timestamp="11:08"
        amount="999.000,00"
        amountPrefix="R$"
        leading={<LeadingAvatar />}
        variant="canceled"
        showDivider
      />
      <TransactionListRow
        label="Transaction Label"
        description="Description"
        timestamp="11:08"
        amount="999.000,00"
        amountPrefix="R$"
        leading={<LeadingAvatar />}
        disabled
        showDivider
      />
      <TransactionListRow label="" skeleton />
    </View>
  ),
};

// ═══════════════════════════════════════════════════════════════════════════
// SIZE STORIES
// ═══════════════════════════════════════════════════════════════════════════

// ---------------------------------------------------------------------------
// Size: Default
// ---------------------------------------------------------------------------

export const SizeDefault = {
  name: "Size / Default",
  render: () => (
    <TransactionListRow
      label="Transaction Label"
      description="Description"
      timestamp="11:08"
      amount="999.000,00"
      amountPrefix="R$"
      leading={<LeadingAvatar />}
      size="default"
      showDivider
    />
  ),
};

// ---------------------------------------------------------------------------
// Size: Small
// ---------------------------------------------------------------------------

export const SizeSmall = {
  name: "Size / Small",
  render: () => (
    <TransactionListRow
      label="Transaction Label"
      description="Description"
      timestamp="11:08"
      amount="999.000,00"
      amountPrefix="R$"
      leading={<LeadingAvatar />}
      size="small"
      showDivider
    />
  ),
};

// ---------------------------------------------------------------------------
// Size: Small — all variants
// ---------------------------------------------------------------------------

export const SizeSmallAllVariants = {
  name: "Size / Small — All Variants",
  render: () => (
    <View>
      <TransactionListRow
        label="Transaction Label"
        description="Description"
        timestamp="11:08"
        amount="999.000,00"
        amountPrefix="R$"
        leading={<LeadingAvatar />}
        size="small"
        variant="default"
        showDivider
      />
      <TransactionListRow
        label="Transaction Label"
        description="Description"
        timestamp="11:08"
        amount="999.000,00"
        amountPrefix="R$"
        leading={<LeadingAvatar />}
        size="small"
        variant="accent"
        showDivider
      />
      <TransactionListRow
        label="Transaction Label"
        description="Description"
        timestamp="11:08"
        amount="999.000,00"
        amountPrefix="R$"
        leading={<LeadingAvatar />}
        size="small"
        variant="success"
        showDivider
      />
      <TransactionListRow
        label="Transaction Label"
        description="Description"
        timestamp="11:08"
        amount="999.000,00"
        amountPrefix="R$"
        leading={<LeadingAvatar />}
        size="small"
        variant="attention"
        showDivider
      />
      <TransactionListRow
        label="Transaction Label"
        description="Description"
        timestamp="11:08"
        amount="999.000,00"
        amountPrefix="R$"
        leading={<LeadingAvatar />}
        size="small"
        variant="critical"
        showDivider
      />
      <TransactionListRow
        label="Transaction Label"
        description="Description"
        timestamp="11:08"
        amount="999.000,00"
        amountPrefix="R$"
        leading={<LeadingAvatar />}
        size="small"
        variant="canceled"
      />
    </View>
  ),
};

// ═══════════════════════════════════════════════════════════════════════════
// AMOUNT FORMAT STORIES
// ═══════════════════════════════════════════════════════════════════════════

// ---------------------------------------------------------------------------
// Amount Format: Symbol (R$ prefix)
// ---------------------------------------------------------------------------

export const AmountFormatSymbol = {
  name: "Amount Format / Symbol (R$ prefix)",
  render: () => (
    <TransactionListRow
      label="Transaction Label"
      description="Description"
      timestamp="11:08"
      amount="999.000,00"
      amountPrefix="R$"
      amountFormat="symbol"
      leading={<LeadingAvatar />}
      showDivider
    />
  ),
};

// ---------------------------------------------------------------------------
// Amount Format: Currency (BRL suffix)
// ---------------------------------------------------------------------------

export const AmountFormatCurrency = {
  name: "Amount Format / Currency (BRL suffix)",
  render: () => (
    <TransactionListRow
      label="Transaction Label"
      description="Description"
      timestamp="11:08"
      amount="999.000,00"
      amountFormat="currency"
      amountSuffix="BRL"
      leading={<LeadingAvatar />}
      showDivider
    />
  ),
};

// ---------------------------------------------------------------------------
// Amount Format: Both side by side
// ---------------------------------------------------------------------------

export const AmountFormatComparison = {
  name: "Amount Format / Symbol vs Currency",
  render: () => (
    <View>
      <TransactionListRow
        label="Symbol format"
        description="R$ prefix before amount"
        timestamp="11:08"
        amount="999.000,00"
        amountPrefix="R$"
        amountFormat="symbol"
        leading={<LeadingAvatar />}
        showDivider
      />
      <TransactionListRow
        label="Currency format"
        description="BRL suffix after amount"
        timestamp="11:08"
        amount="999.000,00"
        amountFormat="currency"
        amountSuffix="BRL"
        leading={<LeadingAvatar />}
        showDivider
      />
    </View>
  ),
};

// ═══════════════════════════════════════════════════════════════════════════
// SECONDARY AMOUNT
// ═══════════════════════════════════════════════════════════════════════════

export const WithSecondaryAmount = {
  name: "With Secondary Amount",
  render: () => (
    <TransactionListRow
      label="Transaction Label"
      description="Description"
      timestamp="11:08"
      amount="999.000,00"
      amountPrefix="R$"
      secondaryAmount="999.000,00 BRL"
      leading={<LeadingAvatar />}
      showDivider
    />
  ),
};

// ═══════════════════════════════════════════════════════════════════════════
// LEADING SLOT STORIES
// ═══════════════════════════════════════════════════════════════════════════

// ---------------------------------------------------------------------------
// Leading: Avatar (single icon)
// ---------------------------------------------------------------------------

export const LeadingSingleAvatar = {
  name: "Leading / Avatar",
  render: () => (
    <TransactionListRow
      label="Transaction Label"
      description="Description"
      timestamp="11:08"
      amount="999.000,00"
      amountPrefix="R$"
      leading={<LeadingAvatar />}
      showDivider
    />
  ),
};

// ---------------------------------------------------------------------------
// Leading: Avatar Group (diagonal)
// ---------------------------------------------------------------------------

export const LeadingAvatarGroupDiag = {
  name: "Leading / Avatar Group (Diagonal)",
  render: () => (
    <TransactionListRow
      label="Transaction Label"
      description="Description"
      timestamp="11:08"
      amount="999.000,00"
      amountPrefix="R$"
      leading={<LeadingAvatarGroupDiagonal />}
      showDivider
    />
  ),
};

// ---------------------------------------------------------------------------
// Leading: None
// ---------------------------------------------------------------------------

export const LeadingNone = {
  name: "Leading / None",
  render: () => (
    <TransactionListRow
      label="Transaction Label"
      description="Description"
      timestamp="11:08"
      amount="999.000,00"
      amountPrefix="R$"
      showDivider
    />
  ),
};

// ═══════════════════════════════════════════════════════════════════════════
// CONTENT VARIATIONS
// ═══════════════════════════════════════════════════════════════════════════

// ---------------------------------------------------------------------------
// Without timestamp
// ---------------------------------------------------------------------------

export const WithoutTimestamp = {
  name: "Content / No Timestamp",
  render: () => (
    <TransactionListRow
      label="Transaction Label"
      description="Description only"
      amount="999.000,00"
      amountPrefix="R$"
      leading={<LeadingAvatar />}
      showDivider
    />
  ),
};

// ---------------------------------------------------------------------------
// Without description
// ---------------------------------------------------------------------------

export const WithoutDescription = {
  name: "Content / No Description",
  render: () => (
    <TransactionListRow
      label="Transaction Label"
      timestamp="11:08"
      amount="999.000,00"
      amountPrefix="R$"
      leading={<LeadingAvatar />}
      showDivider
    />
  ),
};

// ---------------------------------------------------------------------------
// Label only (no description, no timestamp)
// ---------------------------------------------------------------------------

export const LabelOnly = {
  name: "Content / Label Only",
  render: () => (
    <TransactionListRow
      label="Transaction Label"
      amount="999.000,00"
      amountPrefix="R$"
      leading={<LeadingAvatar />}
      showDivider
    />
  ),
};

// ---------------------------------------------------------------------------
// Without amount
// ---------------------------------------------------------------------------

export const WithoutAmount = {
  name: "Content / No Amount",
  render: () => (
    <TransactionListRow
      label="Transaction Label"
      description="Description"
      timestamp="11:08"
      leading={<LeadingAvatar />}
      showDivider
    />
  ),
};

// ---------------------------------------------------------------------------
// Long text truncation
// ---------------------------------------------------------------------------

export const LongTextTruncation = {
  name: "Content / Long Text Truncation",
  render: () => (
    <TransactionListRow
      label="Very Long Transaction Label That Should Truncate With Ellipsis"
      description="A very long description text that should also truncate when it overflows"
      timestamp="11:08"
      amount="999.000,00"
      amountPrefix="R$"
      leading={<LeadingAvatar />}
      showDivider
    />
  ),
};

// ═══════════════════════════════════════════════════════════════════════════
// DIVIDER
// ═══════════════════════════════════════════════════════════════════════════

export const WithDivider = {
  name: "Divider / Shown",
  render: () => (
    <View>
      <TransactionListRow
        label="First row"
        description="Description"
        timestamp="11:08"
        amount="999.000,00"
        amountPrefix="R$"
        leading={<LeadingAvatar />}
        showDivider
      />
      <TransactionListRow
        label="Second row"
        description="Description"
        timestamp="11:08"
        amount="999.000,00"
        amountPrefix="R$"
        leading={<LeadingAvatar />}
        showDivider
      />
      <TransactionListRow
        label="Last row (no divider)"
        description="Description"
        timestamp="11:08"
        amount="999.000,00"
        amountPrefix="R$"
        leading={<LeadingAvatar />}
      />
    </View>
  ),
};

// ═══════════════════════════════════════════════════════════════════════════
// SKELETON — multiple rows
// ═══════════════════════════════════════════════════════════════════════════

export const SkeletonList = {
  name: "Skeleton / Loading List",
  render: () => (
    <View>
      <TransactionListRow label="" skeleton showDivider />
      <TransactionListRow label="" skeleton showDivider />
      <TransactionListRow label="" skeleton showDivider />
      <TransactionListRow label="" skeleton showDivider />
      <TransactionListRow label="" skeleton />
    </View>
  ),
};

// ═══════════════════════════════════════════════════════════════════════════
// PRESSABLE / INTERACTIVE
// ═══════════════════════════════════════════════════════════════════════════

export const Pressable = {
  name: "Interactive / Pressable",
  render: () => (
    <TransactionListRow
      label="Tap me"
      description="Has onPress handler"
      timestamp="11:08"
      amount="999.000,00"
      amountPrefix="R$"
      leading={<LeadingAvatar />}
      onPress={() => {}}
      showDivider
    />
  ),
};
