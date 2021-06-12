import React, {FC, ReactElement} from 'react';
import {Card, Heading} from 'rimble-ui';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import TeamMemberCard from '../TeamMemberCard';
import {useStyles} from './styles';

  interface TeamDisplayProps {
    data: object;
  }
  
  const TeamDisplay = ({data}:TeamDisplayProps): ReactElement => {
    const classes = useStyles()
    const sliderSettings ={
      dots: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
      adaptiveHeight: true,
      swipeToSlide: true
    }
    return (
      <Card maxWidth={'90%'} height={300} m={'auto'} bg='teal' color='white' border='none' px={0} borderRadius={10}>
      <Heading as={'h1'} mt={0} mb={1}>Meet Your Team!</Heading>
        <Slider {...sliderSettings} className={classes.slider}>
      {data['team'].map((member, index)=>(
        <TeamMemberCard info={member} key={index}/>
      ))}
      </Slider>
    </Card>
      )
  }
  
  export default TeamDisplay
  