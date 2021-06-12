import React, {FC, ReactElement, useState} from 'react';
import {RampInstantSDK} from '@ramp-network/ramp-instant-sdk'
import {Button} from 'rimble-ui'

  
  const Ramp = (): ReactElement => {
    const [ramp] = useState(new RampInstantSDK({
      hostAppName: 'Client Portal',
      hostLogoUrl: 'https://cdn-images-1.medium.com/max/2600/1*nqtMwugX7TtpcS-5c3lRjw.png'
    }))

    const rampUp = ()=>{
      ramp.show()
    }
    
    return (
      <div style={{marginTop: '2em'}}>
        <Button.Outline onClick={rampUp} style={{width:'100%'}}>Pay with Fiat</Button.Outline>
      </div>
      )
  }
  
  export default Ramp
  