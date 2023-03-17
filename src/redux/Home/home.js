import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../api/api';

const GET_ITEMS = 'GET_ITEMS';
const ADD_ITEM = 'ADD_ITEM';
const DELETE_ITEM = 'DELETE_ITEM';

const initialState = [];

// Thunk
const getItemsInfo = createAsyncThunk(GET_ITEMS, async () => {
  try {
    return await api.fetchItems();
  } catch (error) {
    return error.message;
  }
});

const addItem = createAsyncThunk(ADD_ITEM, async (item) => {
  try {
    return await api.addItemfetch(item);
  } catch (error) {
    return error.message;
  }
});

const deleteItem = createAsyncThunk(DELETE_ITEM, async () => {
  try {
    return await api.deleteItemfetch();
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
    [addItem.fulfilled]: (state, action) => action.payload,
    [deleteItem.fulfilled]: (state, action) => action.payload,
  },
});

export { getItemsInfo, addItem, deleteItem };
export default itemSlice.reducer;
