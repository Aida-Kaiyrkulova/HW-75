import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosApi from '../../axiosApi.ts';
import { DecodeResponse, EncodeResponse, EncryptRequestData } from '../../types';


export const encodeMessage = createAsyncThunk<string, EncryptRequestData, { rejectValue: string }>(
  'encryptor/encodeMessage',
  async ({ password, message }, { rejectWithValue }) => {
    try {
      const response = await axiosApi.post<EncodeResponse>('/encryptor/encode', { password, message });
      return response.data.encoded;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.error || 'Error encoding message');
    }
  }
);

export const decodeMessage = createAsyncThunk<string, EncryptRequestData, { rejectValue: string }>(
  'encryptor/decodeMessage',
  async ({ password, message }, { rejectWithValue }) => {
    try {
      const response = await axiosApi.post<DecodeResponse>('/encryptor/decode', { password, message });
      return response.data.decoded;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.error || 'Error decoding message');
    }
  }
);