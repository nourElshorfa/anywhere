

import { configureStore } from '@reduxjs/toolkit'
import CounterSlice from './CounterSlice.ts'
import ApiSlice from './ApiSlice.ts'

export const reduxStore = configureStore({
    reducer : {
        CounterSlice , 
        ApiSlice
    }
}) 