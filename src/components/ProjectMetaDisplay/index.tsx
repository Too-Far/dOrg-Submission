import React, {FC, ReactElement} from 'react';
import {Card, Text} from 'rimble-ui'
  import {useStyles} from './styles';

  interface ProjectMetaDisplayProps {
    // Props go here
  }
  
  const ProjectMetaDisplay: FC<ProjectMetaDisplayProps> = (props): ReactElement => {
    const classes = useStyles()
    return (
      <Card maxWidth={'90%'} height={'90%'} m={'auto'} bg='teal' color='white' border='none'>
        <Text textAlign={'left'} as='h1'>Project Title:</Text>
        <Text textAlign={'left'} as='h2'>Title Goes Here</Text>
      </Card>
      )
  }
  
  export default ProjectMetaDisplay
  