import { screen, render } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom";

import Pagination from "../src/components/Pagination/index";

test("it should renders prev and next buttons", () => {
  render(<Pagination />);

  expect(screen.getByText(/next/i)).toBeInTheDocument();
  expect(screen.getByText(/prev/i)).toBeInTheDocument();
});
