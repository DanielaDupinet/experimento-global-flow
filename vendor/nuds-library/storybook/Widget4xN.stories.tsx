import React from "react";
import { View } from "react-native";
import { Widget4xN } from "@nu-design-org/nuds-vibecode-react-native";

const onPress = (name: string) => () => {
  console.log(`[storybook] ${name}`);
};

export default {
  title: "Patterns/Widget4xN",
  component: Widget4xN,
};

// ---------------------------------------------------------------------------
// Default
// ---------------------------------------------------------------------------

export const Default = {
  render: () => (
    <Widget4xN
      variant="default"
      overline="Cashback"
      title="$341.75"
      description="$34.90 in the last 30 days"
      onPress={onPress("default-press")}
    />
  ),
};

// ---------------------------------------------------------------------------
// Default — Large Title
// ---------------------------------------------------------------------------

export const DefaultLargeTitle = {
  render: () => (
    <Widget4xN
      variant="default"
      overline="Total Balance"
      title="$12,450.00"
      description="Updated just now"
      largeTitle
      onPress={onPress("large-title-press")}
    />
  ),
};

// ---------------------------------------------------------------------------
// Default — Performance Up
// ---------------------------------------------------------------------------

export const PerformanceUp = {
  render: () => (
    <Widget4xN
      variant="default"
      overline="Investments"
      title="$8,200.50"
      description="11.08%"
      descriptionType="performanceUp"
      largeTitle
      onPress={onPress("perf-up-press")}
    />
  ),
};

// ---------------------------------------------------------------------------
// Default — Performance Down
// ---------------------------------------------------------------------------

export const PerformanceDown = {
  render: () => (
    <Widget4xN
      variant="default"
      overline="Crypto"
      title="$1,030.22"
      description="11.08%"
      descriptionType="performanceDown"
      onPress={onPress("perf-down-press")}
    />
  ),
};

// ---------------------------------------------------------------------------
// Default — With Buttons (Hug layout)
// ---------------------------------------------------------------------------

export const DefaultWithButtons = {
  render: () => (
    <Widget4xN
      variant="default"
      overline="Savings"
      title="$2,500.00"
      description="Earn 5.2% APY"
      buttonLayout="hug"
      buttons={[
        { key: "deposit", label: "Deposit", onPress: onPress("deposit"), type: "Primary" },
        { key: "details", label: "Details", onPress: onPress("details"), type: "Secondary" },
      ]}
    />
  ),
};

// ---------------------------------------------------------------------------
// Default — Buttons Fill layout
// ---------------------------------------------------------------------------

export const DefaultButtonsFill = {
  render: () => (
    <Widget4xN
      variant="default"
      overline="Offer"
      title="Personal loan pre-approved"
      description="Up to $15,000"
      buttonLayout="fill"
      buttons={[
        { key: "apply", label: "Apply now", onPress: onPress("apply"), type: "Primary" },
        { key: "dismiss", label: "Dismiss", onPress: onPress("dismiss"), type: "Secondary" },
      ]}
    />
  ),
};

// ---------------------------------------------------------------------------
// Default — Buttons Fill + Hug layout
// ---------------------------------------------------------------------------

export const DefaultButtonsFillHug = {
  render: () => (
    <Widget4xN
      variant="default"
      overline="Insurance"
      title="Life insurance"
      description="Coverage from $5/mo"
      buttonLayout="fillHug"
      buttons={[
        { key: "learn", label: "Learn more", onPress: onPress("learn"), type: "Primary" },
        { key: "skip", label: "Skip", onPress: onPress("skip"), type: "Secondary" },
      ]}
    />
  ),
};

// ---------------------------------------------------------------------------
// Stepped
// ---------------------------------------------------------------------------

export const Stepped = {
  render: () => (
    <Widget4xN
      variant="stepped"
      overline="Daily summary"
      title="Track your progress"
      description="You are close to your goal"
      currentStep={2}
      totalSteps={4}
      buttons={[
        { key: "continue", label: "Continue", onPress: onPress("continue"), type: "Primary" },
        { key: "skip", label: "Skip", onPress: onPress("skip"), type: "Secondary" },
      ]}
    />
  ),
};

