import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  Animated as RNAnimated,
  PanResponder,
  Platform,
  ScrollView,
  View,
} from "react-native";
import type { Meta, StoryObj } from "@storybook/react-native";
import {
  Avatar,
  BellIcon,
  Button,
  HeartIcon,
  HelpIcon,
  NText,
  SearchIcon,
  SettingsIcon,
  TopBarFirstLayer,
  useNuDSTheme,
} from "@nu-design-org/nuds-vibecode-react-native";

const onPress = (name: string) => () => {
  console.log(`[storybook] ${name}`);
};

const meta: Meta<typeof TopBarFirstLayer> = {
  title: "Components/TopBarFirstLayer",
  component: TopBarFirstLayer,
  argTypes: {
    themeMode: {
      name: "Theme Mode",
      control: { type: "select" },
      options: ["light", "dark"],
    },
    themeSegment: {
      name: "Segment",
      control: { type: "select" },
      options: ["pf", "pj", "uv"],
    },
  } as Meta["argTypes"],
};
export default meta;

type Story = StoryObj<typeof TopBarFirstLayer>;

export const Playground: Story = {
  name: "Playground",
  args: {
    firstName: "Gabriela",
    tier: "Ultravioleta",
    showTier: true,
    show1stAction: true,
    show2ndAction: true,
    show3rdAction: true,
    isRefreshing: false,
  },
  argTypes: {
    firstName: { name: "First Name", control: { type: "text" } },
    tier: { name: "Tier", control: { type: "text" } },
    showTier: { name: "Show Tier", control: { type: "boolean" } },
    show1stAction: { name: "Show 1st Action", control: { type: "boolean" } },
    show2ndAction: { name: "Show 2nd Action", control: { type: "boolean" } },
    show3rdAction: { name: "Show 3rd Action", control: { type: "boolean" } },
    isRefreshing: { name: "Is Refreshing", control: { type: "boolean" } },
  } as Story["argTypes"],
  render: (args) => (
    <TopBarFirstLayer
      {...args}
      avatar={<Avatar variant="initials" size="medium" initials="GA" />}
      trailing={<SettingsIcon size={20} color="white" />}
      trailingSecond={<HeartIcon size={20} color="white" />}
      trailingThird={<SearchIcon size={20} color="white" />}
      onAvatarPress={onPress("avatar")}
      on1stActionPress={onPress("settings")}
      on2ndActionPress={onPress("heart")}
      on3rdActionPress={onPress("search")}
    />
  ),
};

export const ThreeActions = {
  name: "3 Trailing Actions",
  render: () => (
    <TopBarFirstLayer
      firstName="Gabriela"
      tier="Ultravioleta"
      avatar={<Avatar variant="initials" size="medium" initials="GA" />}
      trailing={<SettingsIcon size={20} color="white" />}
      trailingSecond={<HeartIcon size={20} color="white" />}
      trailingThird={<SearchIcon size={20} color="white" />}
      onAvatarPress={onPress("avatar")}
      on1stActionPress={onPress("settings")}
      on2ndActionPress={onPress("heart")}
      on3rdActionPress={onPress("search")}
    />
  ),
};

export const TwoActions = {
  name: "2 Trailing Actions",
  render: () => (
    <TopBarFirstLayer
      firstName="Gabriela"
      tier="Ultravioleta"
      avatar={<Avatar variant="initials" size="medium" initials="GA" />}
      show3rdAction={false}
      trailing={<SettingsIcon size={20} color="white" />}
      trailingSecond={<HelpIcon size={20} color="white" />}
      onAvatarPress={onPress("avatar")}
      on1stActionPress={onPress("settings")}
      on2ndActionPress={onPress("help")}
    />
  ),
};

export const OneAction = {
  name: "1 Trailing Action",
  render: () => (
    <TopBarFirstLayer
      firstName="Gabriela"
      tier="Tier"
      avatar={<Avatar variant="initials" size="medium" initials="GA" />}
      show2ndAction={false}
      show3rdAction={false}
      trailing={<BellIcon size={20} color="white" />}
      onAvatarPress={onPress("avatar")}
      on1stActionPress={onPress("bell")}
    />
  ),
};

export const NoTier = {
  name: "No Tier",
  render: () => (
    <TopBarFirstLayer
      firstName="Gabriela"
      showTier={false}
      avatar={<Avatar variant="initials" size="medium" initials="GA" />}
      trailing={<SettingsIcon size={20} color="white" />}
      trailingSecond={<HeartIcon size={20} color="white" />}
      trailingThird={<SearchIcon size={20} color="white" />}
      onAvatarPress={onPress("avatar")}
      on1stActionPress={onPress("settings")}
      on2ndActionPress={onPress("heart")}
      on3rdActionPress={onPress("search")}
    />
  ),
};

