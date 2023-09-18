import { createSlice } from "@reduxjs/toolkit";

const countSlice = createSlice({
    name: "correctCount",
    initialState: {
        count: 0
    },
    reducers: {
        setCorrectCount(state, action) {
            state.count++;
        },
    },
});

export const { setCorrectCount } = countSlice.actions;
export const countReducer = countSlice.reducer;