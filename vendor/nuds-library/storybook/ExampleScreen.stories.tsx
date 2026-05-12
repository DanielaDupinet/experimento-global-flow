import React from "react";
import { ScrollView, View } from "react-native";
import {
  Box,
  Button,
  NText,
  Divider,
  TopBar,
  TextField,
  Select,
  InlineActions,
  CircularLoader,
  DashboardHero,
  Hero,
  LimitBar,
  Widget2x2,
  Widget4xN,
  useNuDSTheme,
  BellIcon,
  SettingsIcon,
  SendIcon,
  CreditCardIcon,
  SearchIcon,
  ChevronIcon,
  MoneyBillIcon,
  WalletIcon,
} from "@nu-design-org/nuds-vibecode-react-native";

const onPress = (name: string) => () => {
  console.log(`[ExampleScreen] ${name}`);
};

export default {
  title: "Example/HomeScreen",
};

/* ─────────────────────────────────────────────
 * Full-page example: Credit Card Home Dashboard
 * ───────────────────────────────────────────── */

const HomeDashboard = () => {
  const theme = useNuDSTheme();

  return (
    <View style={{ flex: 1, backgroundColor: theme.color.background.default }}>
      {/* ── Top Bar ── */}
      <TopBar
        title="Home"
        variant="default"
        background="default"
        trailing={<BellIcon size={22} />}
        trailingSecond={<SettingsIcon size={22} />}
        show1stAction
        show2ndAction
        on1stActionPress={onPress("notifications")}
        on2ndActionPress={onPress("settings")}
      />

      <ScrollView
        contentContainerStyle={{
          paddingBottom: theme.spacing[12],
          gap: theme.spacing[6],
        }}
        showsVerticalScrollIndicator={false}
      >
        {/* ── Dashboard Hero: Balance & Due Date ── */}
        <DashboardHero
          balance="$4,231.78"
          dueDate="Feb 28"
          showAutopay
          autopayDate="Mar 05"
          autopayStatus="success"
          enableRotation
        />

        {/* ── Quick Actions ── */}
        <View style={{ paddingHorizontal: theme.spacing[4] }}>
          <InlineActions
            variant="buttons"
            actions={[
              {
                key: "pay",
                label: "Pay",
                type: "Primary",
                icon: <MoneyBillIcon size={14} />,
                onPress: onPress("pay"),
              },
              {
                key: "transfer",
                label: "Transfer",
                type: "Secondary",
                icon: <SendIcon size={14} />,
                onPress: onPress("transfer"),
              },
              {
                key: "cards",
                label: "Cards",
                type: "Secondary",
                icon: <CreditCardIcon size={14} />,
                onPress: onPress("cards"),
              },
            ]}
            showMore
            onMorePress={onPress("more-actions")}
          />
        </View>

        {/* ── Credit Limit Bar ── */}
        <View style={{ paddingHorizontal: theme.spacing[4] }}>
          <LimitBar
            availableAmount={7250}
            totalLimit={10000}
            onManagePress={onPress("manage-limit")}
          />
        </View>

        <Divider />

        {/* ── Widget Row: 2x2 Summary Cards ── */}
        <View
          style={{
            paddingHorizontal: theme.spacing[4],
            flexDirection: "row",
            gap: theme.spacing[3],
          }}
        >
          <View style={{ flex: 1 }}>
            <Widget2x2
              overline="This month"
              title="$1,823.40"
              description="Total spent"
              descriptionVariant="default"
              onPress={onPress("total-spent")}
            />
          </View>
          <View style={{ flex: 1 }}>
            <Widget2x2
              overline="Savings"
              title="$5,678.90"
              description="+3.2%"
              descriptionVariant="performanceUp"
              onPress={onPress("savings")}
            />
          </View>
        </View>

        {/* ── Recent Transactions Widget ── */}
        <View style={{ paddingHorizontal: theme.spacing[4] }}>
          <Widget2x2
            variant="list3"
            overline="Recent"
            title="Transactions"
            listItems={[
              {
                key: "t1",
                label: "Uber Trip",
                description: "-$14.50",
                onPress: onPress("uber-trip"),
              },
              {
                key: "t2",
                label: "Spotify",
                description: "-$9.99",
                onPress: onPress("spotify"),
              },
              {
                key: "t3",
                label: "Grocery Store",
                description: "-$67.32",
                onPress: onPress("grocery"),
              },
            ]}
            buttonLabel="View all"
            onButtonPress={onPress("view-all-transactions")}
          />
        </View>

        {/* ── Spend Goal Progress ── */}
        <View style={{ paddingHorizontal: theme.spacing[4] }}>
          <Widget4xN
            variant="determinate"
            overline="Monthly goal"
            title="Spend tracking"
            description="You've used 58% of your $3,000 budget"
            progress={58}
            progressLabel="Budget"
            buttons={[
              {
                key: "adjust",
                label: "Adjust goal",
                onPress: onPress("adjust-goal"),
                type: "Secondary",
              },
            ]}
          />
        </View>

        {/* ── Promotional Cross-sell Widget ── */}
        <View style={{ paddingHorizontal: theme.spacing[4] }}>
          <Hero
            overline="For you"
            title="Start investing with as little as $1"
            description="Grow your money with diversified portfolios curated by experts."
            buttons={[
              {
                key: "explore",
                label: "Explore investments",
                onPress: onPress("explore-investments"),
                type: "Primary",
              },
              {
                key: "dismiss",
                label: "Not now",
                onPress: onPress("dismiss-promo"),
                type: "Secondary",
              },
            ]}
            onPress={onPress("promo-card")}
          />
        </View>

        <Divider />

        {/* ── Help Section ── */}
        <View
          style={{
            paddingHorizontal: theme.spacing[4],
            gap: theme.spacing[3],
          }}
        >
          <NText variant="subtitleMediumStrong">Need help?</NText>
          <NText variant="labelXSmallDefault" tone="secondary">
            Chat with us or browse our support articles.
          </NText>
          <View style={{ flexDirection: "row", gap: theme.spacing[3] }}>
            <Button
              label="Chat with us"
              variant="secondary"
              compact
              onPress={onPress("chat")}
            />
            <Button
              label="Help center"
              variant="ghost"
              compact
              trailingIcon={<ChevronIcon size={14} />}
              onPress={onPress("help-center")}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export const CreditCardHome = {
  render: () => <HomeDashboard />,
};

/* ─────────────────────────────────────────────
 * Full-page example: Profile & Settings Screen
 * ───────────────────────────────────────────── */

const ProfileScreen = () => {
  const theme = useNuDSTheme();

  return (
    <View style={{ flex: 1, backgroundColor: theme.color.background.default }}>
      <TopBar
        title="Profile"
        variant="default"
        background="subtle"
        onBackPress={onPress("back")}
      />

      <ScrollView
        contentContainerStyle={{
          padding: theme.spacing[4],
          gap: theme.spacing[5],
        }}
        showsVerticalScrollIndicator={false}
      >
        {/* ── User Info Card ── */}
        <Box
          surface="primary"
          style={{
            padding: theme.spacing[4],
            borderRadius: theme.radius.lg,
            gap: theme.spacing[3],
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: theme.spacing[3],
            }}
          >
            <View
              style={{
                width: 56,
                height: 56,
                borderRadius: theme.radius.full,
                backgroundColor: theme.color.surface.accent.primary,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <NText variant="titleMedium" tone="inverse">
                PG
              </NText>
            </View>
            <View style={{ flex: 1, gap: theme.spacing[1] }}>
              <NText variant="subtitleMediumStrong">Polo Garcia</NText>
              <NText variant="labelXSmallDefault" tone="secondary">
                polo.garcia@email.com
              </NText>
            </View>
            <ChevronIcon size={20} color={theme.color.content.subtle} />
          </View>
        </Box>

        {/* ── Edit Form ── */}
        <View style={{ gap: theme.spacing[4] }}>
          <NText variant="subtitleMediumStrong">Personal information</NText>

          <TextField
            label="Full name"
            value="Polo Garcia"
            placeholder="Your full name"
          />

          <TextField
            label="Email"
            value="polo.garcia@email.com"
            placeholder="Your email address"
            hint="This is used for account notifications"
            keyboardType="email-address"
          />

          <TextField
            label="Phone"
            value="+1 (555) 123-4567"
            placeholder="Your phone number"
            keyboardType="phone-pad"
          />

          <Select
            label="Preferred language"
            placeholder="Select language"
            value="en"
            options={[
              { value: "en", label: "English" },
              { value: "es", label: "Spanish" },
              { value: "pt", label: "Portuguese" },
            ]}
          />
        </View>

        <Divider />

        {/* ── Preferences Section ── */}
        <View style={{ gap: theme.spacing[4] }}>
          <NText variant="subtitleMediumStrong">Account preferences</NText>

          <Select
            label="Default currency"
            value="usd"
            options={[
              { value: "usd", label: "USD - US Dollar" },
              { value: "brl", label: "BRL - Brazilian Real" },
              { value: "mxn", label: "MXN - Mexican Peso" },
            ]}
          />

          <Select
            label="Statement frequency"
            value="monthly"
            options={[
              { value: "monthly", label: "Monthly" },
              { value: "biweekly", label: "Bi-weekly" },
              { value: "weekly", label: "Weekly" },
            ]}
          />
        </View>

        <Divider />

        {/* ── Action Buttons ── */}
        <View style={{ gap: theme.spacing[3] }}>
          <Button
            label="Save changes"
            variant="primary"
            expanded
            onPress={onPress("save")}
          />
          <Button
            label="Log out"
            variant="destructive"
            expanded
            onPress={onPress("logout")}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export const ProfileSettings = {
  render: () => <ProfileScreen />,
};

/* ─────────────────────────────────────────────
 * Full-page example: Payments & Search Screen
 * ───────────────────────────────────────────── */

const PaymentsScreen = () => {
  const theme = useNuDSTheme();

  return (
    <View style={{ flex: 1, backgroundColor: theme.color.background.default }}>
      <TopBar
        title="Payments"
        variant="default"
        background="default"
        onBackPress={onPress("back")}
        trailing={<WalletIcon size={22} />}
        show1stAction
        on1stActionPress={onPress("wallet")}
      />

      <ScrollView
        contentContainerStyle={{
          padding: theme.spacing[4],
          gap: theme.spacing[5],
        }}
        showsVerticalScrollIndicator={false}
      >
        {/* ── Search ── */}
        <TextField
          label="Search payments"
          placeholder="Search by name or amount"
          leading={<SearchIcon size={18} color={theme.color.content.subtle} />}
        />

        {/* ── Filter ── */}
        <Select
          label="Filter by"
          placeholder="All payments"
          options={[
            { value: "all", label: "All payments" },
            { value: "pending", label: "Pending" },
            { value: "completed", label: "Completed" },
            { value: "failed", label: "Failed" },
          ]}
        />

        {/* ── Pending Payments ── */}
        <View style={{ gap: theme.spacing[3] }}>
          <NText variant="subtitleMediumStrong">Pending</NText>
          <Widget4xN
            variant="list"
            overline="Due soon"
            title="Upcoming bills"
            listItems={[
              {
                key: "rent",
                label: "Rent",
                description: "$1,200.00 · Feb 28",
                onPress: onPress("rent"),
              },
              {
                key: "electricity",
                label: "Electricity",
                description: "$87.50 · Mar 02",
                onPress: onPress("electricity"),
              },
              {
                key: "internet",
                label: "Internet",
                description: "$59.99 · Mar 05",
                onPress: onPress("internet"),
              },
            ]}
            buttons={[
              {
                key: "pay-all",
                label: "Pay all",
                onPress: onPress("pay-all"),
                type: "Primary",
              },
            ]}
          />
        </View>

        <Divider />

        {/* ── Completed Payments ── */}
        <View style={{ gap: theme.spacing[3] }}>
          <NText variant="subtitleMediumStrong">Completed</NText>

          <Widget2x2
            variant="list3"
            overline="February"
            title="Recent payments"
            listItems={[
              {
                key: "p1",
                label: "Netflix",
                description: "-$15.99",
                onPress: onPress("netflix"),
              },
              {
                key: "p2",
                label: "Gym membership",
                description: "-$45.00",
                onPress: onPress("gym"),
              },
              {
                key: "p3",
                label: "Water bill",
                description: "-$32.10",
                onPress: onPress("water"),
              },
            ]}
            buttonLabel="See full history"
            onButtonPress={onPress("full-history")}
          />
        </View>

        <Divider />

        {/* ── Quick Pay Section ── */}
        <View style={{ gap: theme.spacing[3] }}>
          <NText variant="subtitleMediumStrong">Quick pay</NText>
          <NText variant="labelXSmallDefault" tone="secondary">
            Send money to your frequent contacts
          </NText>
          <InlineActions
            variant="buttons"
            actions={[
              {
                key: "ana",
                label: "Ana",
                type: "Secondary",
                onPress: onPress("pay-ana"),
              },
              {
                key: "carlos",
                label: "Carlos",
                type: "Secondary",
                onPress: onPress("pay-carlos"),
              },
              {
                key: "maria",
                label: "Maria",
                type: "Secondary",
                onPress: onPress("pay-maria"),
              },
            ]}
          />
        </View>

        {/* ── Schedule Payment CTA ── */}
        <Button
          label="Schedule a payment"
          variant="primary"
          expanded
          leadingIcon={<SendIcon size={16} />}
          onPress={onPress("schedule-payment")}
        />
      </ScrollView>
    </View>
  );
};

export const PaymentsHub = {
  render: () => <PaymentsScreen />,
};
