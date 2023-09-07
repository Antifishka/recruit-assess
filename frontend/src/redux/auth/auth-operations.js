import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = import.meta.env.VITE_HOST_URL;

// Utility to add JWT
const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// Utility to remove JWT
const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

/*
 * POST @ /api/auth/users/signup
 * body: { nickname, email, password }
 */
const register = createAsyncThunk('/api/auth/users/signup',
  async (credentials, thunkAPI) => {
    try {
      console.log(credentials, 'credentials')
      const res = await axios.post('/api/auth/users/signup', credentials);
      // After successful registration, add the token to the HTTP header
      setAuthHeader(res.data.token);
      console.log(res.data);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

/*
 * POST @ /api/auth/users/login
 * body: { email, password }
 */
const logIn = createAsyncThunk('auth/login',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post('/api/auth/users/login', credentials);
      // After successful login, add the token to the HTTP header
      setAuthHeader(res.data.token);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

/*
 * POST @ /api/auth/users/logout
 * headers: Authorization: Bearer token
 */
const logOut = createAsyncThunk('/api/auth/users/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/users/logout');
    // After a successful logout, remove the token from the HTTP header
    clearAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

const operations = {
  register,
  logIn,
  logOut,
  // refreshUser,
};
export default operations;