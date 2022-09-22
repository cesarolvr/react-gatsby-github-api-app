import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

// Components
import Search from "./index";

const searchProps = {
  name: "",
  items: [],
  page: 1,
  total_count: 5,
  setSearching: () => null,
  dirty: false,
  loading: false,
  sortDirection: true,
  sortBy: "login",
};

describe("Checking searching mechanism", () => {
  test("Submit button should be blocked", async () => {
    render(<Search {...searchProps} />);

    const button: HTMLElement = screen.getByTestId("submit");
    expect(button).toBeDisabled();
  });

  test("Submit button should be enabled after filling some value in search field", async () => {
    render(<Search {...searchProps} />);

    const button: HTMLElement = screen.getByTestId("submit");
    const input: HTMLElement = screen.getByTestId("search");

    await userEvent.type(input, "cesar");

    expect(button).not.toBeDisabled();
  });

  test("Sort options should be blocked in first load", async () => {
    render(<Search {...searchProps} />);

    const type: HTMLElement = screen.getByTestId("type");
    const order: HTMLElement = screen.getByTestId("order");
    expect(type).toBeDisabled();
    expect(order).toBeDisabled();
  });
});

describe("Checking props rendering in search's field", () => {
  test("Should render provided value in search input", async () => {
    render(<Search {...searchProps} name="cesar" />);

    waitFor(async () => {
      const input: any = await screen.findByTestId("search");
      expect(input.value).toBe("cesar");
    });
  });
});
