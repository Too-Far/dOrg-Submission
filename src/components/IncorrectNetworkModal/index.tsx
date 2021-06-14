import React, { FC, ReactElement, useEffect, useState } from 'react';
import { useWeb3React } from '@web3-react/core';
import { Heading, Text, Flex, Box, Loader, Card, Image, Button } from 'rimble-ui';
import ModalComponent from '../ModalComponent';
import metaMaskLogo from './MetaMaskIcon.svg';
import { CHAIN_MAP } from '../../utils/constants';

interface IncorrectNetworkModalProps {
    open: boolean;
    setOpen: any;
}

const IncorrectNetworkModal = ({ open, setOpen }: IncorrectNetworkModalProps): ReactElement => {
    const { chainId } = useWeb3React();
    const [chain, setChain] = useState<string>();
    const closeModal = () => {
        setOpen(false);
    };
    useEffect(() => {
        chainId && setChain(CHAIN_MAP.get(chainId));
    }, [chainId]);

    return (
        <ModalComponent open={open}>
            <Card borderRadius={4}>
                <Button.Text
                    iconOnly
                    icon={'Close'}
                    color={'red'}
                    position={'absolute'}
                    top={0}
                    right={0}
                    mt={3}
                    mr={3}
                    onClick={closeModal}
                />
                <Flex
                    justifyContent="space-between"
                    alignItems="center"
                    borderBottom={1}
                    borderColor={'teal'}
                    p={[3, 4]}
                    pb={3}
                >
                    <Image src={metaMaskLogo} aria-label="MetaMask Extension Icon" size="24px" />
                    <Heading textAlign="center" as="h1" fontSize={[2, 3]} px={[3, 0]}>
                        Switch to the xDai Network
                    </Heading>
                </Flex>
                <Box p={[3, 4]}>
                    <Text textAlign="center">
                        This dApp only works on the xDai network. You are currently on <b>{chain}</b>
                    </Text>
                </Box>
                <Box px={[3, 4]} pb={[3, 4]}>
                    <Flex flexDirection={['column', 'row']} p={[3, 4]} alignItems={['center', 'auto']}>
                        <Loader size={'3em'} mr={[0, 3]} mb={[2, 0]} />
                        <Text fontWeight={4}>Waiting for the right network...</Text>
                        <Text fontWeight={2}>Switch networks from your Wallet</Text>
                    </Flex>
                </Box>
            </Card>
        </ModalComponent>
    );
};

export default IncorrectNetworkModal;
