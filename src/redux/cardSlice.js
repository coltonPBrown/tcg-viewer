import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import apiClient from '../api/tcgplayer';

export const fetchCards = createAsyncThunk('cards/fetchCards', async () => {
  const response = await apiClient.get('/cards');
  return response.data;
});

const cardSlice = createSlice({
  name: 'cards',
  initialState: {
    items: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCards.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCards.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchCards.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default cardSlice.reducer;
