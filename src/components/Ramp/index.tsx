import React, { FC, ReactElement, useState } from 'react';
import { RampInstantSDK } from '@ramp-network/ramp-instant-sdk';
import { Button } from '@material-ui/core';
import { useStyles } from './styles';

const Ramp = (): ReactElement => {
    const classes = useStyles();
    const [ramp] = useState(
        new RampInstantSDK({
            hostAppName: 'Client Portal',
            hostLogoUrl: 'https://cdn-images-1.medium.com/max/2600/1*nqtMwugX7TtpcS-5c3lRjw.png',
        }),
    );

    const rampUp = () => {
        ramp.show();
    };

    return (
        <div style={{ marginTop: '2em' }}>
            <Button variant="outlined" color="secondary" className={classes.btn} onClick={rampUp}>
                Pay With Fiat
            </Button>
        </div>
    );
};

export default Ramp;
