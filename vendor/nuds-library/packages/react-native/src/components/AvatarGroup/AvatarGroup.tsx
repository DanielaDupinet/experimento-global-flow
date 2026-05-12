import React from "react";
import { View } from "react-native";
import type { StyleProp, ViewStyle } from "react-native";
import { useNuDSTheme } from "../../theme";

// ── Size tokens ──────────────────────────────────────────────────────

export type AvatarGroupSize = "xsmall" | "small" | "medium" | "large";
export type AvatarGroupOrientation = "horizontal" | "diagonal";

/** Pixel size for each avatar in the group */
const AVATAR_SIZE: Record<AvatarGroupSize, number> = {
  xsmall: 24,
  small: 32,
  medium: 40,
  large: 64,
};

/** Negative margin overlap between avatars (horizontal) */
const OVERLAP: Record<AvatarGroupSize, number> = {
  xsmall: -4,
  small: -8,
  medium: -8,
  large: -16,
};

/** Avatar sizes when rendered in diagonal orientation */
const DIAGONAL_AVATAR_SIZE: Record<string, number> = {
  small: 20,
  medium: 24,
};

/** Container size for diagonal orientation */
const DIAGONAL_CONTAINER_SIZE: Record<string, number> = {
  small: 32,
  medium: 40,
};

// ── Types ────────────────────────────────────────────────────────────

export type AvatarGroupProps = {
  /** Avatar elements to render. Accepts Avatar components as children. */
  children: React.ReactNode;
  /** Size preset — controls avatar size and overlap.
   * @default "small"
   */
  size?: AvatarGroupSize;
  /** Layout orientation.
   * Diagonal only supports 2 avatars and small/medium sizes.
   * @default "horizontal"
   */
  orientation?: AvatarGroupOrientation;
  /** Custom style on the outer container */
  style?: StyleProp<ViewStyle>;
};

// ── Component ────────────────────────────────────────────────────────

export const AvatarGroup = ({
  children,
  size = "small",
  orientation = "horizontal",
  style,
}: AvatarGroupProps) => {
  const theme = useNuDSTheme();
  const childArray = React.Children.toArray(children);

  // Border color matches the surface behind the group (white in light mode)
  const borderColor = theme.color.surface.default;

  // ── Diagonal layout (only 2 avatars, small/medium) ──
  if (orientation === "diagonal") {
    const diagonalSize =
      DIAGONAL_CONTAINER_SIZE[size] ?? DIAGONAL_CONTAINER_SIZE.medium;
    const avatarDim =
      DIAGONAL_AVATAR_SIZE[size] ?? DIAGONAL_AVATAR_SIZE.medium;

    // Only render first 2 children for diagonal
    const [first, second] = childArray.slice(0, 2);

    return (
      <View
        style={[
          {
            width: diagonalSize,
            height: diagonalSize,
          },
          style,
        ]}
      >
        {/* Bottom-right avatar */}
        {first ? (
          <View
            style={{
              position: "absolute",
              bottom: 0,
              right: 0,
              width: avatarDim,
              height: avatarDim,
              borderRadius: avatarDim / 2,
              borderWidth: 2,
              borderColor,
              overflow: "hidden",
            }}
          >
            {React.isValidElement(first)
              ? React.cloneElement(first as React.ReactElement<any>, {
                  size: undefined,
                  style: {
                    width: avatarDim - 4,
                    height: avatarDim - 4,
                    borderRadius: (avatarDim - 4) / 2,
                  },
                })
              : first}
          </View>
        ) : null}

        {/* Top-left avatar */}
        {second ? (
          <View
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: avatarDim,
              height: avatarDim,
              borderRadius: avatarDim / 2,
              borderWidth: 2,
              borderColor,
              overflow: "hidden",
            }}
          >
            {React.isValidElement(second)
              ? React.cloneElement(second as React.ReactElement<any>, {
                  size: undefined,
                  style: {
                    width: avatarDim - 4,
                    height: avatarDim - 4,
                    borderRadius: (avatarDim - 4) / 2,
                  },
                })
              : second}
          </View>
        ) : null}
      </View>
    );
  }

  // ── Horizontal layout ──
  const avatarDim = AVATAR_SIZE[size];
  const overlap = OVERLAP[size];
  const count = childArray.length;

  return (
    <View
      style={[
        {
          flexDirection: "row",
          alignItems: "center",
        },
        style,
      ]}
    >
      {childArray.map((child, index) => (
        <View
          key={index}
          style={{
            width: avatarDim,
            height: avatarDim,
            borderRadius: avatarDim / 2,
            borderWidth: 2,
            borderColor,
            overflow: "hidden",
            marginRight: index < count - 1 ? overlap : 0,
            zIndex: count - index,
          }}
        >
          {React.isValidElement(child)
            ? React.cloneElement(child as React.ReactElement<any>, {
                size,
                style: {
                  width: avatarDim - 4,
                  height: avatarDim - 4,
                  borderRadius: (avatarDim - 4) / 2,
                },
              })
            : child}
        </View>
      ))}
    </View>
  );
};
