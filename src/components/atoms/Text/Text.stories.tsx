import React from "react";
import { View } from "react-native";
import { storiesOf } from "@storybook/react-native";
import { radios, text } from "@storybook/addon-knobs";
import { Text } from "./Text";

const stories = storiesOf("Atoms", module);

stories.addDecorator((getStory) => (
  <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    {getStory()}
  </View>
));

stories.add("Text", () => (
  <Text
    type={radios(
      "Text type",
      { big: "big", medium: "medium", small: "small" },
      "medium"
    )}
  >
    {text("Text", "Simple text")}
  </Text>
));

export default stories;
