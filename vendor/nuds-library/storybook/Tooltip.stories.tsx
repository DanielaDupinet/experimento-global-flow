import React, { useEffect, useState } from "react";
import { View } from "react-native";
import type { LayoutRectangle } from "react-native";
import {
  Avatar,
  Button,
  NText,
  TextField,
  Tooltip,
  type TooltipArrowPosition,
  useNuDSTheme
} from "@nu-design-org/nuds-vibecode-react-native";

export default {
  title: "Components/Tooltip",
  component: Tooltip,
  args: {
    label: "This is a label",
    arrowPosition: "topCenter"
  }
};

const TooltipPreviewCard = ({
  arrowPosition,
  label
}: {
  arrowPosition: TooltipArrowPosition;
  label: string;
}) => {
  const theme = useNuDSTheme();
  return (
    <View style={{ width: 148, alignItems: "center", gap: theme.spacing[2] }}>
      <Tooltip arrowPosition={arrowPosition} label={label} />
      <NText variant="labelSmallDefault" tone="secondary">
        {arrowPosition}
      </NText>
    </View>
  );
};

export const ArrowPositions = {
  render: () => {
    const theme = useNuDSTheme();
    return (
      <View style={{ gap: theme.spacing[5] }}>
        <View style={{ flexDirection: "row", gap: theme.spacing[2] }}>
          <TooltipPreviewCard arrowPosition="topCenter" label="This is a label" />
          <TooltipPreviewCard arrowPosition="bottomCenter" label="This is a label" />
        </View>
        <View style={{ flexDirection: "row", gap: theme.spacing[2] }}>
          <TooltipPreviewCard arrowPosition="topLeft" label="This is a label" />
          <TooltipPreviewCard arrowPosition="bottomLeft" label="This is a label" />
        </View>
        <View style={{ flexDirection: "row", gap: theme.spacing[2] }}>
          <TooltipPreviewCard arrowPosition="topRight" label="This is a label" />
          <TooltipPreviewCard arrowPosition="bottomRight" label="This is a label" />
        </View>
      </View>
    );
  }
};

export const OverExistingComponents = {
  render: () => {
    const theme = useNuDSTheme();
    const [buttonFrame, setButtonFrame] = useState<LayoutRectangle | null>(null);
    const [fieldFrame, setFieldFrame] = useState<LayoutRectangle | null>(null);
    const [avatarFrame, setAvatarFrame] = useState<LayoutRectangle | null>(null);

    return (
      <View style={{ gap: theme.spacing[6] }}>
        <View style={{ alignItems: "center", justifyContent: "center", position: "relative", paddingTop: 72 }}>
          {buttonFrame ? (
            <Tooltip
              floating
              label="This action continues your flow"
              arrowPosition="bottomCenter"
              anchorFrame={buttonFrame}
            />
          ) : null}
          <View onLayout={(event) => setButtonFrame(event.nativeEvent.layout)}>
            <Button label="Continue" variant="primary" />
          </View>
        </View>

        <View style={{ justifyContent: "center", position: "relative", paddingTop: 76 }}>
          {fieldFrame ? (
            <Tooltip
              floating
              label="Use your full legal name"
              arrowPosition="bottomLeft"
              anchorFrame={fieldFrame}
            />
          ) : null}
          <View onLayout={(event) => setFieldFrame(event.nativeEvent.layout)}>
            <TextField label="Name" placeholder="Type your name" />
          </View>
        </View>

        <View style={{ alignItems: "center", justifyContent: "center", position: "relative", paddingTop: 88 }}>
          {avatarFrame ? (
            <Tooltip
              floating
              label="You can update your photo later"
              arrowPosition="bottomRight"
              anchorFrame={avatarFrame}
            />
          ) : null}
          <View onLayout={(event) => setAvatarFrame(event.nativeEvent.layout)}>
            <Avatar initials="PG" size="large" />
          </View>
        </View>
      </View>
    );
  }
};

