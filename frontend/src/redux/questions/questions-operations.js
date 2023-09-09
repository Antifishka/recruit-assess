import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchQuestions = createAsyncThunk(
    "questions/fetchAll",
    async (_, thunkAPI) => {
        try {
            const response = await axios.get('/questions');
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);

export const addQuestion = createAsyncThunk(
    "questions/addQuestion",
    async (question, thunkAPI) => {
        try {
            const response = await axios.post("/questions", question);
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);

export const deleteQuestion = createAsyncThunk(
    "questions/deleteQuestion",
    async (questionId, thunkAPI) => {
        try {
            const response = await axios.delete(`/questions/${questionId}`);
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);