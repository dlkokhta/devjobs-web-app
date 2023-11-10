import { createSlice } from "@reduxjs/toolkit";

const fullTimeSlice = createSlice({
  name: "fullTime",
  initialState: {
    text: "",
  },
  reducers: {
    setFullTime: (state, action) => {
      state.text = action.payload;
    },
  },
});

export const { setFullTime } = fullTimeSlice.actions;
export default fullTimeSlice.reducer;
