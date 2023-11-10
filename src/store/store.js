import { configureStore } from "@reduxjs/toolkit";
import allDataSlice from "./allDataSlice";
import modeSlice from "./modeSlice";
import inputSlice from "./inputSlice";
import entireInputSlice from "./entireInputSlice";
import filterSlice from "./filterSlice";

const store = configureStore({
  reducer: {
    allData: allDataSlice,
    mode: modeSlice,
    input: inputSlice,
    entireInput: entireInputSlice,
    filter: filterSlice,
  },
});

export default store;
