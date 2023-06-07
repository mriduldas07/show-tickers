import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllShows } from "./showsAPI";

// initial state
const initialState = {
  shows: [],
  isLoading: false,
  isError: false,
  error: "",
};

// async thunc

export const fetchShows = createAsyncThunk("shows/fetchShows", async () => {
  const result = await getAllShows();
  return result;
});

// slice

const showsSlice = createSlice({
  name: "shows",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchShows.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchShows.fulfilled, (state, action) => {
        state.isLoading = false;
        state.shows = action.payload;
        state.isError = false;
        state.error = "";
      })
      .addCase(fetchShows.rejected, (state, action) => {
        state.isError = true;
        state.error = action?.error?.message;
        state.shows = [];
        state.isLoading = false;
      });
  },
});

export default showsSlice.reducer;
