import React, { useRef } from "react";
import { Animated, Pressable, ScrollView, View } from "react-native";
import { NText, useNuDSTheme } from "@nu-design-org/nuds-vibecode-react-native";
import { duration } from "@nu-design-org/nuds-vibecode-tokens";

export default {
  title: "Tokens/Motion"
};

/* ------------------------------------------------------------------ */
/*  Helpers                                                           */
/* ------------------------------------------------------------------ */

const DurationBar = ({ name, ms }: { name: string; ms: number }) => {
  const anim = useRef(new Animated.Value(0)).current;

  const play = () => {
    anim.setValue(0);
    Animated.timing(anim, {
      toValue: 1,
      duration: ms,
      useNativeDriver: true
    }).start();
  };

  return (
    <Pressable
      onPress={play}
      style={{
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 12,
        gap: 12
      }}
    >
      <View style={{ width: 60 }}>
        <NText variant="labelSmallStrong">{name}</NText>
        <NText variant="label2XSmallDefault" tone="secondary">
          {ms}ms
        </NText>
      </View>

      <View
        style={{
          flex: 1,
          height: 24,
          backgroundColor: "#F5F3F6",
          borderRadius: 4,
          overflow: "hidden"
        }}
      >
        <Animated.View
          style={{
            height: 24,
            backgroundColor: "#820AD1",
            borderRadius: 4,
            transform: [
              {
                scaleX: anim.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 1]
                })
              }
            ],
            transformOrigin: "left"
          }}
        />
      </View>
    </Pressable>
  );
};

/* ------------------------------------------------------------------ */
/*  Stories                                                            */
/* ------------------------------------------------------------------ */

export const Durations = {
  render: () => {
    const entries = Object.entries(duration) as Array<[string, number]>;

    return (
      <ScrollView contentContainerStyle={{ padding: 16 }}>
        <NText variant="titleMedium">Motion — Durations</NText>
        <NText
          variant="labelXSmallDefault"
          tone="secondary"
          style={{ marginBottom: 4 }}
        >
          Tap each row to see the timing in action.
        </NText>
        <NText
          variant="label2XSmallDefault"
          tone="secondary"
          style={{ marginBottom: 16 }}
        >
          The bar fills over the given duration.
        </NText>

        {entries.map(([name, ms]) => (
          <DurationBar key={name} name={name} ms={ms} />
        ))}
      </ScrollView>
    );
  }
};

export const EasingPresets = {
  render: () => {
    const theme = useNuDSTheme();
    const motionTokens = theme.motion;

    return (
      <ScrollView contentContainerStyle={{ padding: 16 }}>
        <NText variant="titleMedium">Motion — Easing Presets</NText>
        <NText
          variant="labelXSmallDefault"
          tone="secondary"
          style={{ marginBottom: 16 }}
        >
          Named easing sets with quick/medium/slow durations.
        </NText>

        {Object.entries(motionTokens).map(([setName, speeds]) => (
          <View key={setName} style={{ marginBottom: 20 }}>
            <NText
              variant="paragraphSmallStrong"
              style={{ marginBottom: 8, textTransform: "uppercase", letterSpacing: 1 }}
            >
              {setName}
            </NText>
            {Object.entries(speeds as Record<string, number>).map(
              ([speed, ms]) => (
                <View
                  key={speed}
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginBottom: 6,
                    gap: 8
                  }}
                >
                  <NText variant="labelSmallDefault" style={{ width: 80 }}>
                    {speed}
                  </NText>
                  <View
                    style={{
                      width: (ms as number) * 0.8,
                      height: 20,
                      borderRadius: 4,
                      backgroundColor: "#AB4BEA"
                    }}
                  />
                  <NText variant="label2XSmallDefault" tone="secondary">
                    {ms}ms
                  </NText>
                </View>
              )
            )}
          </View>
        ))}
      </ScrollView>
    );
  }
};

export const ZIndex = {
  render: () => {
    const theme = useNuDSTheme();
    const zIndexTokens = theme.zIndex;
    const entries = Object.entries(zIndexTokens) as Array<[string, number]>;

    return (
      <ScrollView contentContainerStyle={{ padding: 16 }}>
        <NText variant="titleMedium">Z-Index Scale</NText>
        <NText
          variant="labelXSmallDefault"
          tone="secondary"
          style={{ marginBottom: 16 }}
        >
          Stacking order tokens for overlapping layers.
        </NText>

        {entries.map(([name, value], index) => (
          <View
            key={name}
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 8,
              gap: 12
            }}
          >
            <View style={{ width: 80 }}>
              <NText variant="labelSmallStrong">{name}</NText>
            </View>
            <View
              style={{
                height: 28,
                width: Math.max(value * 0.06 + 24, 24),
                borderRadius: 6,
                backgroundColor: `rgba(130, 10, 209, ${0.15 + index * 0.1})`,
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <NText variant="label2XSmallStrong">{value}</NText>
            </View>
          </View>
        ))}
      </ScrollView>
    );
  }
};
