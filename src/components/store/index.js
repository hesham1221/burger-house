import { configureStore } from "@reduxjs/toolkit";
import login from './login-slice'

const store = configureStore({
    reducer : {
        login,
    }
})

export default store;