// ---------------------------------------------------------------------------
// Determinate
// ---------------------------------------------------------------------------

export const Determinate = {
  render: () => (
    <Widget4xN
      variant="determinate"
      overline="Weekly progress"
      title="Spend tracking"
      description="You are at 64% of your goal"
      progress={64}
      progressLabel="Target"
    />
  ),
};

// ---------------------------------------------------------------------------
// List — Basic
// ---------------------------------------------------------------------------

export const List = {
  render: () => (
    <Widget4xN
      variant="list"
      title="Quick actions"
      description="Common tasks"
      listItems={[
        {
          key: "transfer",
          label: "Transfer money",
          description: "Send to contacts",
          onPress: onPress("transfer"),
        },
        {
          key: "bills",
          label: "Pay bills",
          description: "Manage payments",
          onPress: onPress("bills"),
        },
      ]}
      buttons={[
        { key: "see-all", label: "See all", onPress: onPress("see-all"), type: "Secondary" },
      ]}
    />
  ),
};

// ---------------------------------------------------------------------------
// List — Rich (secondary content, performance, inverted hierarchy)
// ---------------------------------------------------------------------------

export const ListRich = {
  render: () => (
    <Widget4xN
      variant="list"
      overline="Portfolio"
      title="Your investments"
      listItems={[
        {
          key: "nubank",
          label: "Nu Savings",
          description: "Fixed income",
          secLabel: "$4,200.00",
          secDescription: "+11.08%",
          secDescriptionType: "success",
          image: { uri: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=64&h=64&q=80" },
          onPress: onPress("nubank"),
        },
        {
          key: "stocks",
          label: "AAPL",
          description: "Apple Inc.",
          secLabel: "$1,350.00",
          secDescription: "-2.3%",
          secDescriptionType: "critical",
          image: { uri: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=64&h=64&q=80" },
          onPress: onPress("stocks"),
        },
        {
          key: "crypto",
          label: "Bitcoin",
          description: "$62,400",
          secLabel: "0.015 BTC",
          secDescription: "+5.2%",
          secDescriptionType: "performance",
          invertHierarchy: true,
          image: { uri: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=64&h=64&q=80" },
          onPress: onPress("crypto"),
        },
      ]}
      buttons={[
        { key: "see-all", label: "See all", onPress: onPress("see-all"), type: "Secondary" },
      ]}
    />
  ),
};

// ---------------------------------------------------------------------------
// Cross Sell
// ---------------------------------------------------------------------------

export const CrossSell = {
  render: () => (
    <Widget4xN
      variant="crossSell"
      artworkImage={{
        uri: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=1200&q=80",
      }}
      overline="New feature"
      title="Try our investment tools"
      description="Start growing your money today"
      onPress={onPress("cross-sell")}
    />
  ),
};

// ---------------------------------------------------------------------------
// All Variants (overview)
// ---------------------------------------------------------------------------

export const AllVariants = {
  render: () => (
    <View style={{ gap: 16 }}>
      <Widget4xN
        variant="default"
        overline="Cashback"
        title="$341.75"
        description="$34.90 in the last 30 days"
      />
      <Widget4xN
        variant="default"
        overline="Investments"
        title="$8,200.50"
        description="11.08%"
        descriptionType="performanceUp"
        largeTitle
      />
      <Widget4xN
        variant="default"
        overline="Crypto"
        title="$1,030.22"
        description="11.08%"
        descriptionType="performanceDown"
      />
      <Widget4xN
        variant="stepped"
        overline="Setup"
        title="Complete your profile"
        description="Step 1 of 3"
        currentStep={1}
        totalSteps={3}
      />
      <Widget4xN
        variant="determinate"
        overline="Goal"
        title="Emergency fund"
        description="Almost there!"
        progress={78}
        progressLabel="78% complete"
      />
    </View>
  ),
};
