import React from "react";
import { ScrollView, View } from "react-native";
import { NText } from "@nu-design-org/nuds-vibecode-react-native";
import { typography, fontFamily } from "@nu-design-org/nuds-vibecode-tokens";

export default {
  title: "Tokens/Typography"
};

/* ------------------------------------------------------------------ */
/*  Helpers                                                           */
/* ------------------------------------------------------------------ */

const VariantRow = ({
  name,
  meta
}: {
  name: string;
  meta: { fontSize: number; lineHeight: number; fontFamily: string; letterSpacing?: number };
}) => (
  <View style={{ marginBottom: 16 }}>
    <NText variant={name as any}>
      {name}
    </NText>
    <NText variant="label2XSmallDefault" tone="secondary" style={{ marginTop: 2 }}>
      {meta.fontFamily} · {meta.fontSize}/{meta.lineHeight}
      {meta.letterSpacing !== undefined ? ` · ls: ${meta.letterSpacing}` : ""}
    </NText>
  </View>
);

/* ------------------------------------------------------------------ */
/*  Stories                                                            */
/* ------------------------------------------------------------------ */

export const AllVariants = {
  render: () => {
    const entries = Object.entries(typography) as Array<
      [string, { fontSize: number; lineHeight: number; fontFamily: string; letterSpacing?: number }]
    >;

    // Group by prefix
    const groups: Record<string, typeof entries> = {};
    entries.forEach(([name, value]) => {
      const prefix = name.replace(
        /^(title|subtitle|body|paragraph|display|label).*$/,
        "$1"
      );
      if (!groups[prefix]) groups[prefix] = [];
      groups[prefix].push([name, value]);
    });

    return (
      <ScrollView contentContainerStyle={{ padding: 16 }}>
        <NText variant="titleMedium">Typography</NText>
        <NText
          variant="labelXSmallDefault"
          tone="secondary"
          style={{ marginBottom: 16 }}
        >
          All available type variants with font family, size, line-height, and
          letter-spacing.
        </NText>

        {Object.entries(groups).map(([group, items]) => (
          <View key={group}>
            <NText
              variant="paragraphSmallStrong"
              tone="secondary"
              style={{
                marginTop: 20,
                marginBottom: 8,
                textTransform: "uppercase",
                letterSpacing: 1
              }}
            >
              {group}
            </NText>
            {items.map(([name, meta]) => (
              <VariantRow key={name} name={name} meta={meta} />
            ))}
          </View>
        ))}
      </ScrollView>
    );
  }
};

export const FontFamilies = {
  render: () => (
    <ScrollView contentContainerStyle={{ padding: 16 }}>
      <NText variant="titleMedium">Font Families</NText>
      <NText
        variant="labelXSmallDefault"
        tone="secondary"
        style={{ marginBottom: 16 }}
      >
        Available font families and weights.
      </NText>

      {/* Display */}
      <NText
        variant="paragraphSmallStrong"
        tone="secondary"
        style={{ marginTop: 8, marginBottom: 8, textTransform: "uppercase", letterSpacing: 1 }}
      >
        Display
      </NText>
      {Object.entries(fontFamily.display).map(([weight, family]) => (
        <View key={weight} style={{ marginBottom: 12 }}>
          <NText style={{ fontFamily: family, fontSize: 20 }}>
            The quick brown fox — {weight}
          </NText>
          <NText variant="label2XSmallDefault" tone="secondary">
            {family}
          </NText>
        </View>
      ))}

      {/* Text */}
      <NText
        variant="paragraphSmallStrong"
        tone="secondary"
        style={{ marginTop: 16, marginBottom: 8, textTransform: "uppercase", letterSpacing: 1 }}
      >
        Text
      </NText>
      {Object.entries(fontFamily.text).map(([weight, family]) => (
        <View key={weight} style={{ marginBottom: 12 }}>
          <NText style={{ fontFamily: family, fontSize: 20 }}>
            The quick brown fox — {weight}
          </NText>
          <NText variant="label2XSmallDefault" tone="secondary">
            {family}
          </NText>
        </View>
      ))}

      {/* Legacy */}
      <NText
        variant="paragraphSmallStrong"
        tone="secondary"
        style={{ marginTop: 16, marginBottom: 8, textTransform: "uppercase", letterSpacing: 1 }}
      >
        Legacy
      </NText>
      {Object.entries(fontFamily.legacy).map(([weight, family]) => (
        <View key={weight} style={{ marginBottom: 12 }}>
          <NText style={{ fontFamily: family, fontSize: 20 }}>
            The quick brown fox — {weight}
          </NText>
          <NText variant="label2XSmallDefault" tone="secondary">
            {family}
          </NText>
        </View>
      ))}
    </ScrollView>
  )
};
