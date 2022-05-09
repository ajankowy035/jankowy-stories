//src/components/atoms/Text/Text.tsx
import React, { FC } from "react";
import { Text as NativeText, StyleSheet } from "react-native";

type TextProps = {
  type: "big" | "medium" | "small";
};

export const Text: FC<TextProps> = ({ type, children }) => {
  return (
    <NativeText
      style={[
        (type === "big" && styles.big) ||
          (type === "medium" && styles.medium) ||
          (type === "small" && styles.small),
      ]}
    >
      {children}
    </NativeText>
  );
};

const styles = StyleSheet.create({
  big: {
    fontSize: 22,
    fontWeight: "900",
  },
  medium: {
    fontSize: 18,
    fontWeight: "600",
  },
  small: {
    fontSize: 14,
    fontWeight: "400",
  },
});
