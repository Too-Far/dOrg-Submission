import { makeStyles } from '@material-ui/core';
export const useStyles = makeStyles({
    btn: {
        marginLeft: '80%',
    },
    chip: {
        marginLeft: '0.5em',
    },
    card: {
        backgroundColor: '#001047',
        color: 'white',
        height: '100%',
        borderRadius: '10px',
    },
    innerContent: {
        display: 'flex',
        flexDirection: 'row',
        flex: '1 0 auto',
        alignContent: 'center',
    },
    avatar: {
        marginRight: '1em',
    },
    name: {
        alignSelf: 'center',
    },
    specialties: {
        marginLeft: '3em',
    },
});
