import React, { FC, ReactElement } from 'react';
import { Grid, Card, Typography } from '@material-ui/core';
import { useStyles } from './styles';
import PaymentGateway from '../PaymentGateway';

interface PaymentPortalProps {
    data: any;
}

const PaymentPortal = ({ data }: PaymentPortalProps): ReactElement => {
    const classes = useStyles();
    return (
        <Card className={classes.card}>
            <Typography variant="h4" className={classes.paymentsText}>
                Payments
            </Typography>
            <Grid container direction="row">
                <Grid item className={classes.innerGrid}>
                    <Typography className={classes.innerText}>Total Estimate:</Typography>
                    <Typography className={classes.innerText}>Estimate: {data.totalEst}</Typography>
                    <Typography className={classes.innerText}>Paid: {data.totalPayments}</Typography>
                    <Typography className={classes.innerText}>
                        Remaining: {data.totalEst - data.totalPayments}
                    </Typography>
                </Grid>
                <Grid item className={classes.gateway}>
                    <PaymentGateway />
                </Grid>
            </Grid>
        </Card>
    );
};

export default PaymentPortal;
