import React from "react";
import { screen, render } from "@testing-library/react";

import Pagination from "./index";

test("it should renders prev and next buttons", () => {
  render(<Pagination />);

  expect(screen.getByText(/next/i)).toBeInTheDocument();
  expect(screen.getByText(/prev/i)).toBeInTheDocument();
});
