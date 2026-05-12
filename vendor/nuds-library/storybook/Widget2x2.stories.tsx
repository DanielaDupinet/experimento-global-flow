import React from "react";
import { View } from "react-native";
import { Widget2x2, RecurringPaymentsIcon, LineChartIcon, useNuDSTheme } from "@nu-design-org/nuds-vibecode-react-native";

const onPress = (name: string) => () => {
  console.log(`[storybook] ${name}`);
};

export default {
  title: "Patterns/Widget2x2",
  component: Widget2x2
};

export const Default = {
  render: () => <Widget2x2 overline="Savings" title="$5,678.90" description="Available balance" />
};

export const ListVariant = {
  render: () => (
    <Widget2x2
      variant="list2"
      overline="Highlights"
      title="Summary"
      description="2 new updates"
      listItems={[
        { key: "income", label: "Income", description: "$5,480", onPress: onPress("income") },
        { key: "spent", label: "Spent", description: "$2,180", onPress: onPress("spent") },
        { key: "savings", label: "Savings", description: "$1,900", onPress: onPress("savings") }
      ]}
    />
  )
};

export const ButtonVariant = {
  render: () => (
    <Widget2x2
      variant="button"
      overline="Promotion"
      title="Exclusive offer"
      description="Limited time"
      buttonLabel="Claim now"
      onButtonPress={onPress("claim-now")}
    />
  )
};

export const Pair = {
  render: () => {
    const theme = useNuDSTheme();
    return (
      <View style={{ flexDirection: "row", gap: 12, paddingHorizontal: theme.spacing[4], width: "100%" }}>
        <Widget2x2
          overline=""
          title="Turn on autopay"
          description=""
          showLeading={true}
          leadingContent={<RecurringPaymentsIcon size={20} color={theme.color.content.default} />}
          onPress={onPress("autopay")}
        />
        <Widget2x2
          overline=""
          title="See statements & activity"
          description=""
          showLeading={true}
          leadingContent={<LineChartIcon size={20} color={theme.color.content.default} />}
          onPress={onPress("statements")}
        />
      </View>
    );
  }
};

export const List3WithButton = {
  render: () => (
    <Widget2x2
      variant="list3"
      overline="Recent"
      title="Activity"
      description="3 updates"
      listItems={[
        { key: "a", label: "Pix", description: "Completed", onPress: onPress("pix") },
        { key: "b", label: "Card", description: "Pending", onPress: onPress("card") },
        { key: "c", label: "Bill", description: "Due soon", onPress: onPress("bill") }
      ]}
      buttonLabel="View all"
      onButtonPress={onPress("view-all")}
    />
  )
};
