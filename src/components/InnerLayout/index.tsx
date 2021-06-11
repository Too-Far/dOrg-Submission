import React, {FC, ReactElement, useState} from 'react';
import {Flex, Box, Card, Text} from 'rimble-ui';
import ProjectMetaDisplay from '../ProjectMetaDisplay';
import {projectDetails} from '../../mockData/projectDetails'

  
  const InnerLayout: FC = (): ReactElement => {
    const [data] = useState(projectDetails)
    console.log(data)


    return (
      <>
      <Text as='h1' color='white' fontSize={'2vw'} textAlign='center'>{data['title']}</Text>
      <Flex>
        <Box p={3} width={1/2} height={300}  justifyContent='center'>
          <ProjectMetaDisplay data={data}/>
        </Box>
        <Box p={3} width={1/2} height={300} >
        <Card maxWidth={'90%'} height={'90%'} m={'auto'}>Card 2</Card>
        </Box>
      </Flex>
      <Flex>
        <Box p={3} width={1/3} height={300} bg='teal'></Box>
        <Box width={1/3}></Box>
        <Box p={3} width={1/3} height={300} bg='yellow'></Box>
      </Flex>
      </>
      )
  }
  
  export default InnerLayout
  