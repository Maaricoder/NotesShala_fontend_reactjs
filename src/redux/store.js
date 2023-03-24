import { configureStore } from "@reduxjs/toolkit";

import notereducer from "./noteSlice"
import notesLoadReducer from "./noteLoadSlice"
export const Store = configureStore({
    reducer: {
        inputvalue:notereducer,
 
    }
})