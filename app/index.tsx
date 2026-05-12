import {
  Avatar,
  Button,
  CameraIcon,
  CloseIcon,
  GiftCardsIcon,
  HouseIcon,
  InlineActions,
  NText,
  NuLogoIcon,
  SectionTitle,
  SmartphoneIcon,
  TransactionListRow,
  useNuDSTheme,
} from "@nu-design-org/nuds-vibecode-react-native";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Image, Pressable, ScrollView, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const attLogo = require("../assets/att.png");
const netflixLogo = require("../assets/netflix.png");

const NUDS_TOP_ICON_HIT = 44;
const NUDS_TOP_ICON_INNER = 32;

export default function PayScreen() {
  const nuds = useNuDSTheme();
  const router = useRouter();

  /* ── Iconos circulares de Inline Actions (Add bill / Top Up / Gift card) ── */
  const inlineIconColor = nuds.color.content.default;

  /* ── Colores de marca tomados del diseño Figma ── */
  const brandColors = {
    nu: "#820AD1",
    rent: "#8E8693",
  };

  /* ── Avatar circular de 32px con imagen real (mismo tamaño que NuDS Avatar size="small") ── */
  const BrandImageAvatar = ({ source }: { source: number }) => (
    <View style={styles.brandAvatar}>
      <Image source={source} style={styles.brandAvatarImage} resizeMode="cover" />
    </View>
  );

  const transactions = [
    {
      key: "att",
      label: "AT&T",
      timestamp: "2 Jun",
      description: "To pay",
      amount: "100.00",
      amountPrefix: "$",
      leading: <BrandImageAvatar source={attLogo} />,
    },
    {
      key: "credit-card",
      label: "Credit card",
      timestamp: "4 Jun",
      description: "To pay",
      amount: "100.00",
      amountPrefix: "$",
      leading: (
        <Avatar
          variant="icon"
          size="small"
          backgroundColor={brandColors.nu}
          icon={<NuLogoIcon size={16} color="#FFFFFF" />}
        />
      ),
    },
    {
      key: "rent",
      label: "Rent",
      timestamp: "8 Jun",
      description: "To pay",
      amount: "100.00",
      amountPrefix: "$",
      leading: (
        <Avatar
          variant="icon"
          size="small"
          backgroundColor={brandColors.rent}
          icon={<HouseIcon size={16} color="#FFFFFF" />}
        />
      ),
    },
    {
      key: "netflix",
      label: "Netflix",
      timestamp: "18 Jun",
      description: "To pay",
      amount: "100.00",
      amountPrefix: "$",
      leading: <BrandImageAvatar source={netflixLogo} />,
    },
  ];

  return (
    <SafeAreaView style={styles.safe} edges={["top", "left", "right"]}>
      <StatusBar style="dark" />

      {/* ── Top Bar con sólo botón de cerrar ── */}
      <View style={styles.topBar}>
        <Pressable
          accessibilityRole="button"
          accessibilityLabel="Close"
          hitSlop={12}
          onPress={() => undefined}
          style={styles.topBarLeading}
        >
          <View style={styles.topBarLeadingInner}>
            <CloseIcon color={nuds.color.content.default} opacity={0.62} />
          </View>
        </Pressable>
      </View>

      <ScrollView
        contentContainerStyle={{ paddingBottom: nuds.spacing[8] }}
        showsVerticalScrollIndicator={false}
      >
        {/* ── Header: título "Pay" ── */}
        <View
          style={{
            paddingHorizontal: nuds.spacing[5],
            paddingTop: nuds.spacing[5],
            paddingBottom: nuds.spacing[5],
          }}
        >
          <NText variant="titleMedium" tone="primary">
            Pay
          </NText>
        </View>

        {/* ── Inline Actions: 3 acciones (Add bill / Top Up / Gift card) ── */}
        <InlineActions
          actions={[
            {
              key: "add-bill",
              label: "Add bill",
              icon: <CameraIcon color={inlineIconColor} />,
              onPress: () => router.push("/scan"),
            },
            {
              key: "top-up",
              label: "Top Up",
              icon: <SmartphoneIcon color={inlineIconColor} />,
              onPress: () => undefined,
            },
            {
              key: "gift-card",
              label: "Gift card",
              icon: <GiftCardsIcon color={inlineIconColor} />,
              onPress: () => undefined,
            },
          ]}
        />

        {/* ── Section Title: "Upcoming" ── */}
        <SectionTitle title="Upcoming" compact />

        {/* ── Transaction Card ── */}
        <View style={{ paddingHorizontal: nuds.spacing[4] }}>
          <View
            style={[
              styles.transactionCard,
              {
                borderColor: nuds.color.border.default,
                backgroundColor: nuds.color.surface.default,
              },
            ]}
          >
            <View style={{ paddingVertical: nuds.spacing[2] }}>
              {transactions.map((tx, index) => {
                const isLast = index === transactions.length - 1;
                return (
                  <TransactionListRow
                    key={tx.key}
                    label={tx.label}
                    timestamp={tx.timestamp}
                    description={tx.description}
                    amount={tx.amount}
                    amountPrefix={tx.amountPrefix}
                    leading={tx.leading}
                    size="small"
                    showDivider={!isLast}
                  />
                );
              })}
            </View>

            {/* "Show more" — compact, secondary, no expanded (centrado) */}
            <View style={styles.showMoreWrap}>
              <Button
                label="Show more"
                variant="secondary"
                compact
                onPress={() => undefined}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  topBar: {
    height: 64,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 8,
  },
  topBarLeading: {
    width: NUDS_TOP_ICON_HIT,
    height: NUDS_TOP_ICON_HIT,
    justifyContent: "center",
    alignItems: "center",
  },
  topBarLeadingInner: {
    width: NUDS_TOP_ICON_INNER,
    height: NUDS_TOP_ICON_INNER,
    justifyContent: "center",
    alignItems: "center",
  },
  transactionCard: {
    borderWidth: 1,
    borderRadius: 24,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 0,
    elevation: 1,
  },
  showMoreWrap: {
    alignItems: "center",
    paddingHorizontal: 12,
    paddingBottom: 12,
    paddingTop: 4,
  },
  brandAvatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    overflow: "hidden",
    backgroundColor: "#FFFFFF",
  },
  brandAvatarImage: {
    width: "100%",
    height: "100%",
  },
});
