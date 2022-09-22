import React from "react";
import { render, screen } from "@testing-library/react";

import Home from "./index";

test("it should renders home correctly", () => {
  render(<Home />);

  expect(screen.getByPlaceholderText(/search/i)).toBeVisible();
  expect(screen.getByTestId('submit')).toBeDisabled();
});
