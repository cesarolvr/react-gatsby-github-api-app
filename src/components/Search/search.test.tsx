import React from "react";
import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";

// Components
import Search from "./index";

describe("Testing search validation", () => {
  test("Verifying disabled button", async () => {
    render(<Search />);

    const button: HTMLElement = screen.getByTestId("submit");
    expect(button).toBeDisabled();
  });

  test("Verifying enable button", async () => {
    render(<Search />);

    const button: HTMLElement = screen.getByTestId("submit");
    const input: HTMLElement = screen.getByTestId("search");

    await userEvent.type(input, "cesar");

    expect(button).not.toBeDisabled();
  });

  test("Verifying disabled type and order", async () => {
    render(<Search />);

    const type: HTMLElement = screen.getByTestId("type");
    const order: HTMLElement = screen.getByTestId("order");
    expect(type).toBeDisabled();
    expect(order).toBeDisabled();
  });
});
