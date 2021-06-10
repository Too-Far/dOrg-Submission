import React, {FC, ReactElement} from 'react';
import {Card, Text, Progress, Flex, Heading} from 'rimble-ui'

  
  const ProjectMetaDisplay: FC = (props): ReactElement => {

    return (
      <Card maxWidth={'90%'} height={'90%'} m={'auto'} bg='teal' color='white' border='none'>
        <Heading as={'h1'} >Your Project</Heading>
        <Flex flexDirection='column' mr={5} pl={4} pr={3}>
        <Text textAlign={'left'} as='h1'>Project Title: Title Goes Here</Text>
        </Flex>
        <Progress value={0.5} width={'100%'} color='white'/>
      </Card>
      )
  }
  
  export default ProjectMetaDisplay
  