/* eslint-disable react/jsx-boolean-value */
import Link from 'next/link';
import * as React from 'react';
import { useRouter } from 'next/router';

import {
  Box, Button, Show,
} from '@chakra-ui/react';

import { Navigation } from './navigation/desktop-navigation';
import { MobileNavigation } from './navigation/mobile-naviagation';

import MicrosLogo from '@/shared/components/icons/micros-logo';
import MicrosLogoMobile from '@/shared/components/icons/micros-mobile-icon';

export const HeaderDesktop = (): JSX.Element => {
  return (
    <Box display="flex" width="100%" justifyContent="center" paddingY="30px" paddingX="24px">
      <Box display="flex" maxWidth="1360px" width="100%" justifyContent="space-between" alignItems="center">
        <Link href="/">
          <MicrosLogo dark={true} />
        </Link>

        <Navigation />

        <Button
          backgroundColor="#314689"
          color="white"
          width="250px"
          height="68px"
          fontSize="24px"
          border="none"
          borderRadius="4px"
          padding="20px"
          _hover={{ bg: '#6981CA' }}
          as={Link}
          href="#request"
        >
          Заказать звонок
        </Button>
      </Box>
    </Box>
  );
};

export const HeaderMobile = ():JSX.Element => {
  const { asPath } = useRouter();
  const isLight = asPath !== '/catalog';

  return (
    <Box position="absolute" top="0" left="0" width="100%" zIndex={10}>
      <Box display="flex" position="relative" paddingTop="40px" paddingX="24px" alignItems="center">
        <Box display="flex" justifySelf="center" marginLeft="auto" marginRight="auto">
          <Link href="/">
            <MicrosLogoMobile light={isLight} />
          </Link>
        </Box>

        <Box
          display="flex"
          position="absolute"
          top="40px"
          right="24px"
        >
          <MobileNavigation isLight={isLight} />
        </Box>
      </Box>
    </Box>
  );
};

export const Header = (): JSX.Element => {
  return (
    <>
      <Show below="md" ssr>
        <HeaderMobile />
      </Show>

      <Show above="md" ssr>
        <HeaderDesktop />
      </Show>
    </>
  );
};
