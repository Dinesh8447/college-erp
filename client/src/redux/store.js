import { configureStore ,combineReducers} from "@reduxjs/toolkit";
import userslice from "./user/userslice";
import theme from "./theme/theme";
import storage from 'redux-persist/lib/storage'
import {persistReducer, persistStore} from 'redux-persist'

const rootreducer = combineReducers({
    user:userslice,
    theme:theme
})

const persisteconfig = {
    key:'root',
    storage,
    version:1,
}

const persistereducer = persistReducer(persisteconfig,rootreducer)


export const store = configureStore({
    reducer:persistereducer,
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware({serializableCheck:false})
})

export const persistor = persistStore(store)