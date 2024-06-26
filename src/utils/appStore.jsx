import { configureStore } from "@reduxjs/toolkit";
import  useReducer from "./userSlice";
import  movieReducer from "./movieSlice";
import gptReducer from "./gptSlice";
const appStore = configureStore({
    reducer:{
        user:useReducer,
        movie:movieReducer,
        gpt:gptReducer
    },
});

export default appStore;