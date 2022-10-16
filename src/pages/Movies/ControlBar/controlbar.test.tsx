import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ControlBar from "./ControlBar";
import { Provider } from "react-redux";
import { store } from "../../../app/store";

describe("Control Bar", () => {
  it("renders without crashing and verify Search and Sort components are present", () => {
    const {container} = render(
      <Provider store={store}>
        <ControlBar/>
      </Provider>
    );
    const search = container.getElementsByClassName("search-wrap");
    expect(search).toBeInTheDocument();
    const sort = container.getElementsByClassName("sort");
    expect(sort).toBeInTheDocument();
  });
});
