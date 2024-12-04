import { configureStore } from '@reduxjs/toolkit';
import { encryptorReducer } from '../features/encryptor/encryptorSlice.ts';

export const store = configureStore({
    reducer: {
      encryptor: encryptorReducer,
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;