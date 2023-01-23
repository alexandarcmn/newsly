import { configureStore } from '@reduxjs/toolkit';
//
import layoutSlice from './slices/layoutSlice';
import newsSlice from './slices/newsSlice';

export default configureStore({
    reducer:{
        layout: layoutSlice,
        news: newsSlice,
    }
})