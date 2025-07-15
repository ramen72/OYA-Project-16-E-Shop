import { createSlice } from "@reduxjs/toolkit";

export const ideBarSlice = createSlice({
  name: "counter",
  initialState: {
    value: false,
  },
  reducers: {
    showSideBar: (state) => {
      state.value = true;
    },
    hideSideBar: (state) => {
      state.value = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { showSideBar, hideSideBar } = ideBarSlice.actions;

export default ideBarSlice.reducer;
