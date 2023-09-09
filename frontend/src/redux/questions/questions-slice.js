import { createSlice } from "@reduxjs/toolkit";
import { fetchQuestions, addQuestion, deleteQuestion, updateQuestion } from "./questions-operations";

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
            .addCase(addQuestion.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(addQuestion.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                state.questions.push(action.payload.newQuestion);
            })
            .addCase(addQuestion.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(deleteQuestion.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(deleteQuestion.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                const index = state.questions.findIndex(question => question.id === action.payload.id);
                state.questions.splice(index, 1);
            })
            .addCase(deleteQuestion.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(updateQuestion.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(updateQuestion.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                const index = state.questions.findIndex(question => question.id === action.payload.id);
                state.questions.splice(index, 1, action.payload.updatedQuestion);
            })
            .addCase(updateQuestion.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
    }    
});

export const questionsReducer = questionsSlice.reducer;