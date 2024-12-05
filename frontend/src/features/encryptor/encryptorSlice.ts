import { createSlice } from '@reduxjs/toolkit';
import { decodeMessage, encodeMessage } from './encryptorThunk.ts';


interface EncryptorState {
  encodedMessage: string;
  decodedMessage: string;
  fetchLoading: boolean;
  error: string | null;
}

const initialState: EncryptorState = {
  encodedMessage:'',
  decodedMessage: '',
  fetchLoading: false,
  error: null,
}

export const encryptorSlice = createSlice({
  name: 'encryptor',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
  builder
    .addCase(encodeMessage.pending, (state) => {
      state.fetchLoading = true;
      state.error = null;
  })
    .addCase(encodeMessage.fulfilled, (state, action) => {
      state.fetchLoading = false;
      state.encodedMessage = action.payload;
    })
    .addCase(encodeMessage.rejected, (state) => {
      state.fetchLoading = false;
    })
    .addCase(decodeMessage.pending, (state) => {
      state.fetchLoading = true;
      state.error = null;
    })
    .addCase(decodeMessage.fulfilled, (state, action) => {
      state.fetchLoading = false;
      state.decodedMessage = action.payload;
    })
    .addCase(decodeMessage.rejected, (state) => {
      state.fetchLoading = false;
    });
},
});


export const encryptorReducer = encryptorSlice.reducer;