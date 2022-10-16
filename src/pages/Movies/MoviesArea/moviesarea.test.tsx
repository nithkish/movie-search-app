import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import MoviesArea from "./MoviesArea";
import { Provider } from "react-redux";
import { store } from "../../../app/store";
import {resizeWindow} from "../../../utils/testUtils"

describe("Movies", () => {
  it("renders without crashing ", () => {
    const {container} = render(
      <Provider store={store}>
        <MoviesArea/>
      </Provider>
    );
    const movies = container.getElementsByClassName("movies-container");
    expect(movies[0]).toBeInTheDocument();
  });
  it("displays child components properly", () => {
    const {container} = render(
      <Provider store={store}>
        <MoviesArea/>
      </Provider>
    );
    const search = container.getElementsByClassName("movie-list-container");
    expect(search[0]).toBeInTheDocument();
    expect(screen.getByText("MOVIES LIST")).toBeInTheDocument();
    expect(screen.getByText("SUMMARY")).toBeInTheDocument();
    expect(screen.getByText("No Movie Selected")).toBeInTheDocument();
  });
  it("decreasing the width below 550px doesnt show summary", () => {
    const {container} = render(
      <Provider store={store}>
        <MoviesArea/>
      </Provider>
    );
    expect(screen.getByText("SUMMARY")).toBeInTheDocument();
    resizeWindow(400);
    expect(screen.getByText("SUMMARY")).not.toBeInTheDocument();
  });
});
