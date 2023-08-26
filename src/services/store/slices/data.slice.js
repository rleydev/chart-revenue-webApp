import { createSlice } from "@reduxjs/toolkit";
import { getData } from "../actions/data.action";

export const dataSlice = createSlice({
    name: "data",
    initialState: {
        isLoading: false,
        error: null,
        dataArray: [],
        sumValuesD: [],
        sumValuesMS: [],
        sumValuesW: [],
        sumValuesH: [],
        datesValuesD: [],
        datesValuesMS: [],
        datesValuesW: [],
        datesValuesH: []
    },
    reducers: {
    
    }, 
    extraReducers: builder => {
        builder.addCase(getData.pending, state => {
            state.isLoading = true
        })
        .addCase(getData.fulfilled, (state, action) => {
            state.isLoading = false
            state.dataArray = action.payload

            // add sum array
            state.sumValuesD = state.dataArray[0].result.map(
                (resultItem) => resultItem.sum
            );

            state.sumValuesMS = state.dataArray[1].result.map(
                (resultItem) => resultItem.sum
            );

            state.sumValuesW = state.dataArray[2].result.map(
                (resultItem) => resultItem.sum
            );

            state.sumValuesH = state.dataArray[3].result.map(
                (resultItem) => resultItem.sum
            );

            // add dates array
            state.datesValuesD = state.dataArray[0].result.map(
                (resultItem) => resultItem.date
            );

            state.datesValuesMS = state.dataArray[1].result.map(
                (resultItem) => resultItem.date
            );

            state.datesValuesW = state.dataArray[2].result.map(
                (resultItem) => resultItem.date
            );

            state.datesValuesH = state.dataArray[3].result.map(
                (resultItem) => resultItem.date
            );
        })
        .addCase(getData.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error.message
            state.dataArray = []
        })
    }
})

export const { actions, reducer} = dataSlice