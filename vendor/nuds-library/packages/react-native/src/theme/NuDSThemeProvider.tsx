import React, { createContext, useContext, useMemo } from "react";
import type { ReactNode } from "react";
import { createTheme, type NuDSTheme } from "@nu-design-org/nuds-vibecode-theme";
import type { SegmentKey } from "@nu-design-org/nuds-vibecode-tokens";

type NuDSThemeContextValue = {
  theme: NuDSTheme;
};

const NuDSThemeContext = createContext<NuDSThemeContextValue>({
  theme: createTheme("pf", "light")
});

export type NuDSThemeProviderProps = {
  mode?: "light" | "dark";
  segment?: SegmentKey;
  themeOverride?: NuDSTheme;
  children: ReactNode;
};

export const NuDSThemeProvider = ({
  mode = "light",
  segment = "pf",
  themeOverride,
  children
}: NuDSThemeProviderProps) => {
  const theme = useMemo(() => {
    if (themeOverride) {
      return themeOverride;
    }
    return createTheme(segment, mode);
  }, [mode, segment, themeOverride]);

  return (
    <NuDSThemeContext.Provider value={{ theme }}>
      {children}
    </NuDSThemeContext.Provider>
  );
};

export const useNuDSTheme = (): NuDSTheme => {
  return useContext(NuDSThemeContext).theme;
};
