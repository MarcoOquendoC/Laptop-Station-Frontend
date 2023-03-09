import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../api/api';

const SHOW_ITEMS = 'SHOW_ITEMS';

const initialState = [];

// Thunk
const getItemsInfo = createAsyncThunk(SHOW_ITEMS, async () => {
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
