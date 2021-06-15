import { makeStyles, createStyles, Theme } from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        text: {
            marginTop: '0.5em',
        },
        card: {
            height: 300,
            backgroundColor: 'teal',
            color: 'white',
            borderRadius: '10px',
            padding: '2em',
        },
    }),
);
