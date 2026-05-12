# Component Patterns & Templates

Concrete code templates for creating and extending things in the NuDS library.

---

## Creating a New Component

### File structure

```
packages/react-native/src/components/MyComponent/
├── MyComponent.tsx   # Implementation
├── styles.ts         # Optional — static StyleSheet styles
└── index.ts          # Barrel export
```

### index.ts

```typescript
export { MyComponent } from "./MyComponent";
export type { MyComponentProps } from "./MyComponent";
```

### MyComponent.tsx — minimal template

```typescript
import React from "react";
import { Pressable, View } from "react-native";
import type { PressableProps, ViewStyle } from "react-native";
import { NText } from "../../primitives/Text";
import { useNuDSTheme } from "../../theme";

type MyComponentVariant = "primary" | "secondary";

export type MyComponentProps = Omit<PressableProps, "style"> & {
  /** Visual variant */
  variant?: MyComponentVariant;
  /** Main label */
  label: string;
  /** Optional secondary text */
  caption?: string;
  style?: ViewStyle | ViewStyle[];
};

export const MyComponent = ({
  variant = "primary",
  label,
  caption,
  disabled,
  style,
  ...rest
}: MyComponentProps) => {
  const theme = useNuDSTheme();

  const backgroundColor =
    variant === "primary"
      ? theme.color.background.primary
      : theme.color.background.secondary;

  return (
    <Pressable
      accessibilityRole="button"
      disabled={disabled}
      style={[
        {
          backgroundColor,
          borderRadius: theme.radius.md,
          padding: theme.spacing[4],
          gap: theme.spacing[1],
        },
        disabled && { opacity: 0.6 },
        style,
      ]}
      {...rest}
    >
      <NText variant="bodyMediumStrong" tone="primary">
        {label}
      </NText>
      {caption ? (
        <NText variant="labelSmallDefault" tone="secondary">
          {caption}
        </NText>
      ) : null}
    </Pressable>
  );
};
```

### styles.ts — optional static styles

Use `StyleSheet.create` for styles that don't depend on the theme. Theme-dependent values stay inline using the `theme` object.

```typescript
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  root: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  disabled: {
    opacity: 0.6,
  },
});
```

### Register the export

Add to `packages/react-native/src/index.ts`:

```typescript
export * from "./components/MyComponent";
```

---

## Creating a New Primitive

Primitives are rare. Only create one when wrapping a React Native core element that multiple components will reuse.

### Template

```typescript
import React from "react";
import { TextInput } from "react-native";
import type { TextInputProps, TextStyle } from "react-native";
import { useNuDSTheme } from "../../theme";

export type NTextInputProps = TextInputProps & {
  tone?: "primary" | "secondary";
  style?: TextStyle | TextStyle[];
};

export const NTextInput = ({
  tone = "primary",
  style,
  ...rest
}: NTextInputProps) => {
  const theme = useNuDSTheme();

  return (
    <TextInput
      placeholderTextColor={theme.color.content.secondary}
      style={[
        theme.typography.bodyMediumDefault,
        {
          color:
            tone === "primary"
              ? theme.color.content.primary
              : theme.color.content.secondary,
        },
        style,
      ]}
      {...rest}
    />
  );
};
```

Place in `primitives/NTextInput/` with `index.ts`. Export from `packages/react-native/src/index.ts`.

---

## Creating a New Pattern

Patterns live in `packages/react-native/src/patterns/` and are composite layouts.

### Template

```typescript
import React from "react";
import { View } from "react-native";
import type { ViewProps, ViewStyle } from "react-native";
import { Box } from "../../primitives/Box";
import { NText } from "../../primitives/Text";
import { Button } from "../../components/Button";
import { useNuDSTheme } from "../../theme";

export type MyPatternProps = ViewProps & {
  title: string;
  description?: string;
  actionLabel?: string;
  onAction?: () => void;
  style?: ViewStyle | ViewStyle[];
};

export const MyPattern = ({
  title,
  description,
  actionLabel,
  onAction,
  style,
  ...rest
}: MyPatternProps) => {
  const theme = useNuDSTheme();

  return (
    <Box
      surface="primary"
      style={[
        {
          borderRadius: theme.radius.lg,
          padding: theme.spacing[4],
          gap: theme.spacing[3],
          ...theme.elevation.level1,
          shadowColor: theme.color.content.primary,
        },
        style,
      ]}
      {...rest}
    >
      <NText variant="titleSmall">{title}</NText>
      {description ? (
        <NText variant="bodyMediumDefault" tone="secondary">
          {description}
        </NText>
      ) : null}
      {actionLabel ? (
        <Button
          label={actionLabel}
          variant="primary"
          compact
          onPress={onAction}
        />
      ) : null}
    </Box>
  );
};
```

Also register in `patterns/index.ts` and `packages/react-native/src/index.ts`.

---

## Creating an Icon

All icons follow a consistent pattern using `react-native-svg`.

### Template

