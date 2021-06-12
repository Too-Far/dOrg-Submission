import React, { ReactElement } from 'react';
import { Typography, Card } from '@material-ui/core';
import { useStyles } from './styles';

interface ProjectMetaDisplayProps {
    data: object;
}

const ProjectMetaDisplay = ({ data }: ProjectMetaDisplayProps): ReactElement => {
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <Typography variant="h4" className={classes.text}>
                Your Project
            </Typography>
            <Typography className={classes.text}>Project Title: {data['title']}</Typography>
            <Typography className={classes.text}>Description:</Typography>
            <Typography className={classes.text}>{data['description']}</Typography>
        </Card>
    );
};

export default ProjectMetaDisplay;