export const NoActions = {
  name: "No Actions",
  render: () => (
    <TopBarFirstLayer
      firstName="Gabriela"
      tier="Ultravioleta"
      avatar={<Avatar variant="initials" size="medium" initials="GA" />}
      show1stAction={false}
      show2ndAction={false}
      show3rdAction={false}
      onAvatarPress={onPress("avatar")}
    />
  ),
};

export const AllVariants = {
  name: "All Variants",
  render: () => (
    <View style={{ gap: 16 }}>
      <NText
        variant="labelXSmallDefault"
        tone="secondary"
        style={{ paddingHorizontal: 8 }}
      >
        3 trailing actions
      </NText>
      <TopBarFirstLayer
        firstName="Gabriela"
        tier="Ultravioleta"
        avatar={<Avatar variant="initials" size="medium" initials="GA" />}
        trailing={<SettingsIcon size={20} color="white" />}
        trailingSecond={<HeartIcon size={20} color="white" />}
        trailingThird={<SearchIcon size={20} color="white" />}
        onAvatarPress={onPress("avatar")}
        on1stActionPress={onPress("settings")}
        on2ndActionPress={onPress("heart")}
        on3rdActionPress={onPress("search")}
      />

      <NText
        variant="labelXSmallDefault"
        tone="secondary"
        style={{ paddingHorizontal: 8 }}
      >
        2 trailing actions
      </NText>
      <TopBarFirstLayer
        firstName="Gabriela"
        tier="Ultravioleta"
        avatar={<Avatar variant="initials" size="medium" initials="GA" />}
        show3rdAction={false}
        trailing={<SettingsIcon size={20} color="white" />}
        trailingSecond={<HelpIcon size={20} color="white" />}
        onAvatarPress={onPress("avatar")}
        on1stActionPress={onPress("settings")}
        on2ndActionPress={onPress("help")}
      />

      <NText
        variant="labelXSmallDefault"
        tone="secondary"
        style={{ paddingHorizontal: 8 }}
      >
        1 trailing action
      </NText>
      <TopBarFirstLayer
        firstName="Gabriela"
        tier="Tier"
        avatar={<Avatar variant="initials" size="medium" initials="GA" />}
        show2ndAction={false}
        show3rdAction={false}
        trailing={<BellIcon size={20} color="white" />}
        onAvatarPress={onPress("avatar")}
        on1stActionPress={onPress("bell")}
      />

      <NText
        variant="labelXSmallDefault"
        tone="secondary"
        style={{ paddingHorizontal: 8 }}
      >
        No tier
      </NText>
      <TopBarFirstLayer
        firstName="Gabriela"
        showTier={false}
        avatar={<Avatar variant="initials" size="medium" initials="GA" />}
        trailing={<SettingsIcon size={20} color="white" />}
        trailingSecond={<HeartIcon size={20} color="white" />}
        trailingThird={<SearchIcon size={20} color="white" />}
        onAvatarPress={onPress("avatar")}
        on1stActionPress={onPress("settings")}
        on2ndActionPress={onPress("heart")}
        on3rdActionPress={onPress("search")}
      />

      <NText
        variant="labelXSmallDefault"
        tone="secondary"
        style={{ paddingHorizontal: 8 }}
      >
        No actions
      </NText>
      <TopBarFirstLayer
        firstName="Gabriela"
        tier="Ultravioleta"
        avatar={<Avatar variant="initials" size="medium" initials="GA" />}
        show1stAction={false}
        show2ndAction={false}
        show3rdAction={false}
        onAvatarPress={onPress("avatar")}
      />
    </View>
  ),
};

// ── Pull-to-Refresh interactive demo ─────────────────────────────────

const PULL_THRESHOLD = 80;
const PULL_RESISTANCE = 0.4;
const PLACEHOLDER_ITEMS = Array.from({ length: 12 }, (_, i) => `Item ${i + 1}`);

