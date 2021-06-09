import {createMuiTheme, Theme} from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import pink from '@material-ui/core/colors/pink';

export const lightTheme: Theme = createMuiTheme({
    palette: {
        type: 'light',
        primary: {
            main: blue[800],
        },
        secondary: {
            main: pink[300]
        }
    }
});

export const darkTheme: Theme = createMuiTheme({
    palette: {
        type: 'dark',
        primary: {
            main: '#fc5a8d',
        },
        secondary: {
            main: blue[500]
        },
    },
});