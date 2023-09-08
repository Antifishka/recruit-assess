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
const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post('/api/auth/users/signup', credentials);
      // After successful registration, add the token to the HTTP header
      setAuthHeader(data.user.token);
   
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

/*
 * POST @ /api/auth/users/login
 * body: { email, password }
 */
const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post('/api/auth/users/login', credentials);
      // After successful login, add the token to the HTTP header
      setAuthHeader(data.user.token);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

/*
 * POST @ /api/auth/users/logout
 * headers: Authorization: Bearer token
 */
const logOut = createAsyncThunk(
  'auth/logout',
  async (_, thunkAPI) => {
    try {
      await axios.get('/api/auth/users/logout');
      // After a successful logout, remove the token from the HTTP header
      clearAuthHeader();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

/*
 * GET @ /users/current
 * headers: Authorization: Bearer token
 */
const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    // Reading the token from the state via getState()
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      // If there is no token, exit without performing any request
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {
      // If there is a token, add it to the HTTP header and perform the request
      setAuthHeader(persistedToken);
      const res = await axios.get('/api/auth/users/current');
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const operations = {
  register,
  logIn,
  logOut,
  refreshUser,
};
export default operations;