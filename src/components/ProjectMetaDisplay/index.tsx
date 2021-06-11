import React, {FC, ReactElement} from 'react';
import {Card, Text, Progress,Flex, Box, Heading} from 'rimble-ui'


  interface ProjectMetaDisplayProps {
    data: object
  }
  
  const ProjectMetaDisplay: FC<ProjectMetaDisplayProps> = ({data}): ReactElement => {

    return (
      <Card maxWidth={'90%'} height={300} m={'auto'} bg='teal' color='white' border='none' px={0} borderRadius={10}>
        <Heading as={'h1'} mt={0}>Your Project</Heading>
        <Text textAlign={'left'} as='h1'>Project Title: {data['title']}</Text>
        <Text textAlign={'left'} as='p' overFlow={'hidden'}>Description:</Text>
        <Text textAlign={'left'} as='p'>{data['description']}</Text>
      </Card>
      )
  }
  
  export default ProjectMetaDisplay
  