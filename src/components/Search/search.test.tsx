import React from "react";
import { screen, render, fireEvent, cleanup } from "@testing-library/react";
import { act } from "react-dom/test-utils";

// Components
import Search from "./index";

describe("Testing form validation", () => {
  afterEach(cleanup);
  
  test("Verifying disabled button", () => {
    render(<Search />);
    const button: any = screen.getByTestId("submit");
    expect(button).toBeDisabled();
  });

  test("Verifying enable button", async () => {
    render(<Search />);
    const button: any = screen.getByTestId("submit");
    const input = screen.getByTestId("search");
    
    await act(() => {
      fireEvent.change(input, { target: { value: "cesar" } });
    });
    
    expect(button).not.toBeDisabled();
  });

  test("Verifying disabled type", () => {
    render(<Search />);
    const button: any = screen.getByTestId("type");
    expect(button).toBeDisabled();
  });
});
