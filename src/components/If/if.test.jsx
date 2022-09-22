import { render } from "@testing-library/react";

// Component
import If from "./index";

describe("Testing if <If /> shows the right child", () => {
  test("it should renders true", () => {
    render(
      <If
        condition={true}
        renderIf={<>True condition</>}
        renderElse={<>Falsy condition</>}
      />,
    );

    expect(render.getByText(/True condition/i)).toBeInTheDocument();
  });

  test("it should renders false", () => {
    render(
      <If
        condition={false}
        renderIf={<>True condition</>}
        renderElse={<>Falsy condition</>}
      />,
    );

    expect(render.getByText(/Falsy condition/i)).toBeInTheDocument();
  });
});
