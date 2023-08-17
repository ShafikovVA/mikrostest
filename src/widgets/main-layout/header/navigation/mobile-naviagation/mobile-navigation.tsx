/* eslint-disable react/jsx-boolean-value */
import {
  useDisclosure, Box, Slide, IconButton, Stack, Divider, Button,
} from '@chakra-ui/react';

import Link from 'next/link';
import React from 'react';
import { useRouter } from 'next/router';
import CloseIcon from '@/shared/components/icons/close-icon';
import MenuIcon from '@/shared/components/icons/menu';
import MicrosLogoMobile from '@/shared/components/icons/micros-mobile-icon';

import { links } from '../links';
import { NavigationLinkMobile } from '../styled';
import { ActiveLink } from '@/shared/components/active-link';

interface MobileNavigationProps {
  isLight: boolean;
}

export const MobileNavigation = (props: MobileNavigationProps):JSX.Element => {
  const { isLight } = props;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();
  const path = router.asPath;

  React.useEffect(() => {
    onClose();
  }, [path]);

  return (
    <>
      <IconButton aria-label="open navigation" onClick={onOpen} icon={<MenuIcon light={isLight} />} backgroundColor="inherit" _hover={{ backgroundColor: 'inherit' }} />
      <Slide
        direction="right"
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
                top="8px"
                right="20px"
              >
                <IconButton aria-label="open navigation" onClick={onClose} icon={<CloseIcon />} backgroundColor="white" />
              </Box>
            </Box>

            <Stack direction="column" spacing="30px" marginTop="80px" alignItems="center">
              {links.map((link) => (
                <ActiveLink href={link.path} global key={link.path}>
                  <NavigationLinkMobile>{link.title}</NavigationLinkMobile>
                </ActiveLink>
              ))}
            </Stack>

            <Divider width="140px" borderWidth="2px" borderColor="black" opacity="40%" borderRadius="2px" marginY="40px" />

            <Button
              backgroundColor="brand.dark"
              color="white"
              fontSize="18px"
              lineHeight="22px"
              border="none"
              borderRadius="4px"
              padding="10px"
              _hover={{ bg: 'brand.light' }}
              as={Link}
              href="#request"
            >
              Заказать звонок
            </Button>
          </Box>

        </Box>
      </Slide>
    </>
  );
};
