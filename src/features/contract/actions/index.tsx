import { getBalance } from 'features/wallet';
import { alert } from 'shared/utils';
import Contract from '../contract';
import { getCrowns, getReward } from '../store';

type ActionParams = {
  contract: Contract;
  successMsg?: string;
  errorMsg?: string;
  dispatch: AppDispatch;
};

async function handleClick(
  contractMethod: () => Promise<void>,
  successMsg?: string,
  errorMsg?: string
) {
  await contractMethod()
    .then(() => {
      alert.success(successMsg);
    })
    .catch((e) => {
      console.log(e);
      throw new Error(errorMsg);
    });
}

type getCrownsActionParams = {
  amount: number;
  wallet: string;
  balance: number;
} & ActionParams;

export function getCrownsAction({
  amount,
  balance,
  contract,
  successMsg,
  errorMsg,
  wallet,
  dispatch,
}: getCrownsActionParams) {
  if (!amount) {
    alert.error('Input correct amount of crowns');
    return;
  } else if (amount > balance) {
    alert.error('Your balance is too low');
    return;
  }
  handleClick(contract.buyCrowns.bind(contract, amount), successMsg, errorMsg)
    .then(() => {
      dispatch(getCrowns(contract));
      dispatch(getBalance(wallet!));
    })
    .catch((e) => alert.error(e));
}

export function claimAction({
  contract,
  successMsg,
  errorMsg,
  dispatch,
}: ActionParams) {
  handleClick(contract.claimCrowns.bind(contract), successMsg, errorMsg)
    .then(() => {
      dispatch(getReward(contract));
    })
    .catch((e) => alert.error(e));
}

export function reinvestAction({
  contract,
  successMsg,
  errorMsg,
  dispatch,
}: ActionParams) {
  handleClick(contract.reinvestCrowns.bind(contract), successMsg, errorMsg)
    .then(() => {
      dispatch(getCrowns(contract));
    })
    .catch((e) => alert.error(e));
}
