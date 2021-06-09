/* eslint-disable max-len */
/* This file contains the functions which generate the output of each file */
module.exports = {
    // Output generated for component's definition file
    buildJS: componentName =>
      `import React, {FC, ReactElement} from 'react';
  import {useStyles} from './styles.js';

  interface ${componentName}Props {
    // Props go here
  }
  
  const ${componentName}: FC<${componentName}Props> = (props): ReactElement => {
    const classes = useStyles()
    return (
      <div>
      </div>
      )
  }
  
  export default ${componentName}
  `,
  
    // Output generated for component's css file
    buildCss: componentName => `.${componentName}Wrapper {}`,
    buildStyle: componentName =>
      `import { makeStyles } from "@material-ui/core";
    export const useStyles = makeStyles({})`,
  }
  