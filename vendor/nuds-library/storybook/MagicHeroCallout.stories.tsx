import React from "react";
import type { Meta, StoryObj } from "@storybook/react-native";
import { MagicHeroCallout } from "@nu-design-org/nuds-vibecode-react-native";

const log = (name: string) => () => {
  console.log(`[storybook] ${name}`);
};

const meta: Meta<typeof MagicHeroCallout> = {
  title: "Patterns/MagicHeroCallout",
  component: MagicHeroCallout,
  parameters: {
    docs: {
      description: {
        component:
          "Magic hero card with optional animated border (orbiting highlight on 2px frame). Full Figma map: `packages/react-native/src/patterns/MagicHeroCallout/README.md`. Tune **accentBorderSpeed**, **accentBorderHighlightLengthPercent**, or absolute **accentBorderLapDurationMs** via controls.",
      },
    },
  },
  args: {
    title: "The single most important actionable message right now",
    primaryLabel: "Label",
    secondaryLabel: "Not now",
    onPrimaryPress: log("primary"),
    onSecondaryPress: log("secondary"),
  },
  argTypes: {
    accentBorderSpeed: {
      control: { type: "number", min: 0.25, max: 3, step: 0.25 },
      description: "1 = default lap speed; higher = faster. Ignored if accentBorderLapDurationMs is set.",
    },
    accentBorderHighlightLengthPercent: {
      control: { type: "number", min: 10, max: 45, step: 2.5 },
      description: "% of stroke midline lit (Figma 8095:179 ≈ 25–30). Default 27.5.",
    },
    accentBorderLapDurationMs: {
      control: { type: "number", min: 1500, max: 12000, step: 250 },
      description: "Optional: fixed lap duration (ms). Overrides accentBorderSpeed when set.",
    },
  },
};
export default meta;

type Story = StoryObj<typeof MagicHeroCallout>;

export const Default: Story = {
  args: { variant: "standard" },
};

export const Attention: Story = {
  args: { variant: "attention" },
};

export const Critical: Story = {
  args: { variant: "critical" },
};

export const CriticalWithDescription: Story = {
  args: {
    variant: "critical",
    showDescription: true,
    description:
      "Your account balance will be returned to you in its entirety to your address on file. You will no longer be able to open a Nu account.",
  },
};

export const CriticalNoBorder: Story = {
  args: {
    variant: "critical",
    showAccentBorder: false,
  },
};

/** Static 2px frame (`animatedAccentBorder={false}`); gradient motion still matches Figma `8094:170` when default true. */
export const StaticAccentBorder: Story = {
  args: {
    variant: "standard",
    animatedAccentBorder: false,
  },
};
