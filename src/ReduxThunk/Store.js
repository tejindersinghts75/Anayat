import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./Todo";
import signUpReducer from "./Todo"
import rootReducer from "./Todo";



 export const store = configureStore({
    reducer: rootReducer,
})

