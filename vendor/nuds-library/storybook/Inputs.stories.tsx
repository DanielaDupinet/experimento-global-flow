import React, { useState } from "react";
import { View } from "react-native";
import {
  Select,
  TextField,
  useNuDSTheme,
  SearchIcon,
  CloseMiniIcon,
} from "@nu-design-org/nuds-vibecode-react-native";

const onPress = (name: string) => () => {
  console.log(`[storybook] ${name}`);
};

export default {
  title: "Components/Inputs",
};

// ---------------------------------------------------------------------------
// TextField — All States (Regular type)
// ---------------------------------------------------------------------------

export const TextFieldAllStates = {
  render: () => (
    <View style={{ gap: 24 }}>
      <TextField label="Label" placeholder="Placeholder" />
      <TextField label="Label" placeholder="Placeholder" value="" autoFocus />
      <TextField label="Label" value="Value" />
      <TextField
        label="Label"
        value="Value"
        error="Helper text"
      />
      <TextField label="Label" placeholder="Placeholder" editable={false} />
    </View>
  ),
};

// ---------------------------------------------------------------------------
// TextField — Small type
// ---------------------------------------------------------------------------

export const TextFieldSmall = {
  render: () => (
    <View style={{ gap: 24 }}>
      <TextField type="small" label="Label" placeholder="Placeholder" />
      <TextField type="small" label="Label" value="Value" />
      <TextField
        type="small"
        label="Label"
        value="Value"
        error="Helper text"
      />
      <TextField
        type="small"
        label="Label"
        placeholder="Placeholder"
        editable={false}
      />
    </View>
  ),
};

// ---------------------------------------------------------------------------
// TextField — Large type (no label)
// ---------------------------------------------------------------------------

export const TextFieldLarge = {
  render: () => (
    <View style={{ gap: 24 }}>
      <TextField type="large" placeholder="Placeholder" />
      <TextField type="large" value="Value" />
      <TextField type="large" value="Value" error="Helper text" />
      <TextField type="large" placeholder="Placeholder" editable={false} />
    </View>
  ),
};

// ---------------------------------------------------------------------------
// TextField — Multiline
// ---------------------------------------------------------------------------

export const TextFieldMultiline = {
  render: () => (
    <View style={{ gap: 24 }}>
      <TextField type="multiline" label="Label" placeholder="Placeholder" />
      <TextField type="multiline" label="Label" value="Value" />
      <TextField
        type="multiline"
        label="Label"
        value="Value"
        error="Helper text"
      />
      <TextField
        type="multiline"
        label="Label"
        placeholder="Placeholder"
        editable={false}
      />
    </View>
  ),
};

// ---------------------------------------------------------------------------
// TextField — With Leading Value (currency)
// ---------------------------------------------------------------------------

export const TextFieldCurrency = {
  render: () => (
    <View style={{ gap: 24 }}>
      <TextField label="Amount" leadingValue="R$" placeholder="0,00" />
      <TextField label="Amount" leadingValue="R$" value="1.250,00" />
      <TextField label="Amount" leadingValue="$" value="500.00" />
    </View>
  ),
};

// ---------------------------------------------------------------------------
// TextField — With Icons
// ---------------------------------------------------------------------------

export const TextFieldWithIcons = {
  render: () => {
    const theme = useNuDSTheme();
    return (
      <View style={{ gap: 24 }}>
        <TextField
          label="Search"
          placeholder="Search..."
          leadingIcon={
            <SearchIcon size={20} color={theme.color.content.subtle} />
          }
        />
        <TextField
          label="Name"
          value="John Doe"
          trailingIcon={
            <CloseMiniIcon size={20} color={theme.color.content.subtle} />
          }
        />
      </View>
    );
  },
};

// ---------------------------------------------------------------------------
// TextField — With Character Counter
// ---------------------------------------------------------------------------

export const TextFieldWithCounter = {
  render: () => {
    const [value, setValue] = useState("");
    const maxLen = 140;
    return (
      <View style={{ gap: 24 }}>
        <TextField
          label="Bio"
          placeholder="Tell us about yourself"
          value={value}
          onChangeText={setValue}
          characterCount={`${value.length} / ${maxLen}`}
          helperText="Keep it short and sweet"
        />
      </View>
    );
  },
};

// ---------------------------------------------------------------------------
// TextField — With Suggestions
// ---------------------------------------------------------------------------

export const TextFieldWithSuggestions = {
  render: () => {
    const [value, setValue] = useState("");
    return (
      <View style={{ gap: 24 }}>
        <TextField
          label="Email"
          placeholder="your@email.com"
          value={value}
          onChangeText={setValue}
          suggestions={[
            { key: "gmail", label: "@gmail.com" },
            { key: "hotmail", label: "@hotmail.com" },
            { key: "outlook", label: "@outlook.com" },
            { key: "yahoo", label: "@yahoo.com" },
            { key: "icloud", label: "@icloud.com" },
          ]}
          onSuggestionPress={(s) => {
            const base = value.split("@")[0] || "";
            setValue(base + s.label);
          }}
        />
      </View>
    );
  },
};

// ---------------------------------------------------------------------------
// TextField — Interactive
// ---------------------------------------------------------------------------

export const TextFieldInteractive = {
  render: () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [bio, setBio] = useState("");
    return (
      <View style={{ gap: 24 }}>
        <TextField
          label="Full name"
          placeholder="Type your name"
          value={name}
          onChangeText={setName}
        />
        <TextField
          label="Email"
          placeholder="email@domain.com"
          value={email}
          onChangeText={setEmail}
          helperText="We never share your email"
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextField
          type="multiline"
          label="About you"
          placeholder="A short bio..."
          value={bio}
          onChangeText={setBio}
          characterCount={`${bio.length} / 200`}
        />
      </View>
    );
  },
};

// ---------------------------------------------------------------------------
// Select
// ---------------------------------------------------------------------------

export const SelectStates = {
  render: () => (
    <View style={{ gap: 12 }}>
      <Select
        label="Category"
        placeholder="Choose category"
        options={[
          { value: "food", label: "Food" },
          { value: "travel", label: "Travel" },
        ]}
        onPress={onPress("select-open")}
      />
      <Select
        label="Category"
        value="food"
        options={[
          { value: "food", label: "Food" },
          { value: "travel", label: "Travel" },
        ]}
        onPress={onPress("select-open-value")}
      />
      <Select
        label="With error"
        error="Please select an option"
        onPress={onPress("select-open-error")}
      />
    </View>
  ),
};

