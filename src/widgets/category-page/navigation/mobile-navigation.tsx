import {
  useDisclosure, Box, Slide, IconButton, Heading, Button,
} from '@chakra-ui/react';

import Link from 'next/link';
import CloseIcon from '@/shared/components/icons/close-icon';
import NavigationIcon from '@/shared/components/icons/navigation-icon';
import MicrosLogoMobile from '@/shared/components/icons/micros-little-logo';

import { CustomAccordion } from '@/features/accordion-category-navigation';
import { Category } from '@/entities/category/type';

interface MobileNavigationProps {
  openedItems: number[];
  data: Category[];
}

export const MobileNavigation = (props: MobileNavigationProps):JSX.Element => {
  const { openedItems, data } = props;
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button value="unstyled" onClick={onOpen} backgroundColor="inherit" _hover={{ bg: 'inherit' }}>
        <NavigationIcon />
        <Heading fontSize={{ sm: '14', md: '26' }} lineHeight={{ sm: '16px', md: '34px' }} fontWeight={600} color="white">Навигация</Heading>
      </Button>
      {/* <IconButton aria-label="open navigation" onClick={onOpen} icon={<NavigationIcon />} backgroundColor="inherit" _hover={{ backgroundColor: 'inherit' }} /> */}
      <Slide
        direction="left"
        in={isOpen}
        style={{
          zIndex: 10,
          height: '100vh',
          width: '100%',
          backgroundColor: 'white',
        }}
      >
        <Box
          display="flex"
          height="100vh"
          width="100%"
          backgroundColor="white"
        >
          <Box display="flex" position="relative" paddingTop="40px" paddingX="24px" width="100%" flexDirection="column" alignItems="center">
            <Box display="flex" width="100%" position="relative" justifyContent="center" alignItems="center">
              <Box display="flex" justifySelf="center">
                <Link href="/">
                  <MicrosLogoMobile />
                </Link>
              </Box>

              <Box
                display="flex"
                position="absolute"
                top="-8px"
                right="20px"
              >
                <IconButton aria-label="open navigation" onClick={onClose} icon={<CloseIcon />} backgroundColor="white" />
              </Box>
            </Box>

            <Box
              display="flex"
              flexDirection="column"
              width="100%"
              maxWidth="300px"
              alignItems="center"
            >
              <Heading marginTop="8px" fontSize="28px" lineHeight="34px" fontWeight="600">Навигация</Heading>
              <Box display="flex" width="100%" justifyContent="flex-start">
                <CustomAccordion data={data} />
              </Box>
            </Box>
          </Box>

        </Box>
      </Slide>
    </>
  );
};
