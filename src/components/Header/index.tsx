import React, {FC, ReactElement} from 'react';
import clsx from 'clsx'
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  IconButton,
  Tooltip,
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import Brightness3Icon from '@material-ui/icons/Brightness3';
import LogoLight from '../LogoLight/index'
import {useStyles} from './styles';

  interface HeaderProps {
    open?: boolean;
    handleMenuOpen?: ()=>void;
    toggleTheme?: ()=>void;
    useDefaultTheme?: boolean;
  }
  
  const Header: FC<HeaderProps> = ({
    open,
    handleMenuOpen,
    toggleTheme,
    useDefaultTheme,
  }): ReactElement => {
    const classes = useStyles()
    return (
      <>
      <CssBaseline />
      <AppBar
        position='fixed'
        elevation={0}
        className={classes.appBar}
        >
          <Toolbar className={classes.toolbar}>
            <div className={classes.logo}>
                <LogoLight width='80px' height='50px'/>
            </div>
            {/* <IconButton onClick={toggleTheme}>
              {useDefaultTheme ? (
                <Tooltip title='Switch to dark mode' placement='bottom'>
                  <Brightness3Icon />
                </Tooltip>
              ): (
                <Tooltip title='Switch to light mode' placement='bottom'>
                  <Brightness7Icon />
                </Tooltip>
              )}
            </IconButton> */}
            <IconButton
                  color="inherit"
                  aria-label="open menu"
                  onClick={handleMenuOpen}
                  edge="start"
                  className={clsx(classes.menuButton, {
                    [classes.hide]: open,
                  })}
                  size="small"
                  >
                    <MenuIcon />
                </IconButton>
          </Toolbar>
        </AppBar>
      </>
      )
  }
  
  export default Header
  