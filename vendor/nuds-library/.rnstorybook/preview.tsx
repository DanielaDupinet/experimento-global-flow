import React, { useEffect, useState } from "react";
import { ActivityIndicator, View } from "react-native";
import { NuDSThemeProvider, loadNuDSFonts } from "@nu-design-org/nuds-vibecode-react-native";
import type { SegmentKey } from "@nu-design-org/nuds-vibecode-tokens";

const FontLoader = ({ children }: { children: React.ReactNode }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    loadNuDSFonts()
      .catch((err) => console.warn("NuDS font loading failed:", err))
      .finally(() => setLoaded(true));
  }, []);

  if (!loaded) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return <>{children}</>;
};

const preview = {
  args: {
    themeMode: "light",
    themeSegment: "pf",
  },
  argTypes: {
    themeMode: {
      name: "Theme Mode",
      control: { type: "select" },
      options: ["light", "dark"],
    },
    themeSegment: {
      name: "Theme Segment",
      control: { type: "select" },
      options: ["pf", "pj", "uv"],
    },
  },
  decorators: [
    (Story: React.ComponentType, context: { args: Record<string, unknown> }) => {
      const mode = (context.args.themeMode ?? "light") as "light" | "dark";
      const segment = (context.args.themeSegment ?? "pf") as SegmentKey;

      return (
        <FontLoader>
          <NuDSThemeProvider mode={mode} segment={segment}>
            <Story />
          </NuDSThemeProvider>
        </FontLoader>
      );
    },
  ],
};

export default preview;
