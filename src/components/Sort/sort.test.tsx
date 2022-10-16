import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Sort from "./Sort";
import { Provider } from "react-redux";
import { store } from "../../app/store";
import { SortOption } from "../../constants/sortOptions";

const testSort :SortOption[]= [
  {
    id: 1,
    title: "Test1",
    name: "test1",
  },
  {
    id: 2,
    title: "Test2",
    name: "test2",
  },
];

describe("Sort", () => {
  it("renders without crashing and displays drop down", () => {
    const {container}=render(
      <Provider store={store}>
        <Sort sortOptions={testSort} />
      </Provider>
    );
    const sort = container.getElementsByClassName("sort");
    fireEvent.mouseOver(sort[0]);
    expect(container.getElementsByClassName("sort-value")).toBeInTheDocument();
  });
  it("sort content displays sortoptions title", () => {
    const {container}=render(
      <Provider store={store}>
        <Sort sortOptions={testSort} />
      </Provider>
    );
    const sort = container.getElementsByClassName("sort");
    fireEvent.mouseOver(sort[0]);
    const sortValue = container.getElementsByClassName("sort-value");
    expect(sortValue[0].innerHTML).toBe("Test1");
    expect(sortValue[1].innerHTML).toBe("Test2");
  });
});
