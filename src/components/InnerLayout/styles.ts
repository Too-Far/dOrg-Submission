import { makeStyles, createStyles, Theme } from "@material-ui/core";


export const useStyles = makeStyles((theme: Theme)=>
createStyles({
    root: {
        flex:1,
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        width: '100%',
        padding: '3em'
    },
    bottom: {
        marginTop: '3em'
    }
}))