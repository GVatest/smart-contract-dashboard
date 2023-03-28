import { configureStore } from '@reduxjs/toolkit';
import { contractReducer } from 'features/contract';
import { walletReducer } from 'features/wallet';

export const store = configureStore({
  reducer: {
    wallet: walletReducer,
    contract: contractReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
