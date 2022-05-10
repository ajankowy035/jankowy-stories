import {
  getStorybookUI,
  configure,
  addDecorator,
} from "@storybook/react-native";
import { withKnobs } from "@storybook/addon-knobs";

import "./rn-addons";

addDecorator(withKnobs);

configure(() => {
  require("./stories");
}, module);

export default getStorybookUI({
  asyncStorage: null,
});
