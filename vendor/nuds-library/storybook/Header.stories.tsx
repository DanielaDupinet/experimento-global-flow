import React from "react";
import { View } from "react-native";
import { Header, NText } from "@nu-design-org/nuds-vibecode-react-native";

const onPress = (name: string) => () => {
  console.log(`[storybook] ${name}`);
};

export default {
  title: "Components/Header",
  component: Header,
};

export const StandardLeft = {
  name: "Standard — Left",
  render: () => (
    <Header
      type="standard"
      title="Header title"
      subtitle="Subtitle"
      onBackPress={onPress("back")}
      onActionPress={onPress("action")}
    />
  ),
};

export const StandardCentered = {
  name: "Standard — Centered",
  render: () => (
    <Header
      type="standard"
      centered
      title="Header title"
      subtitle="Subtitle"
      onBackPress={onPress("back")}
      onActionPress={onPress("action")}
    />
  ),
};

export const StandardWithLogo = {
  name: "Standard — With Logo",
  render: () => (
    <Header
      type="standard"
      showLogo
      title="Header title"
      subtitle="Subtitle"
      onBackPress={onPress("back")}
      onActionPress={onPress("action")}
    />
  ),
};

export const StandardCenteredWithLogo = {
  name: "Standard — Centered with Logo",
  render: () => (
    <Header
      type="standard"
      centered
      showLogo
      title="Header title"
      subtitle="Subtitle"
      onBackPress={onPress("back")}
      onActionPress={onPress("action")}
    />
  ),
};

export const ArtworkLeft = {
  name: "Artwork — Left",
  render: () => (
    <Header
      type="artwork"
      title="Header title"
      subtitle="Subtitle"
      onBackPress={onPress("back")}
      onActionPress={onPress("action")}
    />
  ),
};

export const ArtworkCentered = {
  name: "Artwork — Centered",
  render: () => (
    <Header
      type="artwork"
      centered
      title="Header title"
      subtitle="Subtitle"
      onBackPress={onPress("back")}
      onActionPress={onPress("action")}
    />
  ),
};

export const FullBleedLeft = {
  name: "Full-Bleed — Left",
  render: () => (
    <Header
      type="full-bleed"
      title="Header title"
      subtitle="Subtitle"
      imageSource={{ uri: "https://picsum.photos/375/229" }}
      onBackPress={onPress("back")}
      onActionPress={onPress("action")}
    />
  ),
};

export const FullBleedCentered = {
  name: "Full-Bleed — Centered",
  render: () => (
    <Header
      type="full-bleed"
      centered
      title="Header title"
      subtitle="Subtitle"
      imageSource={{ uri: "https://picsum.photos/375/229" }}
      onBackPress={onPress("back")}
      onActionPress={onPress("action")}
    />
  ),
};

export const AllVariants = {
  name: "All Variants",
  render: () => (
    <View style={{ gap: 32 }}>
      <NText
        variant="labelSmallStrong"
        tone="secondary"
        style={{ paddingHorizontal: 16 }}
      >
        Standard (left-aligned)
      </NText>
      <Header
        type="standard"
        title="Header title"
        subtitle="Subtitle"
        onBackPress={onPress("back")}
        onActionPress={onPress("action")}
      />

      <NText
        variant="labelSmallStrong"
        tone="secondary"
        style={{ paddingHorizontal: 16 }}
      >
        Artwork (centered)
      </NText>
      <Header
        type="artwork"
        centered
        title="Header title"
        subtitle="Subtitle"
        onBackPress={onPress("back")}
        onActionPress={onPress("action")}
      />

      <NText
        variant="labelSmallStrong"
        tone="secondary"
        style={{ paddingHorizontal: 16 }}
      >
        Full-Bleed (left-aligned)
      </NText>
      <Header
        type="full-bleed"
        title="Header title"
        subtitle="Subtitle"
        imageSource={{ uri: "https://picsum.photos/375/229" }}
        onBackPress={onPress("back")}
        onActionPress={onPress("action")}
      />
    </View>
  ),
};
