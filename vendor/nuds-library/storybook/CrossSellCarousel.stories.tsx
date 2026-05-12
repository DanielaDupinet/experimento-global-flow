import React from "react";
import { Alert, View } from "react-native";
import {
  CrossSellCarousel,
  useNuDSTheme,
  RecurringPaymentsIcon,
  BoltIcon,
  LineChartIcon,
} from "@nu-design-org/nuds-vibecode-react-native";

export default {
  title: "Patterns/CrossSellCarousel",
  component: CrossSellCarousel,
};

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

const useOfferItems = () => {
  const theme = useNuDSTheme();
  const iconColor = theme.color.content.decorative["05"];
  return [
    {
      key: "autopay",
      icon: <RecurringPaymentsIcon size={20} color={iconColor} />,
      text: "Set up Autopay.",
      description: "Never miss a card payment",
      onPress: () => console.log("[storybook] autopay tapped"),
      onDismiss: () => console.log("[storybook] autopay dismissed"),
    },
    {
      key: "direct-deposit",
      icon: <BoltIcon size={20} color={iconColor} />,
      text: "Set up your direct deposit.",
      description: "Boost your cashback to 2%",
      onPress: () => console.log("[storybook] direct-deposit tapped"),
      onDismiss: () => console.log("[storybook] direct-deposit dismissed"),
    },
    {
      key: "savings",
      icon: <LineChartIcon size={20} color={iconColor} />,
      text: "Set money aside.",
      description: "Increase your limit and earn 3% APR",
      onPress: () => console.log("[storybook] savings tapped"),
      onDismiss: () => console.log("[storybook] savings dismissed"),
    },
  ];
};

// ---------------------------------------------------------------------------
// With Section Title — Dismissible (tap × to dismiss, title hides too)
// ---------------------------------------------------------------------------

export const WithSectionTitleDismissible = {
  render: () => {
    const items = useOfferItems();
    return (
      <CrossSellCarousel
        sectionTitle="Offers"
        items={items}
        dismissible
        onAllDismissed={() =>
          Alert.alert("All dismissed", "Section title and carousel are gone!")
        }
      />
    );
  },
};

// ---------------------------------------------------------------------------
// With Section Title — Non-dismissible
// ---------------------------------------------------------------------------

export const WithSectionTitleNonDismissible = {
  render: () => {
    const items = useOfferItems();
    return <CrossSellCarousel sectionTitle="Offers" items={items} />;
  },
};

// ---------------------------------------------------------------------------
// Dismissible — 3 Offers (no section title)
// ---------------------------------------------------------------------------

export const DismissibleThreeOffers = {
  render: () => {
    const items = useOfferItems();
    return (
      <CrossSellCarousel
        items={items}
        dismissible
        onAllDismissed={() =>
          Alert.alert("All dismissed", "The carousel has collapsed!")
        }
      />
    );
  },
};

// ---------------------------------------------------------------------------
// Dismissible — 2 Offers
// ---------------------------------------------------------------------------

export const DismissibleTwoOffers = {
  render: () => {
    const items = useOfferItems().slice(0, 2);
    return (
      <CrossSellCarousel
        items={items}
        dismissible
        onAllDismissed={() => console.log("[storybook] all dismissed")}
      />
    );
  },
};

// ---------------------------------------------------------------------------
// Dismissible — Single Offer (full width)
// ---------------------------------------------------------------------------

export const DismissibleSingleOffer = {
  render: () => {
    const items = useOfferItems().slice(0, 1);
    return (
      <CrossSellCarousel
        items={items}
        dismissible
        onAllDismissed={() => console.log("[storybook] all dismissed")}
      />
    );
  },
};

// ---------------------------------------------------------------------------
// Non-dismissible — 3 Offers (no × button)
// ---------------------------------------------------------------------------

export const NonDismissibleThreeOffers = {
  render: () => {
    const items = useOfferItems();
    return <CrossSellCarousel items={items} />;
  },
};

// ---------------------------------------------------------------------------
// Non-dismissible — Single Offer
// ---------------------------------------------------------------------------

export const NonDismissibleSingleOffer = {
  render: () => {
    const items = useOfferItems().slice(0, 1);
    return <CrossSellCarousel items={items} />;
  },
};

// ---------------------------------------------------------------------------
// Compact (2×2) — Small grid-sized cards
// ---------------------------------------------------------------------------

export const CompactSize = {
  render: () => {
    const theme = useNuDSTheme();
    const iconColor = theme.color.content.decorative["05"];
    return (
      <CrossSellCarousel
        size="compact"
        sectionTitle="Quick offers"
        items={[
          {
            key: "invest",
            icon: <LineChartIcon size={20} color={iconColor} />,
            text: "Start investing today",
            onPress: () => console.log("[storybook] invest tapped"),
          },
          {
            key: "insurance",
            icon: <BoltIcon size={20} color={iconColor} />,
            text: "Get life insurance",
            onPress: () => console.log("[storybook] insurance tapped"),
          },
          {
            key: "credit",
            icon: <RecurringPaymentsIcon size={20} color={iconColor} />,
            text: "Increase your limit",
            onPress: () => console.log("[storybook] credit tapped"),
          },
        ]}
      />
    );
  },
};

// ---------------------------------------------------------------------------
// Different Color Schemes
// ---------------------------------------------------------------------------

export const ColorSchemes = {
  render: () => {
    const theme = useNuDSTheme();
    const schemes = ["01", "02", "03", "04", "05", "06"] as const;
    const schemeColors = {
      "01": theme.color.content.decorative["01"],
      "02": theme.color.content.decorative["02"],
      "03": theme.color.content.decorative["03"],
      "04": theme.color.content.decorative["04"],
      "05": theme.color.content.decorative["05"],
      "06": theme.color.content.decorative["06"],
    };
    return (
      <View style={{ gap: 16 }}>
        {schemes.map((scheme) => (
          <CrossSellCarousel
            key={scheme}
            colorScheme={scheme}
            sectionTitle={`Scheme ${scheme}`}
            items={[
              {
                key: `offer-${scheme}`,
                icon: <BoltIcon size={20} color={schemeColors[scheme]} />,
                text: "This is a cross-sell message.",
                description: "It can have up to two lines.",
              },
            ]}
          />
        ))}
      </View>
    );
  },
};
