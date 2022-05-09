import { render } from "@testing-library/react-native";
import { Text } from "./Text";

describe("Text", () => {
  it("should render Text component properly", () => {
    const { getByText } = render(<Text type="big">Hello test</Text>);

    expect(getByText("Hello test")).toBeTruthy();
  });
});
