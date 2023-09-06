import { createSlice } from "@reduxjs/toolkit";
import { fetchQuestions } from "./contacts-operations";

const questionsSlice = createSlice({
    name: "questions",
    initialState: {
        questions: [],
        isLoading: false,
        error: null,
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchQuestions.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchQuestions.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                state.questions = action.payload.questions;
            })
            .addCase(fetchQuestions.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
    }    
});

export const  questions = questionsSlice.reducer;