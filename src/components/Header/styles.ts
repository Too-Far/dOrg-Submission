import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        appBar: {
            zIndex: theme.zIndex.drawer + 1,
            backgroundColor: '#001147',
            borderBottom: 'solid white 1px',
            transition: theme.transitions.create(['width', 'margin'], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
        },
        toolbar: {
            flex: 1,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
        },
        menuButton: {
            marginRight: 36,
        },
        logo: {
            flex: 1,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            marginLeft: '20px',
        },
        hide: {
            display: 'none',
        },
    }),
);
