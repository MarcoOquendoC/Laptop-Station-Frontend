import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const URL = 'https://picsum.photos/200/300';
const SHOW_ITEMS = 'SHOW_ITEMS';

const fetchItemsInfo = createAsyncThunk(SHOW_ITEMS, async () => {
  const response = await fetch(URL);
  const images = await response.json();
  const imagesInfo = images.map(({
    // eslint-disable-next-line camelcase
    id, author, width, height, url, download_url,
  }) => ({
    id: parseInt(id, 10),
    author,
    width,
    height,
    url,
    // eslint-disable-next-line camelcase
    downloadUrl: download_url,
    picsumUrl: `${baseUrl}${id}${size}`,
    nosizeUrl: `${baseUrl}${id}`,
    blurUrl: `${baseUrl}${id}${size}?blur`,
    grayUrl: `${baseUrl}${id}${size}?grayscale`,
    grayBlurUrl: `${baseUrl}${id}${size}?grayscale&blur`,
  }));
  return imagesInfo;
});

const initialState = [];
export const imageSlice = createSlice({
  name: 'image',
  initialState,
  reducers: { },
  extraReducers: {
    [fetchItemsInfo.fulfilled]: (state, action) => action.payload,
  },
});

export { fetchItemsInfo };
export default imageSlice.reducer;
