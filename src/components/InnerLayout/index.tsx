import React, {FC, ReactElement} from 'react';
import {Flex, Box, Card} from 'rimble-ui';
import ProjectMetaDisplay from '../ProjectMetaDisplay';
import {useStyles} from './styles';

  interface InnerLayoutProps {
    // Props go here
  }
  
  const InnerLayout: FC<InnerLayoutProps> = (props): ReactElement => {
    const classes = useStyles()
    return (
      <>
      <Flex>
        <Box p={3} width={1/2} height={300}  justifyContent='center'>
          <ProjectMetaDisplay/>
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
  