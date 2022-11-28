import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './slices/counterSlice'
import productReducer from './slices/productSlice'

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        product: productReducer
    },
});