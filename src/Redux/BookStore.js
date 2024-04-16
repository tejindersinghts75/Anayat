import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './BookReducer'

export default configureStore({
    reducer : {
        counter:counterReducer
    }
})