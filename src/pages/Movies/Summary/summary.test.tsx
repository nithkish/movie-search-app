import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Summary from "./Summary";
import { Provider } from "react-redux";
import { store } from "../../../app/store";

describe("Summary", () => {
  it("renders without crashing and validate the header", () => {
    const {container} = render(
      <Provider store={store}>
        <Summary/>
      </Provider>
    );
    const search = container.getElementsByClassName("summary-container");
    expect(search[0]).toBeInTheDocument();
    expect(screen.getByText("SUMMARY")).toBeInTheDocument();
    expect(screen.getByText("No Movie Selected")).toBeInTheDocument();
  });
});
