import React, { useState } from "react";
import { View } from "react-native";
import { PinCode, Button, NText, useNuDSTheme } from "@nu-design-org/nuds-vibecode-react-native";

export default {
  title: "Components/PinCode",
  component: PinCode
};

export const Default = {
  render: () => {
    const [value, setValue] = useState("");
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center", padding: 32 }}>
        <PinCode
          value={value}
          onChange={setValue}
          onComplete={(pin) => console.log("[storybook] PIN entered:", pin)}
          helperText="Enter your 4-digit PIN"
        />
      </View>
    );
  }
};

export const Filled = {
  render: () => {
    const [value, setValue] = useState("1234");
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center", padding: 32 }}>
        <PinCode
          value={value}
          onChange={setValue}
          helperText="All digits entered"
        />
      </View>
    );
  }
};

export const ErrorState = {
  name: "Error",
  render: () => {
    const [value, setValue] = useState("1234");
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center", padding: 32 }}>
        <PinCode
          value={value}
          onChange={setValue}
          error="Incorrect PIN. Please try again."
        />
      </View>
    );
  }
};

export const Interactive = {
  name: "Interactive Flow",
  render: () => {
    const [value, setValue] = useState("");
    const [error, setError] = useState<string | false>(false);
    const theme = useNuDSTheme();

    const handleComplete = (pin: string) => {
      console.log("[storybook] PIN complete:", pin);
      if (pin !== "1234") {
        setError("Incorrect PIN. Please try again.");
        setTimeout(() => {
          setValue("");
          setError(false);
        }, 1500);
      }
    };

    const handleChange = (v: string) => {
      setError(false);
      setValue(v);
    };

    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center", padding: 32, gap: 24 }}>
        <NText variant="labelSmallStrong" style={{ color: theme.color.content.subtle }}>
          Try entering 1234 to succeed, anything else triggers error
        </NText>
        <PinCode
          value={value}
          onChange={handleChange}
          onComplete={handleComplete}
          error={error}
          helperText="Enter your PIN"
        />
        <Button
          label="Reset"
          variant="secondary"
          onPress={() => { setValue(""); setError(false); }}
        />
      </View>
    );
  }
};

export const SixDigits = {
  name: "6-Digit PIN",
  render: () => {
    const [value, setValue] = useState("");
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center", padding: 32 }}>
        <PinCode
          value={value}
          onChange={setValue}
          length={6}
          onComplete={(pin) => console.log("[storybook] 6-digit PIN:", pin)}
          helperText="Enter your 6-digit code"
        />
      </View>
    );
  }
};
