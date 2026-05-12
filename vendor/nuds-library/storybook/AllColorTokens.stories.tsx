import React from "react";
import { ScrollView, View } from "react-native";
import {
  semanticColorTokens,
  type SegmentKey,
  type ThemeKey
} from "@nu-design-org/nuds-vibecode-tokens";
import { NText } from "@nu-design-org/nuds-vibecode-react-native";

type ModeCombo = { segment: SegmentKey; mode: ThemeKey; label: string };

const COMBOS: ModeCombo[] = [
  { segment: "pf", mode: "light", label: "PF Light" },
  { segment: "pf", mode: "dark", label: "PF Dark" },
  { segment: "pj", mode: "light", label: "PJ Light" },
  { segment: "pj", mode: "dark", label: "PJ Dark" },
  { segment: "uv", mode: "light", label: "UV Light" },
  { segment: "uv", mode: "dark", label: "UV Dark" },
];

function flatEntries(obj: Record<string, unknown>, prefix = ""): Array<[string, string]> {
  const out: Array<[string, string]> = [];
  for (const [k, v] of Object.entries(obj)) {
    const path = prefix ? `${prefix}.${k}` : k;
    if (typeof v === "string") out.push([path, v]);
    else if (typeof v === "object" && v) out.push(...flatEntries(v as Record<string, unknown>, path));
  }
  return out;
}

const Swatch = ({ color, label }: { color: string; label: string }) => {
  const needsBorder = color === "#FFFFFF" || color === "transparent";
  return (
    <View style={{ alignItems: "center", width: 168 }}>
      <View
        style={{
          width: 56,
          height: 56,
          borderRadius: 8,
          backgroundColor: color,
          borderWidth: needsBorder ? 1 : 0,
          borderColor: "#D8DAE0"
        }}
      />
      <NText variant="label2XSmallStrong" style={{ marginTop: 4, textAlign: "center" }}>
        {label}
      </NText>
      <NText variant="label2XSmallDefault" tone="secondary" style={{ textAlign: "center" }}>
        {color}
      </NText>
    </View>
  );
};

const SectionTitle = ({ children }: { children: string }) => (
  <NText variant="titleSmall" style={{ marginTop: 24, marginBottom: 8 }}>
    {children}
  </NText>
);

const Row = ({ children }: { children: React.ReactNode }) => (
  <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 8, marginBottom: 8 }}>
    {children}
  </View>
);

export default {
  title: "Tokens/Colors/All Tokens By Segment"
};

export const Default = {
  render: () => (
    <ScrollView contentContainerStyle={{ padding: 16 }}>
      <NText variant="titleMedium">All Color Tokens</NText>
      <NText variant="labelXSmallDefault" tone="secondary" style={{ marginBottom: 8 }}>
        Full NuDS semantic token table grouped by segment and mode.
      </NText>

      {COMBOS.map(({ segment, mode, label }) => {
        const tokens = semanticColorTokens[segment][mode];
        const flat = flatEntries(tokens as unknown as Record<string, unknown>);
        return (
          <View key={label}>
            <SectionTitle>{`${label} (${flat.length})`}</SectionTitle>
            <Row>
              {flat.map(([path, val]) => (
                <Swatch key={`${label}-${path}`} color={val} label={path} />
              ))}
            </Row>
          </View>
        );
      })}
    </ScrollView>
  )
};
