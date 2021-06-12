import React, {FC, ReactElement} from 'react';
import {Card, Avatar, Flex, Text, Box, Pill, Button} from 'rimble-ui'

  interface TeamMemberCardProps {
    info: object;
  }
  
  const TeamMemberCard = ({info}:TeamMemberCardProps): ReactElement => {
    return (
      <Card width={1} mb={2} borderRadius={10} bg='#001147'>
      <Flex flexDirection={'row'}>
        <Avatar src='' size='large'/>
        <Box height={'100%'} ml={4}>
          <Flex flexDirection={'row'}>
          <Text>{info['name']}</Text>
          {info['specialties'].includes('Project Lead') &&
          <Button.Outline mainColor='teal' href='' m={'auto'} mb={0}>Contact</Button.Outline>
          }
          </Flex>
          <Text mt={2}>Specialties:</Text>
          <Flex flexDirection={'row'} mt={2} >
          {info['specialties'].map((specialty, index)=>(
            index < 3 &&
            <Pill  fontSize={1} key={index} mr={1}>{specialty}</Pill>
          ))}
          </Flex>
        </Box>
        </Flex>
      </Card>
      )
  }
  
  export default TeamMemberCard
  