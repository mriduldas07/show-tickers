import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getSingleShows } from "./singleShowsAPI";

// initial State
const initialState = {
  singleShows: [],
  isLoading: false,
  isError: false,
  error: "",
};

// async thunk
export const fetchSingleShows = createAsyncThunk(
  "singleShows/fetchSingleShows",
  async (id) => {
    const shows = await getSingleShows(id);
    return shows;
  }
);

// slice

const singleShowsSlice = createSlice({
  name: "singleShows",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchSingleShows.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchSingleShows.fulfilled, (state, action) => {
        state.isLoading = false;
        state.singleShows = action.payload;
        state.isError = false;
        state.error = "";
      })
      .addCase(fetchSingleShows.rejected, (state, action) => {
        state.isError = true;
        state.error = action?.error?.message;
        state.singleShows = [];
        state.isLoading = false;
      });
  },
});

export default singleShowsSlice.reducer;
