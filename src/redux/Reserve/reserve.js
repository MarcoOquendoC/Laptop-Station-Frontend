import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../api/api';

const GET_RESERVES = 'GET_RESERVES';
const ADD_RESERVE = 'ADD_RESERVE';
const DELETE_RESERVE = 'DELETE_RESERVE';

const initialState = [];

// Thunk
const getReservesInfo = createAsyncThunk(GET_RESERVES, async () => {
  try {
    return await api.fetchReserves();
  } catch (error) {
    return error.message;
  }
});

const addReserve = createAsyncThunk(ADD_RESERVE, async (id) => {
  try {
    return await api.addReservefetch(id);
  } catch (error) {
    return error.message;
  }
});

const deleteReserve = createAsyncThunk(DELETE_RESERVE, async (id) => {
  try {
    return await api.deleteReservefetch(id);
  } catch (error) {
    return error.message;
  }
});

// reducer
export const itemSlice = createSlice({
  name: 'reserves',
  initialState,
  reducers: { },
  extraReducers: {
    [getReservesInfo.fulfilled]: (state, action) => action.payload,
    [addReserve.fulfilled]: (state, action) => action.payload,
    [deleteReserve.fulfilled]: (state, action) => action.payload,
  },
});

export { getReservesInfo, addReserve, deleteReserve };
export default itemSlice.reducer;
