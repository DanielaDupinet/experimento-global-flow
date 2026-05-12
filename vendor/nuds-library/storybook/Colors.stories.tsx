import React from "react";
import { ScrollView, View } from "react-native";
import { NText, useNuDSTheme } from "@nu-design-org/nuds-vibecode-react-native";
import {
  lightPrimitives,
  darkPrimitives,
  semanticColorTokens,
  type SegmentKey,
  type ThemeKey
} from "@nu-design-org/nuds-vibecode-tokens";

export default {
  title: "Tokens/Colors"
};

const Swatch = ({
  color,
  label,
  sublabel,
  width = 72
}: {
  color: string;
  label: string;
  sublabel?: string;
  width?: number;
}) => {
  const needsBorder = color === "#FFFFFF" || color === "transparent";
  return (
    <View style={{ alignItems: "center", width }}>
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
      <NText
        variant="label2XSmallStrong"
        style={{ marginTop: 4, textAlign: "center" }}
      >
        {label}
      </NText>
      {sublabel ? (
        <NText
          variant="label2XSmallDefault"
          tone="secondary"
          style={{ textAlign: "center" }}
        >
          {sublabel}
        </NText>
      ) : null}
    </View>
  );
};

const SectionTitle = ({ children }: { children: string }) => (
  <NText variant="titleSmall" style={{ marginTop: 24, marginBottom: 8 }}>
    {children}
  </NText>
);

const SubSectionTitle = ({ children }: { children: string }) => (
  <NText
    variant="paragraphSmallStrong"
    tone="secondary"
    style={{ marginTop: 16, marginBottom: 4 }}
  >
    {children}
  </NText>
);

const Row = ({ children }: { children: React.ReactNode }) => (
  <View
    style={{
      flexDirection: "row",
      flexWrap: "wrap",
      gap: 8,
      marginBottom: 8
    }}
  >
    {children}
  </View>
);

function flatEntries(obj: Record<string, unknown>, prefix = ""): Array<[string, string]> {
  const out: Array<[string, string]> = [];
  for (const [k, v] of Object.entries(obj)) {
    const path = prefix ? `${prefix}.${k}` : k;
    if (typeof v === "string") out.push([path, v]);
    else if (typeof v === "object" && v) out.push(...flatEntries(v as Record<string, unknown>, path));
  }
  return out;
}

const HUE_GROUPS = [
  "whiteAlpha", "blackAlpha", "grayAlpha",
  "gray", "purple", "indigo", "mauve", "violet", "plum",
  "crimson", "pink", "red", "coral", "brown",
  "orange", "yellow", "citrus", "green", "teal",
  "blue", "cobalt", "lavender"
];

export const Primitives = {
  render: () => {
    const theme = useNuDSTheme();
    const prims = theme.mode === "dark" ? darkPrimitives : lightPrimitives;

    return (
      <ScrollView contentContainerStyle={{ padding: 16 }}>
        <NText variant="titleMedium">Primitive Palette ({theme.mode})</NText>
        <NText variant="labelXSmallDefault" tone="secondary" style={{ marginBottom: 8 }}>
          Raw color values from Figma. Mode: {theme.mode}.
        </NText>

        <SectionTitle>Base</SectionTitle>
        <Row>
          <Swatch color={prims.white} label="white" sublabel={prims.white} />
          <Swatch color={prims.black} label="black" sublabel={prims.black} />
        </Row>

        {HUE_GROUPS.map((hue) => {
          const group = (prims as Record<string, unknown>)[hue];
          if (!group || typeof group !== "object") return null;
          const steps = Object.entries(group as Record<string, string>);
          if (!steps.length) return null;

          return (
            <View key={hue}>
              <SectionTitle>{hue}</SectionTitle>
              <Row>
                {steps.map(([step, val]) => (
                  <Swatch
                    key={`${hue}.${step}`}
                    color={val}
                    label={`${hue}.${step}`}
                    sublabel={val}
                  />
                ))}
              </Row>
            </View>
          );
        })}
      </ScrollView>
    );
  }
};

export const SemanticColors = {
  render: () => {
    const theme = useNuDSTheme();
    const c = theme.color;

    const surfaceEntries = flatEntries(c.surface as unknown as Record<string, unknown>, "surface");
    const contentEntries = flatEntries(c.content as unknown as Record<string, unknown>, "content");
    const borderEntries = flatEntries(c.border as unknown as Record<string, unknown>, "border");
    const bgEntries = flatEntries(c.background as unknown as Record<string, unknown>, "background");

    return (
      <ScrollView contentContainerStyle={{ padding: 16 }}>
        <NText variant="titleMedium">Semantic Colors</NText>
        <NText variant="labelXSmallDefault" tone="secondary" style={{ marginBottom: 8 }}>
          Theme-aware tokens (segment: {(theme as any).segment ?? "pf"}, mode: {theme.mode}).
        </NText>

        <SectionTitle>Background</SectionTitle>
        <Row>
          {bgEntries.map(([path, val]) => (
            <Swatch key={path} color={val} label={path} sublabel={val} width={120} />
          ))}
        </Row>

        <SectionTitle>Content</SectionTitle>
        <Row>
          {contentEntries.map(([path, val]) => (
            <Swatch key={path} color={val} label={path} sublabel={val} width={160} />
          ))}
        </Row>

        <SectionTitle>Surface</SectionTitle>
        <Row>
          {surfaceEntries.map(([path, val]) => (
            <Swatch key={path} color={val} label={path} sublabel={val} width={160} />
          ))}
        </Row>

        <SectionTitle>Border</SectionTitle>
        <Row>
          {borderEntries.map(([path, val]) => (
            <Swatch key={path} color={val} label={path} sublabel={val} width={160} />
          ))}
        </Row>
      </ScrollView>
    );
  }
};

const SEGMENTS: SegmentKey[] = ["pf", "pj", "uv"];
const MODES: ThemeKey[] = ["light", "dark"];

export const AllTokensBySegment = {
  render: () => (
    <ScrollView contentContainerStyle={{ padding: 16 }}>
      <NText variant="titleMedium">All Tokens by Segment</NText>
      <NText variant="labelXSmallDefault" tone="secondary" style={{ marginBottom: 8 }}>
        Compare semantic tokens across all segment+mode combinations.
      </NText>

      {SEGMENTS.map((seg) =>
        MODES.map((mode) => {
          const tokens = semanticColorTokens[seg][mode];
          const flat = flatEntries(tokens as unknown as Record<string, unknown>);
          return (
            <View key={`${seg}-${mode}`}>
              <SectionTitle>{`${seg.toUpperCase()} — ${mode}`}</SectionTitle>
              <SubSectionTitle>{`${flat.length} tokens`}</SubSectionTitle>
              <Row>
                {flat.map(([path, val]) => (
                  <Swatch
                    key={`${seg}-${mode}-${path}`}
                    color={val}
                    label={path}
                    sublabel={val}
                    width={160}
                  />
                ))}
              </Row>
            </View>
          );
        })
      )}
    </ScrollView>
  )
};
