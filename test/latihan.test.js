import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Counter, Greeting, AlertButton } from "./Latihan";
import "@testing-library/jest-dom";

describe("Component Tests", () => {
  describe("Counter Component", () => {
    test("Initial counter value is 0", () => {
      render(<Counter />);
      const value = screen.getByTestId("counter-value");
      expect(value).toHaveTextContent("0");
    });

    test("Increments value on button click", () => {
      render(<Counter />);
      const incrementBtn = screen.getByTestId("increment-button");
      const value = screen.getByTestId("counter-value");

      fireEvent.click(incrementBtn);
      expect(value).toHaveTextContent("1");
    });

    test("Decrements value on button click", () => {
      render(<Counter />);
      const decrementBtn = screen.getByTestId("decrement-button");
      const value = screen.getByTestId("counter-value");

      fireEvent.click(decrementBtn);
      expect(value).toHaveTextContent("-1");
    });

    test("Resets value to 0 when reset button clicked", () => {
      render(<Counter />);
      const incrementBtn = screen.getByTestId("increment-button");
      const resetBtn = screen.getByTestId("reset-button");
      const value = screen.getByTestId("counter-value");

      fireEvent.click(incrementBtn);
      fireEvent.click(incrementBtn);
      expect(value).toHaveTextContent("2");

      fireEvent.click(resetBtn);
      expect(value).toHaveTextContent("0");
    });
  });

  describe("Greeting Component", () => {
    test("Displays greeting with student's name", () => {
      render(<Greeting name="Heliosa Atmaja" />);
      const greetingText = screen.getByTestId("greeting");
      expect(greetingText).toHaveTextContent("Hello, Heliosa Atmaja");
    });

    test("Displays greeting with lecturer's name", () => {
      render(<Greeting name="Bosku" />);
      const greetingText = screen.getByTestId("greeting");
      expect(greetingText).toHaveTextContent("Hello, Bosku");
    });
  });

  describe("AlertButton Component", () => {
    test("Shows alert with the correct message on click", () => {
      const alertMock = jest.spyOn(window, "alert").mockImplementation(() => {});

      render(<AlertButton message="Selamat Datang!" />);
      const button = screen.getByTestId("alert-button");

      fireEvent.click(button);
      expect(alertMock).toHaveBeenCalledWith("Selamat Datang!");

      alertMock.mockRestore();
    });
  });
});
