import React from "react";
import { View } from "react-native";
import { DashboardHero, Hero, LimitBar, Widget2x2, Widget4xN } from "@nu-design-org/nuds-vibecode-react-native";

const onPress = (name: string) => () => {
  console.log(`[storybook] ${name}`);
};

export default {
  title: "Patterns/Dashboard"
};

export const DashboardPatterns = {
  render: () => (
    <View style={{ gap: 16 }}>
      <DashboardHero
        balance="$12,948.22"
        dueDate="Sep 28"
        showAutopay
        autopayDate="Oct 10"
        autopayStatus="attention"
        enableRotation
      />
      <LimitBar availableAmount={1800} totalLimit={5000} onManagePress={onPress("manage-limit")} />
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
      <Widget4xN
        variant="stepped"
        overline="Daily summary"
        title="Track your progress"
        description="You are close to your goal"
        currentStep={2}
        totalSteps={4}
        buttons={[
          { key: "continue", label: "Continue", onPress: onPress("continue"), type: "Primary" },
          { key: "skip", label: "Skip", onPress: onPress("skip"), type: "Secondary" }
        ]}
      />
      <Hero
        overline="For you"
        title="Hero offer"
        description="Accent card pattern for primary CTAs."
        buttons={[
          { key: "primary", label: "Primary action", onPress: onPress("hero-primary"), type: "Primary" },
          { key: "secondary", label: "Secondary", onPress: onPress("hero-secondary"), type: "Secondary" }
        ]}
      />
    </View>
  )
};
