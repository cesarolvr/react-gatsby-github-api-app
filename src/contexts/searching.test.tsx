import React from "react";
import { render } from "@testing-library/react";

// Contexts
import Context from "./searching";

// Components
import Search from "src/components/Search";

/**
 * Test default values by rendering a context consumer without a
 * matching provider
 */
test("Testing rendering of search field", async () => {
  const Provider: any = Context.Provider;
  //   afterEach(cleanup);
  render(
    <Provider
      value={{
        name: "textinho",
      }}
    >
      <Search />
    </Provider>,
  );
  expect(render.getByText(/textinho/i)).toBeVisible();
});
