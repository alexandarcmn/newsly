import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const layoutSlice = createSlice({
  name: "layout",
  initialState: {
    searchOpened: false,
  },
  reducers: {
    searchModalHandler: (state, action) => {
      return {
        ...state,
        searchOpened: !state.searchOpened,
      };
    },
  },
});

export const { searchModalHandler } = layoutSlice.actions;
export default layoutSlice.reducer;
