import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../api/api';

const GET_ITEMS = 'GET_ITEMS';

const initialState = [];

// Thunk
const getItemsInfo = createAsyncThunk(GET_ITEMS, async () => {
  try {
    return await api.fetchItems();
  } catch (error) {
    return error.message;
  }
});

// reducer
export const itemSlice = createSlice({
  name: 'item',
  initialState,
  reducers: { },
  extraReducers: {
    [getItemsInfo.fulfilled]: (state, action) => action.payload,
  },
});

export { getItemsInfo };
export default itemSlice.reducer;