```typescript
import React from "react";
import Svg, { Path } from "react-native-svg";
import { useNuDSTheme } from "../theme";
import type { IconProps } from "./types";

export const MyIcon = ({ size = 20, color, opacity }: IconProps) => {
  const theme = useNuDSTheme();
  const fill = color ?? theme.color.content.primary;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      opacity={opacity}
    >
      <Path
        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"
        fill={fill}
      />
    </Svg>
  );
};
```

### Icon checklist

- [ ] File: `icons/MyIcon.tsx`
- [ ] Uses `IconProps` from `./types`
- [ ] Default `size` is 20
- [ ] Default `color` from `theme.color.content.primary`
- [ ] Uses `useNuDSTheme()` for default color
- [ ] Exported from `icons/index.ts`
- [ ] SVG `viewBox` matches the design's original viewBox
- [ ] Uses `fill` or `stroke` consistently (match the design's SVG structure)

---

## Extending an Existing Component

### Adding a variant

When adding a new variant to an existing component (e.g., a `"warning"` variant to `Button`):

1. Add the variant to the union type:

```typescript
type ButtonVariant = "primary" | "secondary" | "ghost" | "destructive" | "warning";
```

2. Add the style mapping:

```typescript
const variantStyle: Record<ButtonVariant, ViewStyle> = {
  // ...existing variants...
  warning: {
    backgroundColor: theme.color.warning,
  },
};
```

3. Add the label color mapping:

```typescript
const labelColor: Record<ButtonVariant, "primary" | "inverse"> = {
  // ...existing variants...
  warning: "inverse",
};
```

### Adding a prop

When adding a new optional prop:

1. Add to the props type with a default (preserves backward compatibility):

```typescript
export type ButtonProps = Omit<PressableProps, "style"> & {
  // ...existing props...
  /** New behavior description */
  newProp?: boolean;
};
```

2. Destructure with default in the component:

```typescript
export const Button = ({
  // ...existing props...
  newProp = false,
  ...rest
}: ButtonProps) => {
```

3. Use it in the component body — never change existing default behavior.

---

## Composing with Field (Form Controls)

For any form input component, wrap it in `Field` to get label/hint/error for free:

```typescript
import { Field } from "../../primitives/Field";

export const MyInput = ({ label, hint, error, required, ...rest }) => {
  const theme = useNuDSTheme();

  return (
    <Field label={label} hint={hint} error={error} required={required}>
      {/* Your input element here */}
    </Field>
  );
};
```

See `TextField` and `Select` as real examples of this pattern.

---

## Common Mistakes to Avoid

### Hardcoded colors

```typescript
// BAD
<View style={{ backgroundColor: "#820AD1" }} />

// GOOD
<View style={{ backgroundColor: theme.color.main }} />
```

### Raw Text component

```typescript
// BAD
import { Text } from "react-native";
<Text style={{ fontSize: 16 }}>Hello</Text>

// GOOD
import { NText } from "../../primitives/Text";
<NText variant="bodyLargeDefault">Hello</NText>
```

### Hardcoded spacing

```typescript
// BAD
<View style={{ padding: 16, gap: 8 }} />

// GOOD
<View style={{ padding: theme.spacing[4], gap: theme.spacing[2] }} />
```

### Hardcoded radius

```typescript
// BAD
<View style={{ borderRadius: 8 }} />

// GOOD
<View style={{ borderRadius: theme.radius.md }} />
```

### Importing tokens directly for runtime use

```typescript
// BAD
import { spacing } from "@nu-design-org/nuds-vibecode-tokens";
<View style={{ padding: spacing[4] }} />

// GOOD (type imports are fine)
import type { TypographyVariant } from "@nu-design-org/nuds-vibecode-tokens";
```

### PascalCase variants

```typescript
// BAD
<Button variant="Primary" />

// GOOD
<Button variant="primary" />
```

### Missing accessibility

```typescript
// BAD
<Pressable onPress={onPress}>

// GOOD
<Pressable accessibilityRole="button" onPress={onPress}>
```

### Missing barrel export

After creating `components/Foo/Foo.tsx` + `components/Foo/index.ts`, you MUST also add to `packages/react-native/src/index.ts`:

```typescript
export * from "./components/Foo";
```

---

## Elevation / Shadows

Use `theme.elevation.{level1,level2,level3}` spread into styles. Always pair with `shadowColor`:

```typescript
{
  ...theme.elevation.level1,
  shadowColor: theme.color.content.primary,
}
```

---

## Dark Mode

Components don't need dark-mode branches. The theme object already provides the correct values for the active mode. Just use `useNuDSTheme()` and everything adapts automatically.

---

## Font Loading

The library exports `loadNuDSFonts(fontMap)`. Font **assets** live in the host app (not the DS). The host app calls:

```typescript
import { loadNuDSFonts } from "@nu-design-org/nuds-vibecode-react-native";

await loadNuDSFonts({
  "NuSansDisplay-Regular": require("./assets/fonts/NuSansDisplay-Regular.ttf"),
  // ...other weights
});
```
