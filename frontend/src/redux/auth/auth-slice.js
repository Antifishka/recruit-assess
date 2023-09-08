import { createSlice } from "@reduxjs/toolkit";
import authOperations from './auth-operations';

const initialState = {
  user: { nickname: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(authOperations.register.fulfilled, (state, action) => {
                state.user = action.payload.user;
                state.token = action.payload.user.token;
                state.isLoggedIn = true;
            })
            .addCase(authOperations.logIn.fulfilled, (state, action) => {
                state.user = action.payload.user;
                state.token = action.payload.user.token;
                state.isLoggedIn = true;
            })
            .addCase(authOperations.logOut.fulfilled, (state) => {
                state.user = { nickname: null, email: null };
                state.token = null;
                state.isLoggedIn = false;
            })
           
    } 
})

export const authReducer = authSlice.reducer;