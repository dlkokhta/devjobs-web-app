import { createSlice } from "@reduxjs/toolkit";

const filteredCountrySlice = createSlice({
  name: "filteredCountry",
  initialState: {
    text: "",
  },

  reducers: {
    setFilteredCountry: (state, action) => {
      state.text = action.payload;
    },
  },
});

export const { setFilteredCountry } = filteredCountrySlice.actions;
export default filteredCountrySlice.reducer;
