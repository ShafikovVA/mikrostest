import {
  Modal as ChakraModal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  Box,
} from '@chakra-ui/react';
import CloseIcon from '@/shared/components/icons/close-modal';

export interface ModalBrandProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export const Modal = (props: ModalBrandProps): JSX.Element => {
  const { isOpen, onClose, children } = props;

  return (
    <ChakraModal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent padding="24px" backgroundColor="transparent" width="100%" maxWidth="640px" boxShadow="none">
        <Box position="absolute" top={0} right={0} cursor="pointer">
          <CloseIcon onClick={onClose} color="white" />
        </Box>
        {children}
      </ModalContent>
    </ChakraModal>
  );
};
