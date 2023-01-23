import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import NewsService, { business, entertainment, general, health, science, sports, technology } from "../services/NewsService";

export const getAllNewsByCategory = createAsyncThunk(
  "news/all",
  async (category) => {
    // const res = await NewsService.getAll(category);
    return {
      category,
      data: null,
    };
  }
);

const newsSlice = createSlice({
  name: "news",
  initialState: {
    allNews: {
      general: general,
      business: business,
      entertainment: entertainment,
      health: health,
      science: science,
      sports: sports,
      technology: technology,
    },
    newsPending: false,
    singleNews: null,
  },
  extraReducers: {
    [getAllNewsByCategory.pending]: (state, action) => {
      return {
        ...state,
        newsPending: true,
      };
    },
    [getAllNewsByCategory.fulfilled]: (state, action) => {
      const { category, data } = action.payload;
      console.log("-------getAllNewsByCategory", category, data);
      return {
        ...state,
        allNews: {
          ...state.allNews,
        },
        newsPending: false,
      };
    },
    [getAllNewsByCategory.rejected]: (state, action) => {
      return {
        ...state,
        newsPending: false,
      };
    },
  },
});

const { reducer } = newsSlice;
export default reducer;
