import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Modal from "./Modal";
import { Provider } from "react-redux";
import { store } from "../../app/store";

const Test = () => {
  return <h1>TEST</h1>;
};

describe("Modal", () => {
  it("renders without crashing and displays child component", () => {
    render(
      <Provider store={store}>
        <Modal children={<Test />} />
      </Provider>
    );
    const label = screen.getByText("TEST");
    expect(label).toBeInTheDocument();
  });
});
