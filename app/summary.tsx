import {
  ArrowBackIcon,
  Badge,
  Button,
  ListRow,
  NText,
  PencilIcon,
  SectionTitle,
  TopBar,
  useNuDSTheme,
} from "@nu-design-org/nuds-vibecode-react-native";
import { useRouter } from "expo-router";
import { Image, ScrollView, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const urbanRentalsLogo = require("../assets/urban-rentals.png");

export default function SummaryScreen() {
  const nuds = useNuDSTheme();
  const router = useRouter();

  const handleBack = () => {
    if (router.canGoBack()) router.back();
  };

  const handleConfirm = () => {
    if (router.canGoBack()) router.back();
  };

  return (
    <SafeAreaView
      style={[styles.safe, { backgroundColor: nuds.color.surface.default }]}
      edges={["top", "left", "right"]}
    >
      {/* ── Top Bar modal con flecha de regreso (variant=Modal en Figma) ── */}
      <TopBar
        title=""
        variant="modal"
        show1stAction={false}
        leading={<ArrowBackIcon color={nuds.color.content.default} opacity={0.62} />}
        onBackPress={handleBack}
        style={{ borderTopLeftRadius: 0, borderTopRightRadius: 0 }}
      />

      <ScrollView
        contentContainerStyle={styles.scroll}
        showsVerticalScrollIndicator={false}
      >
        {/* ── Snapshot Header (avatar + monto + badge) ── */}
        <View style={styles.headerWrap}>
          {/* Avatar real de Urban Rentals (size large = 64×64 según NuDS) */}
          <View style={styles.brandAvatar}>
            <Image
              source={urbanRentalsLogo}
              style={styles.brandAvatarImage}
              resizeMode="cover"
            />
          </View>

          <View style={styles.amountWrap}>
            <NText
              variant="labelSmallDefault"
              tone="secondary"
              style={styles.merchantName}
            >
              Urban Rentals
            </NText>
            <NText variant="titleLarge" tone="primary" style={styles.amount}>
              $449.00
            </NText>
          </View>

          <Badge label="Due June 2nd" color="success" />
        </View>

        {/* ── Section Title #1 (Figma node 5058:20707) ── */}
        <SectionTitle title="Pay with" compact />

        {/* ── Lista 1: Cash balance ── */}
        <View style={styles.listGroup}>
          <View
            style={[
              styles.listCard,
              {
                borderColor: nuds.color.border.default,
                backgroundColor: nuds.color.surface.default,
              },
            ]}
          >
            <ListRow
              label="Cash balance"
              description="$5,000.00"
              invertLabels
              trailing={<PencilIcon color={nuds.color.content.subtle} />}
              onPress={() => undefined}
            />
          </View>
        </View>

        {/* ── Section Title #2 (Figma node 5058:20714) ── */}
        <SectionTitle title="Schedule" compact />

        {/* ── Lista 2: When to pay + Reminder ── */}
        <View style={styles.listGroup}>
          <View
            style={[
              styles.listCard,
              {
                borderColor: nuds.color.border.default,
                backgroundColor: nuds.color.surface.default,
              },
            ]}
          >
            <ListRow
              label="When to pay"
              description="Today · One-time"
              invertLabels
              trailing={<PencilIcon color={nuds.color.content.subtle} />}
              showDivider
              onPress={() => undefined}
            />
            <ListRow
              label="Reminder"
              description="3 days before due date"
              invertLabels
              trailing={<PencilIcon color={nuds.color.content.subtle} />}
              onPress={() => undefined}
            />
          </View>
        </View>
      </ScrollView>

      {/* ── Bottom bar con "Confirm" ── */}
      <SafeAreaView edges={["bottom"]} style={styles.bottomBarSafe}>
        <View style={styles.bottomBar}>
          <Button
            label="Confirm"
            variant="primary"
            expanded
            onPress={handleConfirm}
          />
        </View>
      </SafeAreaView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
  },
  scroll: {
    paddingBottom: 24,
  },
  headerWrap: {
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 8,
    paddingBottom: 48,
    gap: 16,
  },
  amountWrap: {
    alignItems: "center",
    paddingTop: 20,
    gap: 4,
  },
  merchantName: {
    textAlign: "center",
  },
  amount: {
    fontSize: 36,
    lineHeight: 40,
    textAlign: "center",
  },
  listGroup: {
    paddingHorizontal: 16,
    paddingBottom: 12,
  },
  listCard: {
    borderWidth: 1,
    borderRadius: 24,
    overflow: "hidden",
  },
  bottomBarSafe: {
    backgroundColor: "transparent",
  },
  bottomBar: {
    paddingHorizontal: 20,
    paddingVertical: 24,
  },
  brandAvatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
    overflow: "hidden",
    backgroundColor: "#FFFFFF",
  },
  brandAvatarImage: {
    width: "100%",
    height: "100%",
  },
});
