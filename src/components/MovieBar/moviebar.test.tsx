import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import MovieBar from "./MovieBar";
import { Provider } from "react-redux";
import { store } from "../../app/store";
import { Movie } from "../../redux/movies/moviesSlice";

const testmovie: Movie = {
    episode_id: 1,
    title: "Test Title",
    director: "Test Director",
    release_date: "2010-01-03",
    opening_crawl:"this is test summary of the movie"
}

describe("MovieBar", () => {
  it("renders without crashing and displays details correctly", () => {
    const {container} = render(
      <Provider store={store}>
        <MovieBar movie={testmovie}/>
      </Provider>
    );
    const episode = container.getElementsByClassName("episode");
    expect(episode[0].textContent).toBe("Episode 1");
    const title = container.getElementsByClassName("title");
    expect(episode[0].textContent).toBe("Episode 1");
    const date = container.getElementsByClassName("date");
    expect(episode[0].textContent).toBe("Episode 1");
  });
});
