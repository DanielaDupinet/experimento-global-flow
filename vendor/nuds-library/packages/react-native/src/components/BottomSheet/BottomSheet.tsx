import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  Animated,
  Dimensions,
  Easing,
  Keyboard,
  LayoutChangeEvent,
  Modal,
  PanResponder,
  Platform,
  Pressable,
  View,
} from "react-native";
import type { KeyboardEvent, StyleProp, ViewStyle } from "react-native";
import { TopBar } from "../TopBar";
import { useNuDSTheme } from "../../theme";

const SCREEN_HEIGHT = Dimensions.get("window").height;
const ANIMATION_DURATION = 300;
const DISMISS_THRESHOLD = 120;

type BottomSheetTone = "default" | "subtle";

export type BottomSheetProps = {
  /** Controls visibility of the bottom sheet */
  visible: boolean;
  /** Called when the bottom sheet is dismissed */
  onClose: () => void;
  /** Title displayed in the top bar */
  title?: string;
  /** Background tone — "default" (white) or "subtle" (light gray) */
  tone?: BottomSheetTone;
  /** Whether to show the drag handle indicator */
  showHandle?: boolean;
  /** Whether to show the first action icon in the top bar */
  show1stAction?: boolean;
  /** Whether to show the second action icon in the top bar */
  show2ndAction?: boolean;
  /** Custom leading element for the top bar */
  leading?: React.ReactNode;
  /** Custom trailing element for the top bar */
  trailing?: React.ReactNode;
  /** Called when the first action is pressed */
  on1stActionPress?: () => void;
  /** Called when the second action is pressed */
  on2ndActionPress?: () => void;
  /** Whether the sheet should move above the keyboard when it appears */
  avoidKeyboard?: boolean;
  /** Content rendered inside the bottom sheet */
  children?: React.ReactNode;
  /** Optional extra styles for the sheet container */
  style?: StyleProp<ViewStyle>;
};

