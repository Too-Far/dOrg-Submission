import React, { ReactElement, useState } from 'react';
import { Grid, Typography, useMediaQuery } from '@material-ui/core';
import ProjectMetaDisplay from '../ProjectMetaDisplay';
import ProgressBar from '../ProgressBar';
import { projectDetails } from '../../mockData/projectDetails';
import TeamDisplay from '../TeamDisplay';
import PaymentCard from '../PaymentCard';
import { useStyles } from './styles';

const InnerLayout = (): ReactElement => {
    const classes = useStyles();
    const [data] = useState(projectDetails);
    const mobile = useMediaQuery('(max-width: 800px)');

    return (
        <div className={classes.root}>
            <Typography align="center" className={classes.text}>
                {data['title']} Dashboard
            </Typography>
            <Grid container spacing={4}>
                <Grid item lg={6} xs={12}>
                    <ProjectMetaDisplay data={data} />
                </Grid>
                <Grid item lg={6} xs={12}>
                    <ProgressBar data={data['mileStones']} />
                </Grid>
            </Grid>
            <Grid container spacing={4} className={classes.bottom}>
                <Grid item lg={6} xs={12}>
                    <TeamDisplay data={data} />
                </Grid>
                <Grid item lg={6} xs={12}>
                    <PaymentCard data={data['costBreakdown']} />
                </Grid>
            </Grid>
        </div>
    );
};

export default InnerLayout;
