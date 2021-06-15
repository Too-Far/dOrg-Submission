import { makeStyles, createStyles, Theme } from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        card: {
            borderRadius: '10px',
        },
        btn: {
            position: 'absolute',
            top: 0,
            right: 0,
            marginTop: '3px',
            marginRight: '3px',
        },
        innerGrid: {
            justifyContent: 'space-between',
            alignItems: 'center',
            borderBottom: '1px solid teal',
            paddingRight: '3px',
            paddingBottom: '3px',
        },
        image: {
            width: '24px',
            marginTop: '1em',
            marginLeft: '1em',
        },
        header: {
            textAlign: 'center',
            marginBottom: '2em',
        },
        textWrap: {
            textAlign: 'center',
            marginBottom: '2em',
        },
        spinnerAndText: {
            textAlign: 'center',
            justifyContent: 'center',
        },
        spinner: {
            marginBottom: '2em',
        },
    }),
);
