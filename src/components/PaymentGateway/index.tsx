import React, {FC, ReactElement} from 'react';
import {Text, Button} from 'rimble-ui';
import {useWeb3React} from '@web3-react/core'
import toWei from 'web3'
import {formatEther} from '@ethersproject/units'
import {Grid} from '@material-ui/core';
import Ramp from '../Ramp'
import {useStyles} from './styles';

  
  const PaymentGateway = (): ReactElement => {
    const classes = useStyles()
    const {account, library} = useWeb3React()

    const handlePayment =()=>{
      console.log('click')

    }

    return (
      <div>
        <Grid container justify='flex-end' className={classes.wrapper}>
          <Grid item>
          <Text as='h1' color='white'>Make a Payment</Text>
          <Button.Outline onClick={handlePayment}>Pay With Crypto</Button.Outline>
          <Ramp />
          </Grid>
        </Grid>
      </div>
      )
  }
  
  export default PaymentGateway
  