import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { render, screen, fireEvent } from "@testing-library/react";

describe("App", () => {
  const clickButtonAndVerifyResult = (
    container,
    buttonIndex,
    expectedResult
  ) => {
    let buttons = container.querySelectorAll(".like button");
    fireEvent.click(buttons[buttonIndex]);

    buttons = container.querySelectorAll(".like button");
    expect(buttons[buttonIndex].innerHTML).toEqual(expectedResult);
  };
  test("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  describe("Wave 03: clicking like button and rendering App", () => {
    test("that the correct number of likes is printed at the top", () => {
      // Arrange
      const { container } = render(<App />);

      // Act
      clickButtonAndVerifyResult(container, 0, "❤️");
      clickButtonAndVerifyResult(container, 1, "❤️");

      // Assert
      const countScreen = screen.queryByText("2❤️s");
      expect(countScreen).not.toBeNull();
      expect(countScreen).toBeInTheDocument();
    });

    test("clicking empty button changes to filled the back to empty", () => {
      const { container } = render(<App />);

      // Act-assert
      clickButtonAndVerifyResult(container, 0, "❤️");
      clickButtonAndVerifyResult(container, 0, "🤍");
    });
  });
});
