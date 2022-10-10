import { createAsyncThunk } from "@reduxjs/toolkit";
import { getMoviesByFormat } from "../../api/services/movies";

export const getMovies = createAsyncThunk(
  "movies/getData",
  //dummyArg -dummy variable to use rejectWithValue
  async (dummyArg, { rejectWithValue }) => {
    try {  
      const { data } = await getMoviesByFormat("json");
      // The value we return becomes the `fulfilled` action payload
      return data;
    } catch (error) {
      rejectWithValue(error);
      // The error becomes the `rejected` action payload
    }
  }
);
