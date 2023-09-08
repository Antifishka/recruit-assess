import { createSlice } from "@reduxjs/toolkit";
import authOperations from './auth-operations';

const initialState = {
  user: { nickname: null, email: null, avatarURL: null },
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
                state.user = { nickname: null, email: null, avatarURL: null };
                state.token = null;
                state.isLoggedIn = false;
            })
            .addCase(authOperations.refreshUser.pending, (state) => {
                state.isRefreshing = true;
            })
            .addCase(authOperations.refreshUser.fulfilled, (state, action) => {
                state.user = action.payload.user;
                state.isLoggedIn = true;
                state.isRefreshing = false;
            })
            .addCase(authOperations.refreshUser.rejected, (state) => {
                state.isRefreshing = false;
            })
    } 
})

export const authReducer = authSlice.reducer;