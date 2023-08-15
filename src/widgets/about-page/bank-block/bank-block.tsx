import {
  Box, Heading, Show,
} from '@chakra-ui/react';

import { BankCardMobile, BankCardDesktop } from '@/entities/bank-card';

export const BankBlock = ():JSX.Element => {
  return (
    <Box
      display="flex"
      flexDirection={{ sm: 'column', md: 'row' }}
      width="100%"
      paddingX="12px"
      paddingTop={{ sm: '170px', md: '150px' }}
      position="relative"
      justifyContent="center"
      backgroundImage="url('/static/mobile.png')"
      backgroundSize="cover"
      alignItems="center"
      paddingBottom={{ sm: '32px', md: '156px' }}
    >
      <Box
        display="flex"
        flexDirection="column"
        width="100%"
        maxWidth="1360px"
      >
        <Heading color="white" variant={{ sm: 'small', md: 'medium' }} borderBottom="2px solid" borderColor="brand.light" width="max-content">Реквизиты</Heading>

        <Box marginTop={{ sm: '32px', md: '64px' }}>
          <Show ssr above="md">
            <BankCardDesktop />
          </Show>
          <Show ssr below="md">
            <BankCardMobile />
          </Show>
        </Box>
      </Box>
    </Box>
  );
};
