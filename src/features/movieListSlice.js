import { createSlice } from "@reduxjs/toolkit";

const initialState = { data: "hello" };

export const movieListSlice = createSlice({
  name: "movielist",
  initialState,
  reducers: {
    setMovieData(state, action) {
      action.payload = action.payload.filter(
        (movie) => movie.backdrop_path != null
      );
      state.data = [...action.payload];
    },
  },
});

export const movieListActions = movieListSlice.actions;
export default movieListSlice.reducer;
