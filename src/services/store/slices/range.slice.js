import { createSlice } from "@reduxjs/toolkit";

export const rangeSlice = createSlice({
    name: 'range',
    initialState: {
        currentRange: 'Hourly',
    },
    reducers: {
        changeCurrentRange: (state, action) => {
            if (state.currentRange !== action.payload) {
                state.currentRange = action.payload
            }
        }
    }
}) 

export const { actions, reducer } = rangeSlice
