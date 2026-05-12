import React from "react";
import { Alert, ScrollView, View } from "react-native";
import {
  CheckoutBottomBar,
  NText,
  useNuDSTheme,
} from "@nu-design-org/nuds-vibecode-react-native";

export default {
  title: "Components/CheckoutBottomBar",
  component: CheckoutBottomBar,
};

const onPress = (name: string) => () => Alert.alert(name);

// ---------------------------------------------------------------------------
// Default
// ---------------------------------------------------------------------------

export const Default = {
  render: () => (
    <CheckoutBottomBar
      primaryText="R$ 150,00"
      secondaryText="in 3x of R$ 50,00"
      buttonLabel="Pay"
      onButtonPress={onPress("Pay")}
    />
  ),
};

// ---------------------------------------------------------------------------
// Primary Text Only
// ---------------------------------------------------------------------------

export const PrimaryTextOnly = {
  render: () => (
    <CheckoutBottomBar
      primaryText="R$ 99,90"
      buttonLabel="Checkout"
      onButtonPress={onPress("Checkout")}
    />
  ),
};

// ---------------------------------------------------------------------------
// Button Disabled
// ---------------------------------------------------------------------------

export const ButtonDisabled = {
  render: () => (
    <CheckoutBottomBar
      primaryText="R$ 150,00"
      secondaryText="in 3x of R$ 50,00"
      buttonLabel="Pay"
      buttonDisabled
    />
  ),
};

// ---------------------------------------------------------------------------
// Button Loading
// ---------------------------------------------------------------------------

export const ButtonLoading = {
  render: () => (
    <CheckoutBottomBar
      primaryText="R$ 150,00"
      secondaryText="Processing..."
      buttonLabel="Pay"
      buttonLoading
    />
  ),
};

// ---------------------------------------------------------------------------
// In Context — Below Content
// ---------------------------------------------------------------------------

export const InContext = {
  render: () => {
    const theme = useNuDSTheme();
    return (
      <View style={{ flex: 1, backgroundColor: theme.color.background.default }}>
        <ScrollView
          contentContainerStyle={{
            flex: 1,
            padding: theme.spacing[4],
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <NText variant="subtitleMediumStrong">Order Summary</NText>
          <NText variant="labelSmallDefault" tone="secondary">
            Review your items before paying
          </NText>
        </ScrollView>
        <CheckoutBottomBar
          primaryText="R$ 249,90"
          secondaryText="in 5x of R$ 49,98"
          buttonLabel="Confirm payment"
          onButtonPress={onPress("Confirm")}
        />
      </View>
    );
  },
};
