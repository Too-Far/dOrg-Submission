import {FC, ReactNode} from 'react';
import {CssBaseline} from '@material-ui/core'
import Header from '../Header';
import Footer from '../Footer'
import {useStyles} from './styles';

  interface LayoutProps {
    children: ReactNode;
  }
  
  const Layout: FC<LayoutProps> = ({children}) => {
    const classes = useStyles()
    return (
      <div className={classes.root}>
        <CssBaseline />
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
  