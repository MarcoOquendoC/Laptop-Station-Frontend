import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../api/api';

// Action creators
const SIGNUP = 'SIGNUP';
const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';
const GET_AUTH_USER = 'GET_AUTH_USER';

const initialState = [];

// Thunk
const register = createAsyncThunk(SIGNUP, async (user) => {
  try {
    return await api.register(user);
  } catch (error) {
    return error.message;
  }
});

const login = createAsyncThunk(LOGIN, async (user) => {
  try {
    return await api.login(user);
  } catch (error) {
    return error.message;
  }
});

const logout = createAsyncThunk(LOGOUT, async () => {
  try {
    return await api.logout();
  } catch (error) {
    return error.message;
  }
});

const currentUser = createAsyncThunk(GET_AUTH_USER, async () => {
  try {
    return await api.currentUser();
  } catch (error) {
    return error.message;
  }
});

// Reducer
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: { },
  extraReducers: {
    [register.fulfilled]: (state, action) => action.payload,
    [login.fulfilled]: (state, action) => action.payload,
    [logout.fulfilled]: (state, action) => action.payload,
    [currentUser.fulfilled]: (state, action) => action.payload,
  },
});

export {
  register, login, logout, currentUser,
};
export default authSlice.reducer;
