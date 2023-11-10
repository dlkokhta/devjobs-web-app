import { configureStore } from "@reduxjs/toolkit";
import allDataSlice from "./allDataSlice";
import modeSlice from "./modeSlice";
import inputSlice from "./inputSlice";
import entireInputSlice from "./entireInputSlice";
import filteredCountrySlice from "./filteredCountrySlice";
import fullTimeSlice from "./fullTimeSlice";

const store = configureStore({
  reducer: {
    allData: allDataSlice,
    mode: modeSlice,
    input: inputSlice,
    entireInput: entireInputSlice,
    filteredCountry: filteredCountrySlice,
    fullTime: fullTimeSlice,
  },
});

export default store;
