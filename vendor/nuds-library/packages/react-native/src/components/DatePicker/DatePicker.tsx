import React, { useEffect, useRef } from "react";
import { Animated, Pressable, View } from "react-native";
import type { StyleProp, ViewStyle } from "react-native";
import { NText } from "../../primitives/Text";
import { ChevronIcon } from "../../icons/ChevronIcon";
import { useNuDSTheme } from "../../theme";
import styles from "./styles";

// ── Helpers ────────────────────────────────────────────────────────────────

const WEEKDAY_LABELS = ["S", "M", "T", "W", "T", "F", "S"];
const DAY_SIZE = 44;

function isSameDay(a: Date, b: Date): boolean {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

function getDaysInMonth(year: number, month: number): number {
  return new Date(year, month + 1, 0).getDate();
}

function getStartDayOfWeek(year: number, month: number): number {
  return new Date(year, month, 1).getDay(); // 0 = Sunday
}

function formatMonthYear(date: Date): string {
  return date.toLocaleDateString("en-US", { month: "long", year: "numeric" });
}

// ── Types ──────────────────────────────────────────────────────────────────

type DayState = "unavailable" | "available" | "highlighted" | "selected";

export type DatePickerProps = {
  /** Month to display (only year and month are used) */
  month: Date;
  /** Currently selected date */
  selectedDate?: Date;
  /** Dates that should appear highlighted (bold + subtle bg) */
  highlightedDates?: Date[];
  /** Called when a day is tapped */
  onSelectDate?: (date: Date) => void;
  /** Called when the left (previous) arrow is pressed */
  onPreviousMonth?: () => void;
  /** Called when the right (next) arrow is pressed */
  onNextMonth?: () => void;
  /** Show month/year header with navigation (default true) */
  showHeader?: boolean;
  /** Show weekday labels row (default true) */
  showWeekdays?: boolean;
  /** Custom style */
  style?: StyleProp<ViewStyle>;
};

// ── Day Cell ───────────────────────────────────────────────────────────────

type DayCellProps = {
  day: number;
  state: DayState;
  onPress: () => void;
  accentColor: string;
  primaryColor: string;
  disabledColor: string;
};

const DayCell = ({
  day,
  state,
  onPress,
  accentColor,
  primaryColor,
  disabledColor,
}: DayCellProps) => {
  const theme = useNuDSTheme();
  const isSelected = state === "selected";
  const isHighlighted = state === "highlighted";
  const isAvailable = state === "available";
  const isUnavailable = state === "unavailable";

  const textColor = isSelected
    ? accentColor
    : isUnavailable
      ? disabledColor
      : primaryColor;

  const fontVariant =
    isSelected || isHighlighted || isAvailable
      ? "subtitleMediumStrong"
      : "subtitleMediumDefault";

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityState={{ selected: isSelected }}
      disabled={isUnavailable}
      onPress={onPress}
      style={[
        styles.dayCell,
        {
          width: DAY_SIZE,
          height: DAY_SIZE,
          borderRadius: DAY_SIZE,
        },
        isSelected && {
          backgroundColor: theme.color.surface.accent.selectedSubtle,
          borderWidth: 2,
          borderColor: accentColor,
        },
        isHighlighted && {
          backgroundColor: theme.color.surface.subtle,
        },
      ]}
    >
      <NText variant={fontVariant} color={textColor}>
        {day}
      </NText>
    </Pressable>
  );
};

// ── Main Component ─────────────────────────────────────────────────────────

