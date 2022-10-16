import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Error from "./Error";

describe("Error", () => {
  it("renders without crashing,shows error message as excpected", () => {
    render(<Error error={"Test Error"} />);
    const message = screen.getByText("❌Test Error");
    expect(message).toBeInTheDocument();
  });
});
