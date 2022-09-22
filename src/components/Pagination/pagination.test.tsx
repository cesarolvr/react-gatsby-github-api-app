import React from "react";
import { render } from "@testing-library/react";

import Pagination from "./index";

test("it should renders prev and next buttons", () => {
  render(<Pagination />);

  expect(render.getByText(/next/i)).toBeInTheDocument();
  expect(render.getByText(/prev/i)).toBeInTheDocument();
});
