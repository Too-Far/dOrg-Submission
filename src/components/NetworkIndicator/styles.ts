import { makeStyles, createStyles, Theme } from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        text: {
            color: 'silver',
        },
        wrap: {
            flexDirection: 'column',
            marginRight: '5px',
            paddingLeft: '4px',
            paddingRight: '3px',
            borderLeft: '1px solid teal',
            borderRight: '1px solid teal',
        },
        networkText: {
            marginRight: '4px',
        },
        middle: {
            display: 'flex',
            flexDirection: 'row',
        },
        checkIcon: {
            color: 'green',
        },
        error: {
            color: 'red',
        },
    }),
);
