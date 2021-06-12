import React, {FC, ReactElement, useState, useEffect} from 'react';
import {useWeb3React} from '@web3-react/core';
import {Web3Provider} from '@ethersproject/providers';
import {InjectedConnector} from '@web3-react/injected-connector'
import {MetaMaskButton} from 'rimble-ui';
import NetworkIndicator from '../NetworkIndicator'
import { CHAIN_MAP } from '../../utils/constants';



export const injectedConnector = new InjectedConnector({
  supportedChainIds: [
    1,
    100,
  ]
})
  
  const WalletConnection = (): ReactElement => {
    const {chainId, activate, active} = useWeb3React<Web3Provider>()
 
    const [, setCurrentNetwork] = useState<string>()
    const onClick = () =>{
      activate(injectedConnector)
    }
    useEffect(() => {
      chainId&& setCurrentNetwork(CHAIN_MAP.get(chainId))
    }, [chainId])
    return (
      <>
      {active ? (
        <NetworkIndicator currentNetwork={chainId} requiredNetwork={100}/>
      ) : (
        <h1>
        <MetaMaskButton.Outline type="button" onClick={onClick} size='small'>
          Connect With Metamask
        </MetaMaskButton.Outline>
        </h1>
      )}
    </>
      )
  }
  
  export default WalletConnection
  