import React, {FC, ReactElement} from 'react';
import {
  AppBar,
  Toolbar,
  CssBaseline,
} from '@material-ui/core'
import LogoLight from '../LogoLight/index'
import {useStyles} from './styles';
import WalletConnection from '../WalletConnection';

  interface Check {
    one: string
  }
  const Header: FC<Check> = ({one}): ReactElement => {
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
            <WalletConnection />
          </Toolbar>
        </AppBar>
      </>
      )
  }
  
  export default Header
  