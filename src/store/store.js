import { configureStore } from "@reduxjs/toolkit";
import allDataSlice from "./allDataSlice";

const store = configureStore({
  reducer: {
    allData: allDataSlice,
  },
});

export default store;
