import { createMuiTheme, Theme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';

export const lightTheme: Theme = createMuiTheme({
    typography: {
        fontFamily: 'spartan',
    },
});

export const darkTheme: Theme = createMuiTheme({
    palette: {
        type: 'dark',
        primary: {
            main: '#fc5a8d',
        },
        secondary: {
            main: blue[500],
        },
    },
});
