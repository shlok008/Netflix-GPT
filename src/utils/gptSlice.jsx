import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name:"gpt",
    initialState:{
        showGptSearch:false,
        gptMovieResult:null,
        tmdbMovieResult:null
    },
    reducers:{
        toggleGptSearch:(state)=>{
        state.showGptSearch=!state.showGptSearch;
        },
        addGptMovieResult:(state,action) =>{
            const {gptMovieResult,tmdbMovieResult}=action.payload;
            state.gptMovieResult=gptMovieResult;
            state.tmdbMovieResult=tmdbMovieResult;
        }
    }
}
)
export const{toggleGptSearch, addGptMovieResult} = gptSlice.actions;
export default gptSlice.reducer