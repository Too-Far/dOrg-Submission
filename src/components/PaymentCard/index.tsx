import React, {FC, ReactElement} from 'react';
import {Card, Heading, Text} from 'rimble-ui';
import {Grid} from '@material-ui/core'
import {useStyles} from './styles';
import PaymentGateway from '../PaymentGateway';

  interface PaymentPortalProps {
    data: any;
  }

  
  const PaymentPortal = ({data}:PaymentPortalProps): ReactElement => {
    const classes = useStyles()
    return (
      <Card height={300} m={'auto'} bg='teal' color='white' border='none' px={0} borderRadius={10}>
        <Heading as={'h1'} mt={0}>Payments</Heading>
        <Grid container direction='row'>
        <Grid item>
          <Text as='h3' color='white'>Total Estimate:</Text>
          <Text as='h3' color='whtie'>Estimate: {data.totalEst}</Text>
          <Text as='h3' color='white'>Paid: {data.totalPayments}</Text>
          <Text as='h3' color='white'>Remaining: {data.totalEst - data.totalPayments}</Text>
        </Grid>
        <Grid item className={classes.gateway}>
        <PaymentGateway />
        </Grid>
        </Grid>
      </Card>

      )
  }
  
  export default PaymentPortal
  