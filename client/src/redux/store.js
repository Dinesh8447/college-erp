import { configureStore } from "@reduxjs/toolkit";
import userslice from "./user/userslice";


export const store = configureStore({
    reducer:{
        user:userslice
    }
})