const PullToRefreshDemo = () => {
  const theme = useNuDSTheme();
  const [refreshing, setRefreshing] = useState(false);
  const pullY = useRef(new RNAnimated.Value(0)).current;
  const scrollOffsetY = useRef(0);
  const refreshingRef = useRef(false);

  useEffect(() => {
    refreshingRef.current = refreshing;
  }, [refreshing]);

  const handleRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 2000);
  }, []);

  const springBack = useCallback(() => {
    RNAnimated.spring(pullY, {
      toValue: 0,
      useNativeDriver: Platform.OS !== "web",
      tension: 60,
      friction: 10,
    }).start();
  }, [pullY]);

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => false,
      onMoveShouldSetPanResponder: (_, gs) => {
        if (refreshingRef.current) return false;
        if (scrollOffsetY.current > 5) return false;
        return gs.dy > 10 && Math.abs(gs.dy) > Math.abs(gs.dx);
      },
      onPanResponderMove: (_, gs) => {
        if (gs.dy > 0 && !refreshingRef.current) {
          pullY.setValue(gs.dy * PULL_RESISTANCE);
        }
      },
      onPanResponderRelease: (_, gs) => {
        if (
          gs.dy * PULL_RESISTANCE >= PULL_THRESHOLD &&
          !refreshingRef.current
        ) {
          handleRefresh();
        }
        springBack();
      },
      onPanResponderTerminate: () => {
        springBack();
      },
    })
  ).current;

  const handleScroll = useCallback(
    (e: { nativeEvent: { contentOffset: { y: number } } }) => {
      scrollOffsetY.current = e.nativeEvent.contentOffset.y;
    },
    []
  );

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: theme.color.surface.accent.primary,
      }}
    >
      <TopBarFirstLayer
        firstName="Gabriela"
        tier="Ultravioleta"
        avatar={<Avatar variant="initials" size="medium" initials="GA" />}
        trailing={<SettingsIcon size={20} color="white" />}
        trailingSecond={<HeartIcon size={20} color="white" />}
        trailingThird={<SearchIcon size={20} color="white" />}
        isRefreshing={refreshing}
        onAvatarPress={onPress("avatar")}
        on1stActionPress={onPress("settings")}
        on2ndActionPress={onPress("heart")}
        on3rdActionPress={onPress("search")}
      />
      <RNAnimated.View
        style={{
          flex: 1,
          transform: [{ translateY: pullY }],
        }}
        {...panResponder.panHandlers}
      >
        <ScrollView
          style={{ flex: 1, backgroundColor: "#f5f5f5" }}
          onScroll={handleScroll}
          scrollEventThrottle={16}
          bounces={false}
        >
          <NText
            variant="labelSmallDefault"
            tone="secondary"
            style={{ textAlign: "center", paddingVertical: 16 }}
          >
            Pull down to refresh
          </NText>
          {PLACEHOLDER_ITEMS.map((item) => (
            <View
              key={item}
              style={{
                marginHorizontal: 16,
                marginTop: 12,
                padding: 20,
                backgroundColor: "white",
                borderRadius: 12,
              }}
            >
              <NText variant="paragraphMediumDefault" tone="primary">
                {item}
              </NText>
            </View>
          ))}
          <View style={{ height: 40 }} />
        </ScrollView>
      </RNAnimated.View>
    </View>
  );
};

export const PullToRefresh = {
  name: "Pull to Refresh",
  render: () => <PullToRefreshDemo />,
};

// ── Toggle demo (manual isRefreshing control) ────────────────────────

const RefreshingStateDemo = () => {
  const [refreshing, setRefreshing] = useState(false);

  return (
    <View style={{ flex: 1, gap: 24 }}>
      <TopBarFirstLayer
        firstName="Gabriela"
        tier="Ultravioleta"
        avatar={<Avatar variant="initials" size="medium" initials="GA" />}
        trailing={<SettingsIcon size={20} color="white" />}
        trailingSecond={<HeartIcon size={20} color="white" />}
        trailingThird={<SearchIcon size={20} color="white" />}
        isRefreshing={refreshing}
        onAvatarPress={onPress("avatar")}
        on1stActionPress={onPress("settings")}
        on2ndActionPress={onPress("heart")}
        on3rdActionPress={onPress("search")}
      />
      <View style={{ paddingHorizontal: 16 }}>
        <Button onPress={() => setRefreshing((v) => !v)}>
          {refreshing ? "Stop Refreshing" : "Start Refreshing"}
        </Button>
      </View>
      <NText
        variant="labelSmallDefault"
        tone="secondary"
        style={{ paddingHorizontal: 16 }}
      >
        {refreshing ? "isRefreshing = true" : "isRefreshing = false"}
      </NText>
    </View>
  );
};

export const RefreshingState = {
  name: "Refreshing State Toggle",
  render: () => <RefreshingStateDemo />,
};
