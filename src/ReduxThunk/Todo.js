import { createSlice } from "@reduxjs/toolkit";
import getData from "./axios";




export const setGetData = () => async (dispatch) => {
    try {
        const response = await getData();
        dispatch(setData(response));
        //console.log(response)
    } catch (error) {
        console.error("Error fetching data:", error);

    }
};

const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        isLoading: false,
        data: null,
        isError: false,
    },
    reducers: {
        setData: (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        }
    },
})
const signUpSlice = createSlice({
    name: 'signUp',
    initialState: {
        signUp: null,
    },
    reducers: {
        setsignUp: (state, action) => {
            state.signUp = action.payload;

        },
    }
})

const userSlice = createSlice({
    name: "user",
    initialState: {
        username: "",
        password: "",
        disable: true,
    },

    reducers: {
        updateUser: (state, action) => {
            state.username = action.payload.username;
            state.password = action.payload.password;
            state.disable = action.payload.disable;
        }
    }
})

export const { setData } = todoSlice.actions;
export const { setsignUp } = signUpSlice.actions;
export const { updateUser } = userSlice.actions;

const rootReducer = {
    todo: todoSlice.reducer,
    signUp: signUpSlice.reducer,
    user: userSlice.reducer,
};
export default rootReducer;