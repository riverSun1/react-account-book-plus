import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedMonth: "1",
};
const monthSlice = createSlice({
  name: "month",
  initialState,
  reducers: {
    selectMonth: (state, action) => {
      state.selectedMonth = action.payload;
    },
  },
});

export const { selectMonth } = monthSlice.actions;
export default monthSlice.reducer;
