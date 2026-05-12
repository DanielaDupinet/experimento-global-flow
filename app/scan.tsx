import {
  BoltIcon,
  Button,
  CloseIcon,
  NText,
  TopBar,
  useNuDSTheme,
} from "@nu-design-org/nuds-vibecode-react-native";
import { CameraView, useCameraPermissions } from "expo-camera";
import { useRouter } from "expo-router";
import { useEffect, useRef, useState } from "react";
import {
  Animated,
  Easing,
  Pressable,
  StyleSheet,
  View,
} from "react-native";
import { ImageAddCustomIcon } from "../components/icons/ImageAddCustomIcon";

export default function ScanScreen() {
  const nuds = useNuDSTheme();
  const router = useRouter();
  const [permission, requestPermission] = useCameraPermissions();

  /* ── Estados de la animación de escaneo ── */
  const [isScanning, setIsScanning] = useState(false);
  const scanLineY = useRef(new Animated.Value(0)).current;
  const flashOpacity = useRef(new Animated.Value(0)).current;
  const [cameraHeight, setCameraHeight] = useState(0);

  const handleClose = () => {
    if (router.canGoBack()) router.back();
  };

  /* ── Loop infinito de la línea de escaneo mientras isScanning=true ── */
  useEffect(() => {
    if (!isScanning) return;
    const loop = Animated.loop(
      Animated.sequence([
        Animated.timing(scanLineY, {
          toValue: 1,
          duration: 1200,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
        Animated.timing(scanLineY, {
          toValue: 0,
          duration: 1200,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
      ])
    );
    loop.start();
    return () => loop.stop();
  }, [isScanning, scanLineY]);

  /* ── Tap en la cámara: simula escaneo → flash → navega al resultado ── */
  const triggerScan = () => {
    if (isScanning || !permission?.granted) return;
    setIsScanning(true);

    // Esperamos 1.6s simulando el escaneo, luego flash, luego navegación
    setTimeout(() => {
      Animated.sequence([
        Animated.timing(flashOpacity, {
          toValue: 1,
          duration: 120,
          useNativeDriver: true,
        }),
        Animated.timing(flashOpacity, {
          toValue: 0,
          duration: 220,
          useNativeDriver: true,
        }),
      ]).start(() => {
        router.replace("/summary");
      });
    }, 1600);
  };

  return (
    <View style={[styles.sheet, { backgroundColor: nuds.color.surface.default }]}>
      {/* ── Handle del bottom sheet ── */}
      <View style={styles.handleWrap}>
        <View style={[styles.handle, { backgroundColor: "#BDB5C2" }]} />
      </View>

      {/* ── Top Bar modal con X y "Scan" ── */}
      <TopBar
        title="Scan"
        variant="modal"
        show1stAction={false}
        leading={<CloseIcon color={nuds.color.content.default} opacity={0.62} />}
        onBackPress={handleClose}
        style={{ borderTopLeftRadius: 0, borderTopRightRadius: 0 }}
      />

      {/* ── Área de la cámara ── */}
      <View style={styles.cameraWrap}>
        <Pressable
          style={[
            styles.cameraFrame,
            { backgroundColor: nuds.color.surface.subtle },
          ]}
          onPress={triggerScan}
          onLayout={(e) => setCameraHeight(e.nativeEvent.layout.height)}
        >
          {permission?.granted ? (
            <CameraView style={styles.camera} facing="back" />
          ) : (
            <View style={styles.permissionWrap}>
              <NText
                variant="labelMediumStrong"
                tone="primary"
                style={{ textAlign: "center", marginBottom: nuds.spacing[3] }}
              >
                Necesitamos acceso a tu cámara
              </NText>
              <NText
                variant="labelSmallDefault"
                tone="secondary"
                style={{ textAlign: "center", marginBottom: nuds.spacing[5] }}
              >
                Para poder escanear tus recibos.
              </NText>
              <Button
                label="Permitir cámara"
                variant="primary"
                onPress={requestPermission}
              />
            </View>
          )}

          {/* ── Overlays sobre la cámara ── */}
          {permission?.granted ? (
            <>
              {/* Marco de mira (corner brackets) */}
              <View style={styles.overlay} pointerEvents="none">
                <View style={[styles.corner, styles.cornerTL]} />
                <View style={[styles.corner, styles.cornerTR]} />
                <View style={[styles.corner, styles.cornerBL]} />
                <View style={[styles.corner, styles.cornerBR]} />
              </View>

              {/* Línea de escaneo animada (solo visible cuando isScanning) */}
              {isScanning && cameraHeight > 0 ? (
                <Animated.View
                  pointerEvents="none"
                  style={[
                    styles.scanLine,
                    {
                      transform: [
                        {
                          translateY: scanLineY.interpolate({
                            inputRange: [0, 1],
                            outputRange: [0, cameraHeight - 4],
                          }),
                        },
                      ],
                    },
                  ]}
                />
              ) : null}

              {/* Texto "Detectando..." cuando isScanning */}
              {isScanning ? (
                <View style={styles.scanningPill} pointerEvents="none">
                  <NText
                    variant="labelXSmallStrong"
                    color="#FFFFFF"
                    style={{ textAlign: "center" }}
                  >
                    Detectando…
                  </NText>
                </View>
              ) : null}

              {/* Pista al usuario para que sepa que puede tocar */}
              {!isScanning ? (
                <View style={styles.hintPill} pointerEvents="none">
                  <NText
                    variant="labelXSmallStrong"
                    color="#FFFFFF"
                    style={{ textAlign: "center" }}
                  >
                    Toca para escanear
                  </NText>
                </View>
              ) : null}
            </>
          ) : null}

          {/* ── Flash blanco que aparece justo antes de navegar ── */}
          <Animated.View
            pointerEvents="none"
            style={[styles.flash, { opacity: flashOpacity }]}
          />
        </Pressable>
      </View>

      {/* ── Toolbar inferior ── */}
      <View style={styles.bottomBar}>
        <Pressable
          accessibilityRole="button"
          accessibilityLabel="Open gallery"
          onPress={() => undefined}
          style={[styles.iconButton, { borderColor: nuds.color.border.default }]}
        >
          <ImageAddCustomIcon color={nuds.color.content.default} size={24} />
        </Pressable>

        <Button
          label="Input manually"
          variant="secondary"
          onPress={triggerScan}
        />

        <Pressable
          accessibilityRole="button"
          accessibilityLabel="Toggle flash"
          onPress={() => undefined}
          style={[styles.iconButton, { borderColor: nuds.color.border.default }]}
        >
          <BoltIcon color={nuds.color.content.default} />
        </Pressable>
      </View>
    </View>
  );
}

const SCAN_LINE_COLOR = "#FFFFFF";
const CORNER_COLOR = "#FFFFFF";

const styles = StyleSheet.create({
  sheet: {
    flex: 1,
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    overflow: "hidden",
  },
  handleWrap: {
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 12,
    paddingBottom: 4,
  },
  handle: {
    width: 40,
    height: 4,
    borderRadius: 64,
  },
  cameraWrap: {
    flex: 1,
    padding: 24,
  },
  cameraFrame: {
    flex: 1,
    borderRadius: 32,
    overflow: "hidden",
  },
  camera: {
    flex: 1,
  },
  permissionWrap: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 24,
  },
  bottomBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 24,
    paddingTop: 8,
    paddingBottom: 24,
  },
  iconButton: {
    width: 56,
    height: 56,
    borderRadius: 28,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    margin: 24,
  },
  corner: {
    position: "absolute",
    width: 32,
    height: 32,
    borderColor: CORNER_COLOR,
  },
  cornerTL: {
    top: 0,
    left: 0,
    borderTopWidth: 3,
    borderLeftWidth: 3,
    borderTopLeftRadius: 8,
  },
  cornerTR: {
    top: 0,
    right: 0,
    borderTopWidth: 3,
    borderRightWidth: 3,
    borderTopRightRadius: 8,
  },
  cornerBL: {
    bottom: 0,
    left: 0,
    borderBottomWidth: 3,
    borderLeftWidth: 3,
    borderBottomLeftRadius: 8,
  },
  cornerBR: {
    bottom: 0,
    right: 0,
    borderBottomWidth: 3,
    borderRightWidth: 3,
    borderBottomRightRadius: 8,
  },
  scanLine: {
    position: "absolute",
    left: 24,
    right: 24,
    height: 3,
    borderRadius: 3,
    backgroundColor: SCAN_LINE_COLOR,
    shadowColor: SCAN_LINE_COLOR,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.9,
    shadowRadius: 8,
    elevation: 8,
  },
  scanningPill: {
    position: "absolute",
    top: 24,
    alignSelf: "center",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 999,
  },
  hintPill: {
    position: "absolute",
    bottom: 24,
    alignSelf: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 999,
  },
  flash: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "#FFFFFF",
  },
});
