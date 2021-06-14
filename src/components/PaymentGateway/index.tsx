import React, { FC, ReactElement } from 'react';
import { Typography, Button } from '@material-ui/core';
import { useWeb3React } from '@web3-react/core';
import toWei from 'web3';
import { formatEther } from '@ethersproject/units';
import { Grid } from '@material-ui/core';
import Ramp from '../Ramp';
import { useStyles } from './styles';

const PaymentGateway = (): ReactElement => {
    const classes = useStyles();
    const { account, library } = useWeb3React();

    const handlePayment = () => {
        console.log('click');
    };

    return (
        <div>
            <Grid container justify="flex-end" className={classes.wrapper}>
                <Grid item>
                    <Typography variant="h4" className={classes.title}>
                        Make a Payment
                    </Typography>
                    <Button variant="outlined" className={classes.btn} onClick={handlePayment}>
                        Pay With Crypto
                    </Button>
                    <Ramp />
                </Grid>
            </Grid>
        </div>
    );
};

export default PaymentGateway;
