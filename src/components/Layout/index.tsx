import React, {FC, ReactNode} from 'react';
import Header from '../Header';
import Footer from '../Footer'
import {useStyles} from './styles';

  interface LayoutProps {
    children: ReactNode;
  }
  
  const Layout = ({children}:LayoutProps) => {
    const classes = useStyles()

    return (
      <div className={classes.root}>
        <Header />
        <main className={classes.content}>
          <div className={classes.toolbar} />
          {children}
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
      )
  }
  
  export default Layout
  