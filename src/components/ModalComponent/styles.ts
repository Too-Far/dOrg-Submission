import { makeStyles, createStyles, Theme } from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        innerCard: {
            width: '400px',
            display: 'flex',
            justifyContent: 'center',
        },
        modal: {
            justifyContent: 'center',
            margin: 'auto',
        },
    }),
);
