import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ethers } from 'ethers';

// TODO: move getBalance to contract slice

type walletStateType = {
  wallet?: string;
  connected: boolean;
  balance?: string;
  error?: string;
};

export const getBalance = createAsyncThunk<
  walletStateType['balance'],
  string,
  { rejectValue: string }
>('wallet/getBalance', async (wallet, thunkApi) => {
  try {
    const balance: string = await window.ethereum!.request({
      method: 'eth_getBalance',
      params: [wallet, 'latest'],
    });
    return ethers.utils.formatEther(balance);
  } catch (e) {
    return thunkApi.rejectWithValue("Couldn't get your balance");
  }
});

export const connectWallet = createAsyncThunk<
  string,
  NonNullable<Window['ethereum']>,
  { rejectValue: string; dispatch: AppDispatch }
>('wallet/connectWallet', async (provider, thunkApi) => {
  try {
    const wallets: string[] = await provider.request({
      method: 'eth_requestAccounts',
    });

    if (!wallets.length) {
      return thunkApi.rejectWithValue('Wallet not found');
    }

    const wallet = wallets[0];

    thunkApi.dispatch(getBalance(wallet));

    return wallets[0];
  } catch (e) {
    return thunkApi.rejectWithValue("Couldn't connect your wallet");
  }
});

const walletSlice = createSlice({
  name: 'wallet',
  initialState: { connected: false } as walletStateType,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(connectWallet.fulfilled, (state, action) => {
        state.wallet = action.payload;
        state.connected = true;
      })
      .addCase(connectWallet.pending, (state) => {
        // TODO: test if that event nessesary (disconnect wallet)

        state.wallet = undefined;
        state.connected = false;
      })
      .addCase(connectWallet.rejected, (state, action) => {
        state.error = action.payload;
        state.wallet = undefined;
        state.balance = undefined;
        state.connected = false;
      })
      .addCase(getBalance.fulfilled, (state, action) => {
        state.balance = action.payload;
      })
      .addCase(getBalance.rejected, (state, action) => {
        state.error = action.payload;
        state.balance = undefined;
      });
  },
});

export const selectWallet = (state: RootState) => state.wallet.wallet;
export const selectBalance = (state: RootState) => state.wallet.balance;
export const selectError = (state: RootState) => state.wallet.error;
export const selectConnected = (state: RootState) => state.wallet.connected;

export default walletSlice.reducer;
