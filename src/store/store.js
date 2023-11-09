import { configureStore } from "@reduxjs/toolkit";
import allDataSlice from "./allDataSlice";
import modeSlice from "./modeSlice";
import inputSlice from "./inputSlice";
import entireInputSlice from "./entireInputSlice";

const store = configureStore({
  reducer: {
    allData: allDataSlice,
    mode: modeSlice,
    input: inputSlice,
    entInput: entireInputSlice,
  },
});

export default store;
