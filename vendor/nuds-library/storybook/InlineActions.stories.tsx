import React from "react";
import { CheckIcon, InlineActions, SettingsIcon, CashbackIcon, HorizontalCardCollateralIcon } from "@nu-design-org/nuds-vibecode-react-native";

const onPress = (name: string) => () => {
  console.log(`[storybook] ${name}`);
};

export default {
  title: "Components/InlineActions",
  component: InlineActions
};

// 1 item — single pill button (Secondary)
export const SingleItem = {
  render: () => (
    <InlineActions
      variant="single"
      actions={[
        {
          key: "pay",
          label: "Pay now",
          type: "Secondary",
          icon: <CheckIcon size={20} />,
          onPress: onPress("pay")
        }
      ]}
    />
  )
};

// 1 item — single pill button (Primary)
export const SingleItemPrimary = {
  render: () => (
    <InlineActions
      variant="single"
      actions={[
        {
          key: "pay",
          label: "Pay now",
          type: "Primary",
          icon: <CheckIcon size={20} color="white" />,
          onPress: onPress("pay")
        }
      ]}
    />
  )
};

// 2 items
export const TwoItems = {
  render: () => (
    <InlineActions
      actions={[
        { key: "pay", label: "Pay", type: "Secondary", onPress: onPress("pay"), icon: <HorizontalCardCollateralIcon size={20} /> },
        { key: "settings", label: "Settings", type: "Secondary", onPress: onPress("settings"), icon: <SettingsIcon size={20} /> }
      ]}
    />
  )
};

// 3 items
export const ThreeItems = {
  render: () => (
    <InlineActions
      actions={[
        { key: "pay", label: "Pay", type: "Primary", onPress: onPress("pay"), icon: <CheckIcon size={20} color="white" /> },
        { key: "share", label: "Share", type: "Secondary", onPress: onPress("share"), notification: true, icon: <CashbackIcon size={20} /> },
        { key: "offers", label: "Offers", type: "Secondary", onPress: onPress("offers"), badge: true, badgeLabel: "New", icon: <SettingsIcon size={20} /> }
      ]}
    />
  )
};

// 4 items
export const FourItems = {
  render: () => (
    <InlineActions
      actions={[
        { key: "pay", label: "Pay", type: "Secondary", onPress: onPress("pay"), icon: <CheckIcon size={20} /> },
        { key: "share", label: "Share", type: "Secondary", onPress: onPress("share"), icon: <CashbackIcon size={20} /> },
        { key: "offers", label: "Offers", type: "Secondary", onPress: onPress("offers"), icon: <SettingsIcon size={20} /> },
        { key: "transfer", label: "Transfer", type: "Secondary", onPress: onPress("transfer"), icon: <HorizontalCardCollateralIcon size={20} /> }
      ]}
    />
  )
};

// More — with built-in ActionSheet modal
export const WithMoreModal = {
  render: () => (
    <InlineActions
      actions={[
        { key: "pay", label: "Pay", type: "Secondary", onPress: onPress("pay"), icon: <CheckIcon size={20} /> },
        { key: "share", label: "Share", type: "Secondary", onPress: onPress("share"), icon: <CashbackIcon size={20} /> },
        { key: "offers", label: "Offers", type: "Secondary", onPress: onPress("offers"), icon: <SettingsIcon size={20} /> }
      ]}
      showMore
      moreActions={[
        { key: "transfer", label: "Transfer money", icon: <HorizontalCardCollateralIcon size={20} />, onPress: onPress("transfer") },
        { key: "cashback", label: "View cashback", icon: <CashbackIcon size={20} />, onPress: onPress("cashback") },
        { key: "settings", label: "Settings", icon: <SettingsIcon size={20} />, onPress: onPress("settings") }
      ]}
    />
  )
};
