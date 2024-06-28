import { configureStore } from "@reduxjs/toolkit";
import layoutReducer from './LayoutSlice'

export const store = configureStore({
    reducer: {
        layout: layoutReducer,
    }
})