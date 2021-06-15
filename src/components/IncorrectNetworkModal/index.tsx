import React, { FC, ReactElement, useEffect, useState } from 'react';
import { useWeb3React } from '@web3-react/core';
import { Card, IconButton, Grid, Typography, CircularProgress } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import ModalComponent from '../ModalComponent';
import metaMaskLogo from './MetaMaskIcon.svg';
import { CHAIN_MAP } from '../../utils/constants';
import { useStyles } from './styles';

interface IncorrectNetworkModalProps {
    open: boolean;
    setOpen: any;
}

const IncorrectNetworkModal = ({ open, setOpen }: IncorrectNetworkModalProps): ReactElement => {
    const classes = useStyles();
    const { chainId } = useWeb3React();
    const [chain, setChain] = useState<string>();
    const closeModal = () => {
        setOpen(false);
    };
    useEffect(() => {
        chainId && setChain(CHAIN_MAP.get(chainId));
    }, [chainId]);

    return (
        <ModalComponent open={open}>
            <Card className={classes.card}>
                <IconButton onClick={closeModal} className={classes.btn}>
                    <CloseIcon />
                </IconButton>
                <Grid className={classes.innerGrid}>
                    <img src={metaMaskLogo} className={classes.image} />
                    <Typography className={classes.header}>Switch to the xDai Network</Typography>
                </Grid>
                <Grid className={classes.textWrap}>
                    <Typography>
                        This dApp only works on the xDai network. You are currently on <b>{chain}</b>
                    </Typography>
                </Grid>
                <Grid>
                    <Grid className={classes.spinnerAndText}>
                        <CircularProgress className={classes.spinner} />
                        <Typography>Waiting for the right network...</Typography>
                        <Typography>Switch networks from your Wallet</Typography>
                    </Grid>
                </Grid>
            </Card>
        </ModalComponent>
    );
};

export default IncorrectNetworkModal;