export const DatePicker = ({
  month,
  selectedDate,
  highlightedDates = [],
  onSelectDate,
  onPreviousMonth,
  onNextMonth,
  showHeader = true,
  showWeekdays = true,
  style,
}: DatePickerProps) => {
  const theme = useNuDSTheme();

  // Animation refs
  const fadeAnim = useRef(new Animated.Value(1)).current;
  const slideAnim = useRef(new Animated.Value(0)).current;
  const prevMonthRef = useRef(month);
  const directionRef = useRef<"left" | "right">("right");

  useEffect(() => {
    const prevKey =
      prevMonthRef.current.getFullYear() * 12 + prevMonthRef.current.getMonth();
    const nextKey = month.getFullYear() * 12 + month.getMonth();

    if (prevKey !== nextKey) {
      directionRef.current = nextKey > prevKey ? "right" : "left";
      const slideOut = directionRef.current === "right" ? -40 : 40;
      const slideIn = directionRef.current === "right" ? 40 : -40;

      // Slide out + fade out
      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 120,
          useNativeDriver: true,
        }),
        Animated.timing(slideAnim, {
          toValue: slideOut,
          duration: 120,
          useNativeDriver: true,
        }),
      ]).start(() => {
        // Jump to start position for slide in
        slideAnim.setValue(slideIn);
        prevMonthRef.current = month;

        // Slide in + fade in
        Animated.parallel([
          Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 180,
            useNativeDriver: true,
          }),
          Animated.timing(slideAnim, {
            toValue: 0,
            duration: 180,
            useNativeDriver: true,
          }),
        ]).start();
      });
    }
  }, [month, fadeAnim, slideAnim]);

  const year = month.getFullYear();
  const monthIndex = month.getMonth();
  const daysInMonth = getDaysInMonth(year, monthIndex);
  const startDay = getStartDayOfWeek(year, monthIndex);

  // Previous month trailing days
  const prevMonthDays = getDaysInMonth(year, monthIndex - 1);

  // Build weeks grid
  const weeks: { day: number; state: DayState; date: Date }[][] = [];
  let currentWeek: { day: number; state: DayState; date: Date }[] = [];

  // Fill leading days from previous month
  for (let i = 0; i < startDay; i++) {
    const d = prevMonthDays - startDay + 1 + i;
    currentWeek.push({
      day: d,
      state: "unavailable",
      date: new Date(year, monthIndex - 1, d),
    });
  }

  // Fill current month days
  for (let d = 1; d <= daysInMonth; d++) {
    const date = new Date(year, monthIndex, d);

    let state: DayState = "available";
    if (selectedDate && isSameDay(date, selectedDate)) {
      state = "selected";
    } else if (highlightedDates.some((hd) => isSameDay(date, hd))) {
      state = "highlighted";
    }

    currentWeek.push({ day: d, state, date });

    if (currentWeek.length === 7) {
      weeks.push(currentWeek);
      currentWeek = [];
    }
  }

  // Fill trailing days from next month
  if (currentWeek.length > 0) {
    let nextDay = 1;
    while (currentWeek.length < 7) {
      currentWeek.push({
        day: nextDay,
        state: "unavailable",
        date: new Date(year, monthIndex + 1, nextDay),
      });
      nextDay++;
    }
    weeks.push(currentWeek);
  }

  return (
    <View
      style={[
        styles.root,
        { padding: theme.spacing[5] }, // 20
        style,
      ]}
    >
      <View style={styles.wrapper}>
        {/* Top section: header + weekdays */}
        {(showHeader || showWeekdays) && (
          <View style={[styles.top, { gap: theme.spacing[6] }]}>
            {/* Header: month/year + arrows */}
            {showHeader && (
              <View style={styles.header}>
                <Animated.View style={{ opacity: fadeAnim, transform: [{ translateX: slideAnim }] }}>
                  <NText variant="subtitleSmallStrong" color={theme.color.content.default}>
                    {formatMonthYear(month)}
                  </NText>
                </Animated.View>

                <View style={styles.navigation}>
                  <Pressable
                    accessibilityLabel="Previous month"
                    onPress={onPreviousMonth}
                    style={styles.navButton}
                  >
                    <View style={{ transform: [{ rotate: "90deg" }] }}>
                      <ChevronIcon size={20} color={theme.color.content.default} />
                    </View>
                  </Pressable>

                  <Pressable
                    accessibilityLabel="Next month"
                    onPress={onNextMonth}
                    style={styles.navButton}
                  >
                    <View style={{ transform: [{ rotate: "-90deg" }] }}>
                      <ChevronIcon size={20} color={theme.color.content.default} />
                    </View>
                  </Pressable>
                </View>
              </View>
            )}

            {/* Weekday labels */}
            {showWeekdays && (
              <View style={[styles.weekdayRow, { gap: 4 }]}>
                {WEEKDAY_LABELS.map((label, i) => (
                  <View key={i} style={[styles.weekdayCell, { width: DAY_SIZE }]}>
                    <NText
                      variant="labelXSmallStrong"
                      color={theme.color.content.subtle}
                    >
                      {label}
                    </NText>
                  </View>
                ))}
              </View>
            )}
          </View>
        )}

        {/* Calendar grid — animated */}
        <Animated.View
          style={[
            styles.monthGrid,
            { gap: 4 },
            {
              opacity: fadeAnim,
              transform: [{ translateX: slideAnim }],
            },
          ]}
        >
          {weeks.map((week, weekIndex) => (
            <View key={weekIndex} style={[styles.weekRow, { gap: 4 }]}>
              {week.map((cell, dayIndex) => (
                <DayCell
                  key={`${weekIndex}-${dayIndex}`}
                  day={cell.day}
                  state={cell.state}
                  onPress={() => onSelectDate?.(cell.date)}
                  accentColor={theme.color.content.accent.primary}
                  primaryColor={theme.color.content.default}
                  disabledColor={theme.color.content.disabled}
                />
              ))}
            </View>
          ))}
        </Animated.View>
      </View>
    </View>
  );
};