export const BottomSheet = ({
  visible,
  onClose,
  title = "Screen Title",
  tone = "default",
  showHandle = false,
  show1stAction = true,
  show2ndAction = false,
  leading,
  trailing,
  on1stActionPress,
  on2ndActionPress,
  avoidKeyboard = false,
  children,
  style,
}: BottomSheetProps) => {
  const theme = useNuDSTheme();

  // Internal state keeps the Modal mounted during the exit animation
  const [modalVisible, setModalVisible] = useState(visible);
  const isClosing = useRef(false);

  const overlayAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(SCREEN_HEIGHT)).current;
  const keyboardAnim = useRef(new Animated.Value(0)).current;
  const sheetHeight = useRef(SCREEN_HEIGHT * 0.5);

  const onSheetLayout = (e: LayoutChangeEvent) => {
    sheetHeight.current = e.nativeEvent.layout.height;
  };

  // -------------------------------------------------------------------------
  // Keyboard avoidance
  // -------------------------------------------------------------------------
  useEffect(() => {
    if (!avoidKeyboard || !modalVisible) return;

    const showEvent =
      Platform.OS === "ios" ? "keyboardWillShow" : "keyboardDidShow";
    const hideEvent =
      Platform.OS === "ios" ? "keyboardWillHide" : "keyboardDidHide";

    const onShow = (e: KeyboardEvent) => {
      Animated.timing(keyboardAnim, {
        toValue: e.endCoordinates.height,
        duration: Platform.OS === "ios" ? e.duration : 250,
        easing: Easing.out(Easing.cubic),
        useNativeDriver: true,
      }).start();
    };

    const onHide = (e: KeyboardEvent) => {
      Animated.timing(keyboardAnim, {
        toValue: 0,
        duration: Platform.OS === "ios" ? e.duration : 200,
        easing: Easing.in(Easing.cubic),
        useNativeDriver: true,
      }).start();
    };

    const subShow = Keyboard.addListener(showEvent, onShow);
    const subHide = Keyboard.addListener(hideEvent, onHide);

    return () => {
      subShow.remove();
      subHide.remove();
    };
  }, [avoidKeyboard, modalVisible, keyboardAnim]);

  // -------------------------------------------------------------------------
  // Open / close animations
  // -------------------------------------------------------------------------

  // Handle external visible prop changes
  useEffect(() => {
    if (visible) {
      // Opening: show modal immediately, then animate in
      isClosing.current = false;
      setModalVisible(true);
      Animated.parallel([
        Animated.timing(overlayAnim, {
          toValue: 1,
          duration: ANIMATION_DURATION,
          easing: Easing.out(Easing.ease),
          useNativeDriver: true,
        }),
        Animated.timing(slideAnim, {
          toValue: 0,
          duration: ANIMATION_DURATION,
          easing: Easing.out(Easing.cubic),
          useNativeDriver: true,
        }),
      ]).start();
    } else if (modalVisible && !isClosing.current) {
      // Parent set visible=false → run exit animation, then hide modal.
      // Don't call onClose — the parent already initiated the close.
      runCloseAnimation(false);
    }
  }, [visible]); // eslint-disable-line react-hooks/exhaustive-deps

  /**
   * Animate the sheet off-screen.
   * @param notifyParent - when `true` (internal dismiss: drag / overlay tap),
   *   call `onClose()` after the animation so the parent can update `visible`.
   *   When `false` (parent-driven close), skip the callback to avoid a double call.
   */
  const runCloseAnimation = (notifyParent: boolean) => {
    if (isClosing.current) return;
    isClosing.current = true;
    Keyboard.dismiss();
    Animated.parallel([
      Animated.timing(overlayAnim, {
        toValue: 0,
        duration: 250,
        easing: Easing.in(Easing.ease),
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: SCREEN_HEIGHT,
        duration: 250,
        easing: Easing.in(Easing.cubic),
        useNativeDriver: true,
      }),
    ]).start(() => {
      setModalVisible(false);
      isClosing.current = false;
      if (notifyParent) onClose();
    });
  };

  /** Close initiated by user interaction (drag, overlay tap, back). */
  const animateClose = () => runCloseAnimation(true);

  const snapBack = () => {
    Animated.parallel([
      Animated.timing(overlayAnim, {
        toValue: 1,
        duration: 200,
        easing: Easing.out(Easing.ease),
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 200,
        easing: Easing.out(Easing.cubic),
        useNativeDriver: true,
      }),
    ]).start();
  };

  // -------------------------------------------------------------------------
  // Drag to dismiss
  // -------------------------------------------------------------------------
  const panResponder = useMemo(
    () =>
      PanResponder.create({
        onStartShouldSetPanResponder: () => false,
        onMoveShouldSetPanResponder: (_, gestureState) => {
          // Only claim the responder on a meaningful vertical drag so taps
          // still reach nested pressables (close / back / action icons).
          return (
            gestureState.dy > 4 &&
            Math.abs(gestureState.dy) > Math.abs(gestureState.dx)
          );
        },
        onPanResponderMove: (_, gestureState) => {
          const clampedDy = Math.max(0, gestureState.dy);
          slideAnim.setValue(clampedDy);
          const progress = 1 - clampedDy / sheetHeight.current;
          overlayAnim.setValue(Math.max(0, Math.min(1, progress)));
        },
        onPanResponderRelease: (_, gestureState) => {
          if (gestureState.dy > DISMISS_THRESHOLD || gestureState.vy > 0.5) {
            animateClose();
          } else {
            snapBack();
          }
        },
      }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  const sheetBackgroundColor =
    tone === "subtle"
      ? theme.color.surface.subtle
      : theme.color.surface.default;

  // Combine slide + keyboard offset into a single translateY
  const combinedTranslateY = avoidKeyboard
    ? Animated.add(slideAnim, Animated.multiply(keyboardAnim, -1))
    : slideAnim;

  return (
    <Modal
      visible={modalVisible}
      transparent
      animationType="none"
      onRequestClose={animateClose}
      statusBarTranslucent
    >
      {/* Overlay */}
      <Animated.View
        style={{
          ...({
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          } as ViewStyle),
          backgroundColor: theme.color.surface.overlay.default,
          opacity: overlayAnim,
        }}
      >
        <Pressable
          accessibilityRole="button"
          accessibilityLabel="Close bottom sheet"
          onPress={animateClose}
          style={{ flex: 1 }}
        />
      </Animated.View>

      {/* Bottom Sheet */}
      <Animated.View
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          transform: [{ translateY: combinedTranslateY }],
        }}
        onLayout={onSheetLayout}
      >
        <View
          style={[
            {
              backgroundColor: sheetBackgroundColor,
              borderTopLeftRadius: theme.radius.xxl,
              borderTopRightRadius: theme.radius.xxl,
              overflow: "hidden",
            },
            style,
          ]}
        >
          {/* Drag handle area */}
          <View {...panResponder.panHandlers}>
            {/* Handle */}
            {showHandle && (
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  paddingTop: theme.spacing[3],
                  paddingBottom: theme.spacing[2],
                  minHeight: 24,
                }}
              >
                <View
                  style={{
                    width: 40,
                    height: 4,
                    borderRadius: theme.radius.full,
                    backgroundColor: theme.color.border.default,
                  }}
                />
              </View>
            )}

            {/* Top Bar */}
            <TopBar
              variant="modal"
              title={title}
              tone={tone}
              show1stAction={show1stAction}
              show2ndAction={show2ndAction}
              leading={leading}
              trailing={trailing}
              on1stActionPress={on1stActionPress}
              on2ndActionPress={on2ndActionPress}
              onBackPress={animateClose}
            />
          </View>

          {/* Content */}
          <View style={{ flexGrow: 1 }}>{children}</View>
        </View>

        {/* Keyboard gap filler — absolutely positioned below the sheet so
            it doesn't affect layout. Covers the gap behind the keyboard's
            rounded corners when the sheet translates up. */}
        {avoidKeyboard && (
          <View
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              bottom: -400,
              height: 400,
              backgroundColor: sheetBackgroundColor,
            }}
          />
        )}
      </Animated.View>
    </Modal>
  );
};
