import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import MoviesList from "./MoviesList";
import { Provider } from "react-redux";
import { store } from "../../../app/store";

describe("Movie List", () => {
  it("renders without crashing and validate the header", () => {
    const {container} = render(
      <Provider store={store}>
        <MoviesList/>
      </Provider>
    );
    const list = container.getElementsByClassName("movie-list-container");
    expect(list[0]).toBeInTheDocument();
    expect(screen.getByText("MOVIES LIST")).toBeInTheDocument();
  });
});
