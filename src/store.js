import { configureStore } from '@reduxjs/toolkit'
import { productsApi } from './store'

console.log(productsApi);

export const store = configureStore({
    reducer:{},
})