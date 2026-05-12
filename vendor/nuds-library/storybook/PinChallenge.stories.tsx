import React, { useState } from "react";
import { View } from "react-native";
import { PinChallenge, Button, NText, useNuDSTheme } from "@nu-design-org/nuds-vibecode-react-native";

export default {
  title: "Patterns/PinChallenge",
  component: PinChallenge
};

export const Default = {
  render: () => {
    const [visible, setVisible] = useState(false);
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center", padding: 32 }}>
        <Button label="Enter PIN" onPress={() => setVisible(true)} />
        <PinChallenge
          visible={visible}
          onClose={() => setVisible(false)}
          onComplete={(pin) => {
            console.log("[storybook] PIN entered:", pin);
            setVisible(false);
          }}
        />
      </View>
    );
  }
};

export const WithError = {
  name: "With Error Flow",
  render: () => {
    const [visible, setVisible] = useState(false);
    const [error, setError] = useState<string | false>(false);

    const handleComplete = (pin: string) => {
      if (pin !== "1234") {
        setError("Incorrect PIN. Please try again.");
        setTimeout(() => setError(false), 1500);
      } else {
        setVisible(false);
      }
    };

    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center", padding: 32, gap: 16 }}>
        <NText variant="labelSmallDefault" tone="secondary">
          Correct PIN is 1234
        </NText>
        <Button label="Confirm Payment" onPress={() => setVisible(true)} />
        <PinChallenge
          visible={visible}
          onClose={() => setVisible(false)}
          onComplete={handleComplete}
          error={error}
          helperText="Enter your PIN to confirm"
        />
      </View>
    );
  }
};

export const CustomTitle = {
  name: "Custom Title",
  render: () => {
    const [visible, setVisible] = useState(false);
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center", padding: 32 }}>
        <Button label="Authorize Transfer" onPress={() => setVisible(true)} />
        <PinChallenge
          visible={visible}
          onClose={() => setVisible(false)}
          title="Authorize this transfer"
          onComplete={(pin) => {
            console.log("[storybook] PIN:", pin);
            setVisible(false);
          }}
        />
      </View>
    );
  }
};

export const SixDigits = {
  name: "6-Digit PIN",
  render: () => {
    const [visible, setVisible] = useState(false);
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center", padding: 32 }}>
        <Button label="Enter 6-Digit PIN" onPress={() => setVisible(true)} />
        <PinChallenge
          visible={visible}
          onClose={() => setVisible(false)}
          length={6}
          onComplete={(pin) => {
            console.log("[storybook] 6-digit PIN:", pin);
            setVisible(false);
          }}
          helperText="Enter your 6-digit code"
        />
      </View>
    );
  }
};
