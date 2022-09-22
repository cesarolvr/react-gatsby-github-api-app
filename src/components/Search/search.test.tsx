import React from "react";
import { screen, render, fireEvent, cleanup } from "@testing-library/react";
import { act } from "react-dom/test-utils";

// Components
import Search from "./index";

describe("Testing form validation", () => {
  test("Verifying disabled button", () => {
    render(<Search />);
    const button: any = screen.getByTestId("submit");
    expect(button).toBeDisabled();
  });

  afterEach(cleanup);

  test("Verifying enable button", async () => {
    render(<Search />);
    const button: any = screen.getByTestId("submit");
    const input = screen.getByTestId("search");
    
    await act(() => {
      fireEvent.change(input, { target: { value: "cesar" } });
    });
    
    expect(button).not.toBeDisabled();
  });
});
