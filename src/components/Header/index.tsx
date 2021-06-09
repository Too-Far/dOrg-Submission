import React, {FC, ReactElement} from 'react';
import {useStyles} from './styles';

  interface HeaderProps {
    open: boolean;
    handleMenuOpen: ()=>void;
    toggleTheme: ()=>void;
    useDefaultTheme: boolean;
  }
  
  const Header: FC<HeaderProps> = ({
    open,
    handleMenuOpen,
    toggleTheme,
    useDefaultTheme,
  }): ReactElement => {
    const classes = useStyles()
    return (
      <div>
      </div>
      )
  }
  
  export default Header
  