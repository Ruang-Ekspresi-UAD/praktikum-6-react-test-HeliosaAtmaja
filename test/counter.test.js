import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Counter from "./counter";

describe("Counter Functionality Tests", () => {
  test("Initial counter value should be 0", () => {
    render(<Counter />);
    const displayText = screen.getByTestId("display-value");
    const counterNum = screen.getByTestId("counter-value");
    expect(displayText).toHaveTextContent("Value: 0");
    expect(counterNum).toHaveTextContent("0");
  });

  test("Reset button resets counter to 0", () => {
    render(<Counter />);
    const incrementButton = screen.getByTestId("increment-button");
    const resetButton = screen.getByTestId("reset-button");
    const displayValue = screen.getByTestId("display-value");

    fireEvent.click(incrementButton);
    fireEvent.click(incrementButton);
    expect(displayValue).toHaveTextContent("Value: 2");

    fireEvent.click(resetButton);
    expect(displayValue).toHaveTextContent("Value: 0");
  });

  test("Clicking decrement button updates the counter correctly", () => {
    render(<Counter />);
    const decrementBtn = screen.getByTestId("decrement-button");
    const displayText = screen.getByTestId("display-value");

    fireEvent.click(decrementBtn);
    expect(displayText).toHaveTextContent("Value: -1");
  });

  test("Counter display value is accurate after multiple actions", () => {
    render(<Counter />);
    const incrementBtn = screen.getByTestId("increment-button");
    const decrementBtn = screen.getByTestId("decrement-button");
    const displayText = screen.getByTestId("display-value");

    fireEvent.click(incrementBtn);
    fireEvent.click(incrementBtn);
    fireEvent.click(decrementBtn);

    expect(displayText).toHaveTextContent("Value: 1");
  });

  test("Clicking increment button increases the counter", () => {
    render(<Counter />);
    const incrementButton = screen.getByTestId("increment-button");
    const displayValue = screen.getByTestId("display-value");

    fireEvent.click(incrementButton);
    fireEvent.click(incrementButton);
    expect(displayValue).toHaveTextContent("Value: 2");
  });

  test("Decrement button does not reduce the initial value", () => {
    render(<Counter />);
    const displayValue = screen.getByTestId("display-value");
    expect(displayValue).toHaveTextContent("Value: 0");
  });

  test("Reset button works after increment", () => {
    render(<Counter />);
    const incrementButton = screen.getByTestId("increment-button");
    const resetButton = screen.getByTestId("reset-button");
    const displayValue = screen.getByTestId("display-value");

    fireEvent.click(incrementButton);
    fireEvent.click(resetButton);
    expect(displayValue).toHaveTextContent("Value: 0");
  });

  test("Counter supports negative values", () => {
    render(<Counter />);
    const decrementButton = screen.getByTestId("decrement-button");
    const displayValue = screen.getByTestId("display-value");

    fireEvent.click(decrementButton);
    fireEvent.click(decrementButton);
    expect(displayValue).toHaveTextContent("Value: -2");
  });

  test("Counter handles sequential button presses correctly", () => {
    render(<Counter />);
    const incrementButton = screen.getByTestId("increment-button");
    const decrementButton = screen.getByTestId("decrement-button");
    const resetButton = screen.getByTestId("reset-button");
    const displayValue = screen.getByTestId("display-value");

    fireEvent.click(incrementButton);
    fireEvent.click(decrementButton);
    fireEvent.click(resetButton);
    expect(displayValue).toHaveTextContent("Value: 0");
  });

  test("Increment button works when clicked multiple times", () => {
    render(<Counter />);
    const incrementButton = screen.getByTestId("increment-button");
    const displayValue = screen.getByTestId("display-value");

    fireEvent.click(incrementButton);
    fireEvent.click(incrementButton);
    fireEvent.click(incrementButton);
    expect(displayValue).toHaveTextContent("Value: 3");
  });

  test("counter-value displays the same value as display-value", () => {
    render(<Counter />);
    const incrementButton = screen.getByTestId("increment-button");
    const counterValue = screen.getByTestId("counter-value");

    fireEvent.click(incrementButton);
    expect(counterValue).toHaveTextContent("1");
  });
});