export const MotionAndVisibility = {
  render: () => {
    const [visible, setVisible] = useState(false);
    const [buttonFrame, setButtonFrame] = useState<LayoutRectangle | null>(null);
    const theme = useNuDSTheme();

    useEffect(() => {
      const timer = setInterval(() => {
        setVisible((prev) => !prev);
      }, 1300);
      return () => {
        clearInterval(timer);
      };
    }, []);

    return (
      <View style={{ alignItems: "center", gap: theme.spacing[4] }}>
        <View style={{ alignItems: "center", justifyContent: "center", position: "relative", minHeight: 150, paddingTop: 72 }}>
          {buttonFrame ? (
            <Tooltip
              floating
              label="Motion uses NuDS timing tokens"
              arrowPosition="bottomCenter"
              visible={visible}
              anchorFrame={buttonFrame}
            />
          ) : null}
          <View onLayout={(event) => setButtonFrame(event.nativeEvent.layout)}>
            <Button
              label="Continue"
              variant="primary"
            />
          </View>
        </View>

        <Button
          label={visible ? "Pause visible" : "Pause hidden"}
          variant="secondary"
          onPress={() => setVisible((prev) => !prev)}
        />
        <NText variant="labelSmallDefault" tone="secondary">
          Tooltip auto-toggles to showcase entering/exiting motion.
        </NText>
      </View>
    );
  }
};

export const TimedDismissOnScreen = {
  render: () => {
    const theme = useNuDSTheme();
    const [screenFrame, setScreenFrame] = useState<LayoutRectangle | null>(null);
    const [inputFrame, setInputFrame] = useState<LayoutRectangle | null>(null);
    const [buttonFrame, setButtonFrame] = useState<LayoutRectangle | null>(null);
    const [step, setStep] = useState<"input" | "inputHidden" | "button" | "done">("input");

    useEffect(() => {
      setStep("input");

      const dismissInputTimer = setTimeout(() => {
        setStep("inputHidden");
      }, 2600);

      const showButtonTimer = setTimeout(() => {
        setStep("button");
      }, 3200);

      const dismissButtonTimer = setTimeout(() => {
        setStep("done");
      }, 6000);

      return () => {
        clearTimeout(dismissInputTimer);
        clearTimeout(showButtonTimer);
        clearTimeout(dismissButtonTimer);
      };
    }, []);

    const showInputTooltip = step === "input";
    const showButtonTooltip = step === "button";

    return (
      <View
        style={{ padding: theme.spacing[4], gap: theme.spacing[4] }}
        onLayout={(event) => setScreenFrame(event.nativeEvent.layout)}
      >
        <NText variant="titleSmall" tone="primary">
          Profile setup
        </NText>

        <View style={{ position: "relative", paddingTop: 70 }}>
          {inputFrame ? (
            <Tooltip
              floating
              visible={showInputTooltip}
              label="Tip: you can change this later."
              arrowPosition="bottomLeft"
              anchorFrame={inputFrame}
              boundaryWidth={screenFrame?.width}
            />
          ) : null}
          <View onLayout={(event) => setInputFrame(event.nativeEvent.layout)}>
            <TextField
              label="Display name"
              placeholder="How people will see you"
            />
          </View>
        </View>

        <View style={{ position: "relative", alignItems: "flex-start", paddingTop: 66 }}>
          {buttonFrame ? (
            <Tooltip
              floating
              visible={showButtonTooltip}
              label="Tap here to save your updates."
              arrowPosition="bottomCenter"
              anchorFrame={buttonFrame}
              boundaryWidth={screenFrame?.width}
            />
          ) : null}
          <View onLayout={(event) => setButtonFrame(event.nativeEvent.layout)}>
            <Button label="Save changes" variant="primary" />
          </View>
        </View>

        <NText variant="labelSmallDefault" tone="secondary">
          Tooltip appears on the input, dismisses, appears on the button, then dismisses.
        </NText>
      </View>
    );
  }
};
