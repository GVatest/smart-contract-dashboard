import { useAppDispatch, useAppSelector } from 'app/store/hooks';
import { selectWallet } from 'features/wallet';
import { useEffect } from 'react';
import { CHAIN_ID, CONTRACT_ADDRESS } from 'shared/config';
import {
  getContract,
  getCrowns,
  getReward,
  getTvl,
  selectContract,
} from '../store';

export function initContract() {
  const provider = window.ethereum;
  const dispatch = useAppDispatch();
  const wallet = useAppSelector(selectWallet);
  const contract = useAppSelector(selectContract);

  useEffect(() => {
    if (provider && wallet) {
      dispatch(getContract(provider));
    }
  }, [wallet, provider, CONTRACT_ADDRESS, CHAIN_ID]);

  useEffect(() => {
    if (contract) {
      dispatch(getCrowns(contract));
      dispatch(getReward(contract));
      dispatch(getTvl(contract));
    }
  }, [CONTRACT_ADDRESS, CHAIN_ID, contract]);
}
