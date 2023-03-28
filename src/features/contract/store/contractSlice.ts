import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CHAIN_ID, CONTRACT_ADDRESS } from 'shared/config';
import Contract from '../contract';

type contractStateType = {
  contractInterface?: Contract;
  tvl?: string;
  reward?: string;
  crowns?: string;

  // APR might be requested
  apr: number;
};

export const getTvl = createAsyncThunk<contractStateType['tvl'], Contract>(
  'contract/getTvl',
  async (contract, thunkApi) => {
    try {
      const tvl = await contract.getTVL();
      return tvl;
    } catch (e) {
      console.log(e);
      thunkApi.rejectWithValue(e);
    }
  }
);

export const getCrowns = createAsyncThunk<
  contractStateType['crowns'],
  Contract
>('contract/getCrowns', async (contract, thunkApi) => {
  try {
    const crowns = await contract.getCrowns();
    return crowns;
  } catch (e) {
    console.log(e);
    thunkApi.rejectWithValue(e);
  }
});

export const getReward = createAsyncThunk<
  contractStateType['reward'],
  Contract
>('contract/getReward', async (contract, thunkApi) => {
  try {
    const reward = await contract.getReward();
    return reward;
  } catch (e) {
    thunkApi.rejectWithValue(e);
  }
});

const contractSlice = createSlice({
  name: 'contract',
  initialState: { apr: 4320 } as contractStateType,
  reducers: {
    getContract(state, action: PayloadAction<NonNullable<Window['ethereum']>>) {
      state.contractInterface = new Contract(
        CONTRACT_ADDRESS,
        action.payload,
        CHAIN_ID
      );
    },
  },
  extraReducers(builder) {
    builder.addCase(getTvl.fulfilled, (state, action) => {
      state.tvl = action.payload;
    });
    builder.addCase(getCrowns.fulfilled, (state, action) => {
      state.crowns = action.payload;
    });
    builder.addCase(getReward.fulfilled, (state, action) => {
      state.reward = action.payload;
    });
  },
});

export const selectContract = (state: RootState) =>
  state.contract.contractInterface;
export const selectApr = (state: RootState) => state.contract.apr;
export const selectTvl = (state: RootState) => state.contract.tvl;
export const selectReward = (state: RootState) => state.contract.reward;
export const selectCrowns = (state: RootState) => state.contract.crowns;

export const { getContract } = contractSlice.actions;

export default contractSlice.reducer;
