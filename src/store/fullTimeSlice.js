import { createSlice } from "@reduxjs/toolkit";

const fullTimeSlice = createSlice({
  name: "fullTime",
  initialState: {
    Boolean: "false",
  },
  reducers: {
    setFullTime: (state, action) => {
      state.Boolean = action.payload;
    },
  },
});

export const { setFullTime } = fullTimeSlice.actions;
export default fullTimeSlice.reducer;
