import React, { FC, ReactElement, useState, useEffect } from 'react';
import { useWeb3React } from '@web3-react/core';
import { Web3Provider } from '@ethersproject/providers';
import { InjectedConnector } from '@web3-react/injected-connector';
import { MetaMaskButton } from 'rimble-ui';
import NetworkIndicator from '../NetworkIndicator';
import { CHAIN_MAP } from '../../utils/constants';
import { useEagerConnect } from '../../hooks/useEagerConnect';

export const injectedConnector = new InjectedConnector({
    supportedChainIds: [1, 100],
});

const WalletConnection = (): ReactElement => {
    const { chainId, activate, active } = useWeb3React<Web3Provider>();
    const triedEager = useEagerConnect();
    const [, setCurrentNetwork] = useState<string>();
    const [eagerPositive, setEagerPositive] = useState(false);
    const onClick = () => {
        activate(injectedConnector);
    };
    useEffect(() => {
        if (triedEager) {
            setEagerPositive(true);
        }
    }, []);

    useEffect(() => {
        chainId && setCurrentNetwork(CHAIN_MAP.get(chainId));
    }, [chainId]);
    return (
        <>
            {active || eagerPositive ? (
                <NetworkIndicator currentNetwork={chainId} requiredNetwork={100} />
            ) : (
                <>
                    <MetaMaskButton.Outline type="button" onClick={onClick} size="small">
                        Connect With Metamask
                    </MetaMaskButton.Outline>
                </>
            )}
        </>
    );
};

export default WalletConnection;
