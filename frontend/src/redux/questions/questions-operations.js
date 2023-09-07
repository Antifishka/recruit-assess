import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = import.meta.env.VITE_HOST_URL;

export const fetchQuestions = createAsyncThunk(
    "questions/fetchAll",
    async (_, thunkAPI) => {
        try {
            const { data } = await axios.get('/api/questions');
            console.log("data", data);

            return data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);