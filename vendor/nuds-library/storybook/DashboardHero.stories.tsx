import React from "react";
import { DashboardHero } from "@nu-design-org/nuds-vibecode-react-native";

export default {
  title: "Patterns/DashboardHero",
  component: DashboardHero
};

export const Default = {
  render: () => (
    <DashboardHero
      balance="$12,948.22"
      dueDate="Sep 28"
      showAutopay
      autopayDate="Oct 10"
      autopayStatus="attention"
      enableRotation
    />
  )
};
