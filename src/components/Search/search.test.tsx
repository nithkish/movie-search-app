import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Search from "./Search";
import userEvent  from "@testing-library/user-event";

describe("Search", () => {
  it("renders without crashing,shows the placeholder & icon correctly", () => {
    render(<Search searchValue={""} setSearchValue={jest.fn()} />);
    const placeholder = screen.getByPlaceholderText("Type to Search...");
    expect(placeholder).toBeInTheDocument();
    const icon = screen.getByTestId("searchIcon");
    expect(icon).toBeInTheDocument();
  });
  it("searchvalue prop change reflects in the component", () => {
    render(<Search searchValue={""} setSearchValue={jest.fn()} />)
    const input = screen.getByTestId("searchTerm");
    input.setAttribute("value","abc");
    fireEvent(input,new Event("change"));
    expect(screen.getByText("abc")).toBeIntheDocument();
  });
});
