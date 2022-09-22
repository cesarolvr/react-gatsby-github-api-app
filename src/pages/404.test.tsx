import React from "react";
import { render, screen } from "@testing-library/react";

import NotFound from "./404";

test("it should renders 404 correctly", () => {
  render(<NotFound />);

  expect(screen.getByText(/404/i)).toBeVisible();
  expect(screen.getByText(/back to search/i)).toBeVisible();
});
