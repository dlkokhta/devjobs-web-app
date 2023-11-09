import { createSlice } from "@reduxjs/toolkit";

const entireInputSlice = createSlice({
  name: "entInput",
  initialState: {
    text: "",
  },
  reducers: {
    setEntInput: (state, action) => {
      state.text = action.payload;
    },
  },
});

export const { setEntInput } = entireInputSlice.actions;
export default entireInputSlice.reducer;
