import { configureStore } from "@reduxjs/toolkit";
import movielistReducer from "../features/movieListSlice";

export const store = configureStore({
  reducer: {
    movielist: movielistReducer,
  },
});
