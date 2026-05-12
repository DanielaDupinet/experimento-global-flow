import {
  BoltIcon,
  Button,
  CloseIcon,
  ImageAddIcon,
  NText,
  TopBar,
  useNuDSTheme,
} from "@nu-design-org/nuds-vibecode-react-native";
import { CameraView, useCameraPermissions } from "expo-camera";
import { useRouter } from "expo-router";
import { Pressable, StyleSheet, View } from "react-native";

export default function ScanScreen() {
  const nuds = useNuDSTheme();
  const router = useRouter();
  const [permission, requestPermission] = useCameraPermissions();

  const handleClose = () => {
    if (router.canGoBack()) router.back();
  };

  return (
    <View style={[styles.sheet, { backgroundColor: nuds.color.surface.default }]}>
      {/* ── Handle (pildora gris en la parte superior del bottom sheet) ── */}
      <View style={styles.handleWrap}>
        <View style={[styles.handle, { backgroundColor: "#BDB5C2" }]} />
      </View>

      {/* ── Top Bar: variant="modal" → ícono X a la izquierda, título "Scan" centrado ── */}
      <TopBar
        title="Scan"
        variant="modal"
        show1stAction={false}
        leading={<CloseIcon color={nuds.color.content.default} opacity={0.62} />}
        onBackPress={handleClose}
        style={{ borderTopLeftRadius: 0, borderTopRightRadius: 0 }}
      />

      {/* ── Área de la cámara con padding 24 y bordes redondeados 32 ── */}
      <View style={styles.cameraWrap}>
        <View
          style={[
            styles.cameraFrame,
            { backgroundColor: nuds.color.surface.subtle },
          ]}
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
        </View>
      </View>

      {/* ── Bottom toolbar: galería · Input manually · flash ── */}
      <View style={styles.bottomBar}>
        <Pressable
          accessibilityRole="button"
          accessibilityLabel="Open gallery"
          onPress={() => undefined}
          style={[
            styles.iconButton,
            { borderColor: nuds.color.border.default },
          ]}
        >
          <ImageAddIcon color={nuds.color.content.default} />
        </Pressable>

        <Button
          label="Input manually"
          variant="secondary"
          onPress={() => undefined}
        />

        <Pressable
          accessibilityRole="button"
          accessibilityLabel="Toggle flash"
          onPress={() => undefined}
          style={[
            styles.iconButton,
            { borderColor: nuds.color.border.default },
          ]}
        >
          <BoltIcon color={nuds.color.content.default} />
        </Pressable>
      </View>
    </View>
  );
}

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
});
