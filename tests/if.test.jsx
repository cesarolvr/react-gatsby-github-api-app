import renderer from "react-test-renderer";

// Component
import If from "../src/components/If/index";

it("render true component", () => {
  const component = renderer.create(
    <If
      condition={true}
      renderIf={<>True condition</>}
      renderElse={<>Falsy condition</>}
    />,
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it("render falsy component", () => {
  const component = renderer.create(
    <If
      condition={false}
      renderIf={<>True condition</>}
      renderElse={<>Falsy condition</>}
    />,
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
