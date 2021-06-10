import { useWeb3React } from '@web3-react/core';
import {FC, ReactElement, useState, useEffect} from 'react';
import {Button} from 'rimble-ui';
import IncorrectNetworkModal from '../IncorrectNetworkModal';
import {useStyles} from './styles';

  interface InnerDialogueProps {
    // Props go here
  }
  
  const InnerDialogue: FC<InnerDialogueProps> = (props): ReactElement => {
    const classes = useStyles()
    const [open, setOpen] = useState(false)
    const {account}=useWeb3React()
    const [accountNum, setAccountNum] = useState<string>(account?`${account.substring(0,6)}...${account.substring(account.length -4)}`:'')
    useEffect(() => {
      if(account){
        setAccountNum(`${account.substring(0,6)}...${account.substring(account.length -4)}`)
      }

    }, [account])

    const openModal = ()=>{
      setOpen(true)
    }

    return (
      <div style={{color: 'white'}}>
          <IncorrectNetworkModal open={open} setOpen={setOpen}/>
        {accountNum}
        <Button onClick={openModal}>Open</Button>
      </div>
      )
  }
  
  export default InnerDialogue
  