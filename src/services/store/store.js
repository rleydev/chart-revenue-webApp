import { combineReducers, configureStore } from "@reduxjs/toolkit"
import { reducer as dataReducer } from "./slices/data.slice"
import { reducer as rangeReducer} from "./slices/range.slice"

const reducers = combineReducers({
    dataReducer,
    rangeReducer
})

export const store = configureStore({
    reducer: reducers,
})
