import {FC, ReactElement, ReactNode} from 'react';
import {Box, Modal, Card} from 'rimble-ui';

  interface ModalComponentProps {
    open: boolean;
    children: ReactNode;
  }
  
  const ModalComponent: FC<ModalComponentProps> = ({open, children}): ReactElement => {

    return (
      <Box p={4}>
        <Box>
          <Modal isOpen={open}>
            <Card width={'420px'} p={0}>
                {children}
            </Card>
          </Modal>
        </Box>
      </Box>
      )
  }
  
  export default ModalComponent
  