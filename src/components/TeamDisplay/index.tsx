import React, { FC, ReactElement } from 'react';
import { Typography, Card } from '@material-ui/core';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import TeamMemberCard from '../TeamMemberCard';
import { useStyles } from './styles';

interface TeamDisplayProps {
    data: object;
}

const TeamDisplay = ({ data }: TeamDisplayProps): ReactElement => {
    const classes = useStyles();
    const sliderSettings = {
        dots: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        swipeToSlide: true,
    };
    return (
        <Card className={classes.card}>
            <Typography variant="h4" className={classes.text}>
                Meet Your Team!
            </Typography>
            <Slider {...sliderSettings} className={classes.slider}>
                {data['team'].map((member: object, index: React.Key | null | undefined) => (
                    <TeamMemberCard info={member} key={index} />
                ))}
            </Slider>
        </Card>
    );
};

export default TeamDisplay;
