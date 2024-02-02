import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentuser: null,
    loading: false,
    error: null,
}


export const userslice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        signinstart: (state) => {
            state.loading = true,
                state.error = null
        },

        signinsuccess: (state, action) => {
            state.currentuser = action.payload
            state.loading = false,
                state.error = null
        },

        signinfailure: (state, action) => {
            state.loading = false,
                state.error = action.payload
        },
        signoutsuccess: (state) => {
           state.currentuser = null,
           state.loading = false,
           state.error = null
        }

    }
})



export const { signinfailure, signinstart, signinsuccess, signoutsucces } = userslice.actions
export default userslice.reducer