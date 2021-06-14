import React, { ReactElement } from 'react';
import { Button, Chip, Card, CardContent, Avatar, Typography, Grid } from '@material-ui/core';
import { useStyles } from './styles';

interface TeamMemberCardProps {
    info: object;
}

const TeamMemberCard = ({ info }: TeamMemberCardProps): ReactElement => {
    const classes = useStyles();
    return (
        <Card className={classes.card}>
            <CardContent>
                <Grid direction="row" className={classes.innerContent}>
                    <Avatar src="" className={classes.avatar}>
                        {info['name'].charAt(0)}
                    </Avatar>
                    <Typography className={classes.name}>{info['name']}</Typography>
                </Grid>
                {info['specialties'].includes('Project Lead') && (
                    <Button variant="outlined" color="secondary" className={classes.btn} href="">
                        Contact
                    </Button>
                )}
                <Typography className={classes.specialties}>Specialties:</Typography>
                {info['specialties'].map(
                    (specialty, index) =>
                        index < 3 && (
                            <Chip label={specialty} variant="outlined" color="secondary" className={classes.chip} />
                        ),
                )}
            </CardContent>
        </Card>
    );
};

export default TeamMemberCard;
