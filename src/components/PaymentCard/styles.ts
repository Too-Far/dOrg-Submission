import { makeStyles } from '@material-ui/core';
export const useStyles = makeStyles({
    gateway: {
        width: '60%',
        height: '100%',
    },
    card: {
        height: '300px',
        backgroundColor: 'teal',
        color: 'white',
        border: 'none',
        borderRadius: '10px',
    },
    innerGrid: {
        justifyContent: 'space-around',
    },
    innerText: {
        marginTop: '2em',
        marginLeft: '2em',
    },
    paymentsText: {
        marginLeft: '1em',
        marginTop: '1em',
    },
});
