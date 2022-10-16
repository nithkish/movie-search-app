import { createSlice } from "@reduxjs/toolkit";
import { getMovies } from "./moviesThunk";
import { RootState } from "../../app/store";

export interface Movie {
  episode_id: number;
  title: string;
  director: string;
  release_date: string;
  opening_crawl:string;
}

export interface MovieState {
  moviesList: Movie[];
  isLoading: boolean;
  message: any;
  searchValue: string;
  sortValue: string | null;
  selectedEpisode: number | null;
  openModal: boolean;
}

const initialState: MovieState = {
  moviesList: [],
  isLoading: false,
  message: "",
  searchValue: "",
  sortValue: null,
  selectedEpisode: null,
  openModal: false,
};

export const moviesSlice = createSlice({
  name: "movies",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    setSearch: (state, { payload }) => {
      state.searchValue = payload;
    },
    sortBy: (state, { payload }) => {
      state.moviesList = state.moviesList.sort((movie1, movie2) => {
        if (payload === "episode") return movie1.episode_id - movie2.episode_id;
        else if (payload === "year")
          return (
            +movie1.release_date.slice(0, 4) - +movie2.release_date.slice(0, 4)
          );
        else return 1;
      });
      state.sortValue = payload;
    },
    selectMovie: (state, { payload }) => {
      state.selectedEpisode = payload;
      state.openModal = true;
    },
    closeModal: (state) => {
      state.openModal = false;
    },
  },
  // The `extraReducers` field lets the slice handle actions defined elsewhere,
  // including actions generated by createAsyncThunk or in other slices.
  extraReducers: (builder) => {
    builder
      .addCase(getMovies.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getMovies.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.moviesList = payload.results;
      })
      .addCase(getMovies.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.message = payload;
      });
  },
});

export const { setSearch, sortBy, selectMovie, closeModal } =
  moviesSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.movies.value)`
export const selectMoviesList = (state: RootState) => state.movies.moviesList;
export const selectSelectedEpisode = (state: RootState) =>
  state.movies.selectedEpisode;
export const selectSortValue = (state: RootState) => state.movies.sortValue;
export const selectIsLoading = (state: RootState) => state.movies.isLoading;
export const selectSearchValue = (state: RootState) => state.movies.searchValue;
export const selectOpenModal = (state: RootState) => state.movies.openModal;
export const selectMessage = (state: RootState) => state.movies.message;

export default moviesSlice.reducer;
