import { makeStyles, createStyles, Theme } from '@material-ui/core';
import { FOOTER_HEIGHT } from '../../utils/constants';

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            width: '100%',
        },
        content: {
            flexGrow: 1,
            padding: theme.spacing(3),
            minHeight: `calc(100vh - ${FOOTER_HEIGHT}px)`,
            background: theme.palette.background.paper,
            backgroundColor: '#001147',
        },
        toolbar: {
            ...theme.mixins.toolbar,
        },
    }),
);
