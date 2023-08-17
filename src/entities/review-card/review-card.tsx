import Image, { StaticImageData } from 'next/image';
import {
  Box,
  Text,
  Heading,
  Divider,
  useDisclosure,
  Modal as ChakraModal,
  ModalOverlay,
  ModalContent,
  ModalBody,
} from '@chakra-ui/react';
import CloseIcon from '@/shared/components/icons/close-modal';

export interface ReviewCardProps {
  company: string,
  icon: StaticImageData;
  review: string;
  letter?: string | StaticImageData;
}

export const ReviewCard = (props: ReviewCardProps): JSX.Element => {
  const {
    company, icon, review, letter,
  } = props;

  const { onClose, onOpen, isOpen } = useDisclosure();
  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        border="2px solid"
        borderColor="brand.dark"
        paddingX="20px"
        paddingTop={{ sm: '20px', md: '10px' }}
        paddingBottom={{ sm: '20', md: '28px' }}
        borderRadius="20px"
        width="100%"
        maxWidth="440px"
        _hover={{
          position: 'relative',
          top: '-4px',
          boxShadow: '5px 10px 5px 0px rgba(0, 0, 0, 0.25)',
        }}
        cursor={letter ? 'pointer' : 'default'}
        onClick={onOpen}
      >
        <Box
          display="flex"
          width="100%"
          alignItems="center"
        >
          <Box minWidth="70px">
            <Image src={icon} alt="" />
          </Box>
          <Heading fontSize={{ sm: '14px', md: '18px' }} lineHeight={{ sm: '18px', md: '24px' }} marginLeft="12px" whiteSpace={{ sm: 'normal', md: 'nowrap' }}>{company}</Heading>
        </Box>
        <Divider borderWidth="2px" borderColor="black" opacity="40%" borderRadius="2px" marginY="10px" />

        <Text variant={{ sm: 'caption', md: 'medium' }}>{review}</Text>
      </Box>

      {letter && (
        <ChakraModal isOpen={isOpen} onClose={onClose} isCentered>
          <ModalOverlay />
          <ModalContent padding="24px" backgroundColor="transparent" boxShadow="none">
            <Box position="absolute" top={0} right={0} cursor="pointer">
              <CloseIcon onClick={onClose} color="white" />
            </Box>
            {letter && <Image src={letter} alt="letter image" />}
          </ModalContent>
        </ChakraModal>
      )}
    </>
  );
};
