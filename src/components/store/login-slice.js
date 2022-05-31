import { createSlice } from "@reduxjs/toolkit";

const initialState = {islogin : false , token : '' , email : '' , userName :'' , profilePic :''}

const loginSlice = createSlice({
    name :'login',
    initialState,
    reducers : {
        login(state,action){
            state.islogin = true;
            state.token = action.payload.token;
            state.email = action.payload.email;
            state.userName = action.payload.userName;
            state.profilePic = action.payload.profilePic
        },
        logout(state){
            state = initialState;
        },
    }
})

export default loginSlice.reducer ;

export const loginAction = loginSlice.actions;