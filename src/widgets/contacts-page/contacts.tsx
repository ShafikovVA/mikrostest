import {
  Box, Text, Heading, Show, Stack,
} from '@chakra-ui/react';

import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

import { maxWidth } from 'styled-system';
import { BankCardDesktop, BankCardMobile } from '@/entities/bank-card';

import { Mails, Telephones } from './components';

export const Contacts = (): JSX.Element => {
  return (
    <Box
      width="100%"
      paddingX="24px"
      paddingTop={{ sm: '170px', md: '150px' }}
      display="flex"
      justifyContent="center"
      flexDirection="column"
      backgroundImage="url('/static/mobile.png')"
      backgroundSize="cover"
      alignItems="center"
      paddingBottom={{ sm: '48px', md: '240px' }}
    >
      <Box
        display="flex"
        width="100%"
        maxWidth="1360px"
        flexDirection="column"
        alignItems="center"
      >
        <Box
          display="flex"
          width="100%"
          marginBottom={{ sm: '50px', md: '100px' }}
          flexDirection={{ sm: 'column', md: 'row' }}
          justifyContent="space-between"
        >
          <Box
            display="flex"
            flexDirection="column"
            marginBottom={{ sm: '50px', md: '0px' }}
            marginRight={{ md: '16px' }}
          >
            <Stack spacing={{ sm: '20px', md: '50px' }} direction="row" marginBottom={{ sm: '20px', md: '48px' }}>
              <Telephones />
              <Mails />
            </Stack>

            <Heading fontSize="26px" fontWeight={600} lineHeight="32px" color="white" marginBottom="16px">
              Адрес
            </Heading>
            <Text maxWidth="540px" fontSize={{ sm: '12px', md: '18px' }} lineHeight={{ sm: '16px', md: '22px' }} color="white" fontWeight={600}>454090, г. Челябинск, ул. Труда, д. 64А, Бизнес-дом «Славянский», офис 602</Text>
          </Box>

          <Box
            display="flex"
            width="100%"
            maxWidth="656px"
            height="362px"
            borderRadius="4px"
            overflow="hidden"
          >
            <YMaps>
              <Map
                height="100%"
                style={{
                  display: 'flex',
                  width: '100%',
                  maxWidth: '656px',
                }}
                defaultState={{
                  center: [55.168686, 61.409686],
                  zoom: 16,
                }}
              >
                <Placemark
                  defaultGeometry={[55.168686, 61.409686]}
                />
              </Map>
            </YMaps>
          </Box>
        </Box>

        <Show ssr above="md">
          <BankCardDesktop />
        </Show>
        <Show ssr below="md">
          <BankCardMobile />
        </Show>

      </Box>
    </Box>
  );
};
