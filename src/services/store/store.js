import { configureStore } from "@reduxjs/toolkit"
import { reducer as dataReducer } from "./slices/data.slice"

export const store = configureStore({
    reducer: dataReducer,
})
