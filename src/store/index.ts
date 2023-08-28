import { configureStore } from "@reduxjs/toolkit";
import songSlice from "./songSlice";
import uiSlice from "./uiSlice";

const store = configureStore({
  reducer: {
    song: songSlice.reducer,
    ui: uiSlice.reducer
  }
})

export default store