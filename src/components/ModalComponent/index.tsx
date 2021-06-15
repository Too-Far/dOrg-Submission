import React, { FC, ReactElement, ReactNode } from 'react';
// import {Box, Modal, Card} from 'rimble-ui';
import { Grid, Modal, Card, Dialog } from '@material-ui/core';
import { useStyles } from './styles';

interface ModalComponentProps {
    open: boolean;
    children: ReactNode;
}

const ModalComponent = ({ open, children }: ModalComponentProps): ReactElement => {
    const classes = useStyles();
    return (
        <Dialog className={classes.modal} open={open}>
            <Card className={classes.innerCard}>{children}</Card>
        </Dialog>
    );
};

export default ModalComponent;
