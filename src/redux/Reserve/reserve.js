import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../api/api';

const GET_RESERVES = 'GET_RESERVES';
// const POST_RESERVE = 'POST_RESERVE';
// const DELETE_RESERVE = 'DELETE_RESERVE';

const initialState = [];

// Thunk
const getReservesInfo = createAsyncThunk(GET_RESERVES, async () => {
  try {
    return await api.fetchReserves();
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
  },
});

export { getReservesInfo };
export default itemSlice.reducer;
