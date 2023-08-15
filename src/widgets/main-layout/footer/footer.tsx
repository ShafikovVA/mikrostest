import * as React from 'react';
import { Box, Show } from '@chakra-ui/react';

import { Contacts } from './contacts';
import { Info } from './info';
import { Navigation } from './navigation';

export const FooterDesktop = ():JSX.Element => {
  return (
    <Box display="flex" width="100%" paddingY="30px" justifyContent="center" paddingX="16px">
      <Box display="flex" maxWidth={{ md: '1024px', lg: '1360px' }} width="100%" justifyContent="space-between">
        <Navigation />

        <Info />

        <Contacts />
      </Box>
    </Box>
  );
};

const FooterMobile = (): JSX.Element => {
  return (
    <Box
      display="flex"
      paddingX="24px"
      paddingY="20px"
      width="100%"
      flexDirection="column"
    >
      <Box
        display="flex"
        width="100%"
        justifyContent="space-between"
        alignItems="flex-start"
      >
        <Navigation />
        <Contacts />
      </Box>

      <Box
        display="flex"
        marginLeft="auto"
        marginRight="auto"
        marginTop="60px"
      >
        <Info />
      </Box>
    </Box>
  );
};

export const Footer = ():JSX.Element => {
  return (
    <>
      <Show below="md">
        <FooterMobile />
      </Show>
      <Show above="md">
        <FooterDesktop />
      </Show>
    </>
  );
};
