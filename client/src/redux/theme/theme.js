import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    theme:'light'
}


const themeslice = createSlice({
    name:'theme',
    initialState,
    reducers:{
        themetoggle:(state)=>{
            state.theme = state.theme === "light" ? "dark" : "light"
        }
    }
})

export const {themetoggle} = themeslice.actions
export default themeslice.reducer;



