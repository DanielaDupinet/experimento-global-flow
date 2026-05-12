import { loadNuDSFonts, NuDSThemeProvider } from "@nu-design-org/nuds-vibecode-react-native";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";
import { View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";

void SplashScreen.preventAutoHideAsync().catch(() => undefined);

export default function RootLayout() {
  const [fontsReady, setFontsReady] = useState(false);

  useEffect(() => {
    let alive = true;
    (async () => {
      try {
        await loadNuDSFonts();
      } catch {
        // continúa con fuentes del sistema si falla la carga
      } finally {
        if (alive) {
          setFontsReady(true);
          void SplashScreen.hideAsync();
        }
      }
    })();
    return () => {
      alive = false;
    };
  }, []);

  if (!fontsReady) {
    return <View style={{ flex: 1, backgroundColor: "#ffffff" }} />;
  }

  return (
    <NuDSThemeProvider mode="light" segment="pf">
      <GestureHandlerRootView style={{ flex: 1 }}>
        <SafeAreaProvider>
          <Stack screenOptions={{ headerShown: false, animation: "slide_from_right" }}>
            <Stack.Screen name="index" />
          </Stack>
        </SafeAreaProvider>
      </GestureHandlerRootView>
    </NuDSThemeProvider>
  );
}
