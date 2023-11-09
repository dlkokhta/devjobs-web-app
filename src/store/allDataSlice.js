import { createSlice } from "@reduxjs/toolkit";

const allDataSlice = createSlice({
  name: "allData", //state
  initialState: { data: [] }, //initialState

  reducers: {
    //ეს სეტავს
    setData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setData } = allDataSlice.actions;
export default allDataSlice.reducer;

// const [allData, setAllData] = useState([]);
// const test = useSelector((store) => store.allData.data);
// dispatch(setData(data));
// setAllData(data);
