import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import {DRAWER_WIDTH} from '../../utils/constants'
export const useStyles = makeStyles((theme: Theme)=>
    createStyles({
        appBar: {
            zIndex: theme.zIndex.drawer +1,
            transition: theme.transitions.create(['width', 'margin'], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            })
        },
        appBarShift: {
            marginLeft: DRAWER_WIDTH,
            width: `calc(100% - ${DRAWER_WIDTH}px)`,
            transition: theme.transitions.create(['width', 'margin'],{
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
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
        title: {
            flex: 1,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center'
        },
        hide: {
            display: 'none'
        }
    })
)