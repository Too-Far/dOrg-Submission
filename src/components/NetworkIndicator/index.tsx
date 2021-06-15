import React, { ReactElement, useState, useEffect } from 'react';
import { useWeb3React } from '@web3-react/core';
import ErrorIcon from '@material-ui/icons/Error';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { Typography, Grid } from '@material-ui/core';
import { CHAIN_MAP } from '../../utils/constants';
import IncorrectNetworkModal from '../IncorrectNetworkModal';
import { useStyles } from './styles';

interface NetworkIndicatorProps {
    currentNetwork: number | undefined;
    requiredNetwork: number;
}

const NetworkIndicator = ({ currentNetwork, requiredNetwork }: NetworkIndicatorProps): ReactElement => {
    const classes = useStyles();
    const { chainId, account } = useWeb3React();
    const [network, setNetwork] = useState<string>();
    const [match, setMatch] = useState<boolean>();
    const [open, setOpen] = useState<boolean>(false);
    const [accountNum] = useState<string>(
        account ? `${account.substring(0, 6)}...${account.substring(account.length - 4)}` : '',
    );
    useEffect(() => {
        chainId && setNetwork(CHAIN_MAP.get(chainId));
        if (currentNetwork === requiredNetwork) {
            setMatch(true);
            setOpen(false);
        } else {
            setMatch(false);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [chainId, currentNetwork]);
    useEffect(() => {
        if (currentNetwork !== requiredNetwork) {
            setOpen(true);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentNetwork]);
    return (
        <>
            <IncorrectNetworkModal open={open} setOpen={setOpen} />
            <Grid className={classes.wrap}>
                <Typography className={classes.text}>Current Network</Typography>
                <Grid className={classes.middle}>
                    <Typography className={classes.networkText}>{network}</Typography>
                    {match ? (
                        <CheckCircleIcon className={classes.checkIcon} />
                    ) : (
                        <ErrorIcon className={classes.error} />
                    )}
                </Grid>
                <Typography className={classes.text}>Account: {accountNum}</Typography>
            </Grid>
        </>
    );
};

export default NetworkIndicator;
