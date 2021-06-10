import React, {FC, ReactElement, useState} from 'react';
import {RampInstantSDK} from '@ramp-network/ramp-instant-sdk'
import {Button} from 'rimble-ui'

  
  const Ramp: FC = (props): ReactElement => {
    const [ramp] = useState(new RampInstantSDK({
      hostAppName: 'Client Portal',
      hostLogoUrl: 'https://cdn-images-1.medium.com/max/2600/1*nqtMwugX7TtpcS-5c3lRjw.png'
    }))

    const rampUp = ()=>{
      ramp.show()
    }
    
    return (
      <div>
        <Button.Outline onClick={rampUp}>Ramp Up</Button.Outline>
      </div>
      )
  }
  
  export default Ramp
  