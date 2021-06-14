import { createMuiTheme, Theme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';

export const lightTheme: Theme = createMuiTheme({
    typography: {
        fontFamily: 'spartan',
    },
    palette: {
        primary: {
            main: '#001047',
        },
        secondary: {
            main: '#1AAF71',
        },
    },
    overrides: {
        MuiButton: {
            root: {
                color: '#1AAF71',
                border: 'solid #1AAF71 2px',
                backgroundColor: '#001047',
            },
        },
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
