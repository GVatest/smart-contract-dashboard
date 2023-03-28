import { useAppDispatch, useAppSelector } from 'app/store/hooks';
import { useEffect } from 'react';
import { DAPP_NAME } from 'shared/config';
import { alert, checkIsMobile } from 'shared/utils';
import { shortenString } from 'shared/utils/shortenString';
import {
  connectWallet,
  selectConnected,
  selectError,
  selectWallet,
} from '../../store/';
import ConnectButtonStyle from './styles';

function ConnectButton() {
  const provider = window.ethereum;
  const wallet = useAppSelector(selectWallet);
  const isConnected = useAppSelector(selectConnected);
  const error = useAppSelector(selectError);
  const dispatch = useAppDispatch();
  const isMobile = checkIsMobile();
  const metamaskAppDeepLink = 'https://metamask.app.link/dapp/' + DAPP_NAME;

  function connect(firstRender?: boolean) {
    if (provider) {
      dispatch(connectWallet(provider));
      if (firstRender) {
        provider.on('accountsChanged', connect);
      }
    } else if (!firstRender) {
      alert.error('Ethereum provider not found');
    }
  }

  useEffect(() => {
    if (error) alert.error(error);
  }, [error]);

  useEffect(() => {
    connect(true);
  }, []);

  return (
    <ConnectButtonStyle
      onClick={() => connect()}
      disabled={isConnected}
      href={isMobile && !provider ? metamaskAppDeepLink : undefined}
      color='success'
      variant='contained'
      sx={{ pointerEvents: isConnected ? 'none' : 'initial' }}
    >
      {isConnected ? shortenString(wallet!, 13) : 'Connect Wallet'}
    </ConnectButtonStyle>
  );
}

export default ConnectButton;
