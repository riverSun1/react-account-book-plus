import { configureStore } from "@reduxjs/toolkit";
import monthReducer from "../slices/monthSlice";

const store = configureStore({
  reducer: {
    month: monthReducer,
  },
});

export default store;
