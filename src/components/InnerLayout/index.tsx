import React, {FC, ReactElement, useState} from 'react';
import {Flex, Box, Card, Text} from 'rimble-ui';
import ProjectMetaDisplay from '../ProjectMetaDisplay';
import {projectDetails} from '../../mockData/projectDetails'
import TeamDisplay from '../TeamDisplay';

  
  const InnerLayout: FC = (): ReactElement => {
    const [data] = useState(projectDetails)
    console.log(data)


    return (
      <>
      <Text as='h1' color='white' fontSize={'2vw'} textAlign='center'>{data['title']}</Text>
      <Flex>
        <Box p={3} width={1/2} height={300}  justifyContent='center' mb={4}>
          <ProjectMetaDisplay data={data}/>
        </Box>
        <Box p={3} width={1/2} height={300} mb={4} justifyContent='center'>
        <Card maxWidth={'90%'} height={'90%'} m={'auto'}>Card 2</Card>
        </Box>
      </Flex>
      <Flex>
        <Box p={3} width={1/2} height={300} mb={4} justifyContent='center' overflow={'scroll'}>
        <TeamDisplay data={data} />
        </Box>
        <Box p={3} width={1/2} height={300} bg='yellow'></Box>
      </Flex>
      </>
      )
  }
  
  export default InnerLayout
  