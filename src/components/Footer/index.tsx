import React, {FC, ReactElement} from 'react';
  import {useStyles} from './styles';
  import {FOOTER_TEXT} from '../../utils/constants'

  
  const Footer = (): ReactElement => {
    const classes = useStyles()
    return (
      <div className={classes.footerWrapper}>
        {FOOTER_TEXT}
      </div>
      )
  }
  
  export default Footer
  