import { configureStore } from "@reduxjs/toolkit";
import showsReducer from "../features/shows/showsSlice";
import singleShowsReducer from "../features/singleShows/singleShowsSlice";

export const store = configureStore({
  reducer: {
    shows: showsReducer,
    singleShows: singleShowsReducer,
  },
});
