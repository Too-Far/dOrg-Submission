import React, {FC, ReactElement, useState} from 'react';
import {Card, Text} from 'rimble-ui';
import {Grid} from '@material-ui/core'
import ProjectMetaDisplay from '../ProjectMetaDisplay';
import ProgressBar from '../ProgressBar';
import {projectDetails} from '../../mockData/projectDetails'
import TeamDisplay from '../TeamDisplay';
import PaymentCard from '../PaymentCard'
import {useStyles} from './styles'

  
  const InnerLayout = (): ReactElement => {
    const classes = useStyles()
    const [data] = useState(projectDetails)


    return (
      <div className={classes.root}>
      <Text as='h1' color='white' fontSize={'2vw'} textAlign='center'>{data['title']}</Text>
      <Grid container spacing={4}>
        <Grid item lg={6} sm={12}>
          <ProjectMetaDisplay data={data}/>
        </Grid>
          <Grid item lg={6} sm={12}>
          <ProgressBar data={data['mileStones']}/>
          </Grid>
          </Grid>
          <Grid container spacing={4} className={classes.bottom}>
        <Grid item lg={6} sm={12}>
          <TeamDisplay data={data} />
        </Grid>
          <Grid item lg={6} sm={12}>
          <PaymentCard data={data['costBreakdown']}/>
          </Grid>
          </Grid>
        </div>
      )
  }
  
  export default InnerLayout
  