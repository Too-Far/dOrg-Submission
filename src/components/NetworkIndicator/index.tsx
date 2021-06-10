import {FC, ReactElement, useState, useEffect} from 'react';
import { useWeb3React } from '@web3-react/core';
import {Flex, Text, Icon} from 'rimble-ui';
import {CHAIN_MAP} from '../../utils/constants'
import IncorrectNetworkModal from '../IncorrectNetworkModal';

  interface NetworkIndicatorProps {
    currentNetwork: number | undefined;
    requiredNetwork: number;
  }
  
  const NetworkIndicator: FC<NetworkIndicatorProps> = ({currentNetwork, requiredNetwork}): ReactElement => {
    const {chainId, account} = useWeb3React()
    const [network, setNetwork] = useState<string>()
    const [match, setMatch] = useState<boolean>()
    const [open, setOpen] = useState<boolean>(false)
    const [accountNum, ] = useState<string>(account?`${account.substring(0,6)}...${account.substring(account.length -4)}`:'')
    useEffect(() => {
      chainId && setNetwork(CHAIN_MAP.get(chainId))
      if(currentNetwork === requiredNetwork){
        setMatch(true)
        setOpen(false)
      } else {
        setMatch(false)
      }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [chainId, currentNetwork])
    useEffect(() => {
      if(currentNetwork !== requiredNetwork){
        setOpen(true)
      }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentNetwork])
    return (
      <>
        <IncorrectNetworkModal open={open} setOpen={setOpen} />
        <Flex flexDirection='column' mr={5} pl={4} pr={3} borderLeft='1px solid teal' borderRight='1px solid teal'>
          <Text fontSize={1} color='silver' caps>
            Current Network
          </Text>
          <Flex>
            <Text mr={2}>{network}</Text>
            {match ? 
            <Icon name='CheckCircle' color='success'/>
            :<Icon name='Error' color='danger'/>
            }
          </Flex>
          <Text fontSize={1} color='silver'>
              Account: {accountNum}
            </Text>
        </Flex>
        </>
      )
  }
  
  export default NetworkIndicator
  