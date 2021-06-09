import { makeStyles, createStyles, Theme } from "@material-ui/core";
import {DRAWER_WIDTH, FOOTER_HEIGHT} from '../../utils/constants'


export const useStyles = makeStyles((theme: Theme)=>
createStyles({
    root: {
        flex:1,
        display: 'flex',
        flexDirection: 'column',
        height: '100vh'
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        minHeight: `calc(100vh - ${FOOTER_HEIGHT}px)`,
        background: theme.palette.background.paper,
        backgroundColor: '#001147'
    },
    toolbar: {
        ...theme.mixins.toolbar,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: DRAWER_WIDTH,
    }
}))