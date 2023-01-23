import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const layoutSlice = createSlice({
  name: "layout",
  initialState: {
    modal: {
      type: "",
      isOpen: false,
      loading: false,
    },
    sidebarOpened: false,
    form: null,
  },
  reducers: {
    openModal: (state, action) => {
      return {
        modal: {
          type: action.payload.type,
          isOpen: true,
        },
      };
    },
    closeModal: (state, action) => {
      return {
        modal: {
          type: "",
          isOpen: false,
        },
      };
    },
  },
});

export const { openModal, closeModal } = layoutSlice.actions;
export default layoutSlice.reducer;
