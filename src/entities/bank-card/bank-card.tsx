import {
  Box, Text, Button, Heading, Stack,
} from '@chakra-ui/react';
import MicrosLogo from '@/shared/components/icons/micros-logo';

import { details } from './bank-details';

export const BankCardMobile = (): JSX.Element => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      padding="30px"
      border="2px solid"
      borderColor="brand.light"
      color="brand.white"
      borderRadius="20px"
      alignItems="center"
    >
      <MicrosLogo dark={false} />
      <Box display="flex" flexDirection="column">
        <Heading fontSize="14px" fontWeight="500" lineHeight="18px" marginTop="30px" color="white" marginBottom="20px">
          Общество с ограниченной ответственностью «Микрос»
        </Heading>

        <Stack spacing="10px" direction="column">
          <Text color="white" variant="small">{`${details.inn.key}:${details.inn.value}`}</Text>
          <Text color="white" variant="small">{`${details.kpp.key}:${details.kpp.value}`}</Text>
          <Text color="white" variant="small">{`${details.orgn.key}:${details.orgn.value}`}</Text>
          <Text color="white" variant="small">{details.ur.value}</Text>
          <Text color="white" variant="small">{`${details.bank.key}:${details.bank.value}`}</Text>
          <Text color="white" variant="small">{`${details['p/c'].key}:${details['p/c'].value}`}</Text>
          <Text color="white" variant="small">{`${details.bik.key}:${details.bik.value}`}</Text>
          <Text color="white" variant="small">{`${details['k/c'].key}:${details['k/c'].value}`}</Text>
        </Stack>
      </Box>

      <Button
        marginTop="30px"
        border="2px solid"
        borderColor="white"
        color="white"
        display="flex"
        alignItems="center"
        justifyContent="center"
        padding="10px"
        borderRadius="5px"
        backgroundColor="inherit"
        _hover={{
          backgroundColor: 'white',
          color: 'brand.dark',
        }}
      >
        Скачать реквизиты
      </Button>
    </Box>
  );
};

export const BankCardDesktop = ():JSX.Element => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      padding="40px"
      border="2px solid"
      borderColor="brand.light"
      color="brand.white"
      borderRadius="20px"
      maxWidth="1000px"
      width="100%"
    >
      <Box
        display="flex"
        alignItems="flex-start"
        justifyContent="space-between"
      >
        <Box display="flex" flexDirection="column">
          <Heading fontSize="14px" fontWeight="500" lineHeight="18px" marginTop="30px" color="white" marginBottom="20px">
            Общество с ограниченной ответственностью «Микрос»
          </Heading>

          <Stack spacing="10px" direction="column">
            <Text color="white" variant="small">{`${details.inn.key}:${details.inn.value}`}</Text>
            <Text color="white" variant="small">{`${details.kpp.key}:${details.kpp.value}`}</Text>
            <Text color="white" variant="small">{`${details.orgn.key}:${details.orgn.value}`}</Text>
          </Stack>
        </Box>

        <MicrosLogo dark={false} />
      </Box>
      <Stack spacing="10px" direction="column">
        <Text color="white" variant="small">{details.ur.value}</Text>
        <Text color="white" variant="small">{`${details.bank.key}:${details.bank.value}`}</Text>
        <Box
          display="flex"
          width="100%"
          alignItems="flex-end"
          justifyContent="space-between"
        >
          <Box>
            <Stack spacing="10px" direction="column">
              <Text color="white" variant="small">{`${details['p/c'].key}:${details['p/c'].value}`}</Text>
              <Text color="white" variant="small">{`${details.bik.key}:${details.bik.value}`}</Text>
              <Text color="white" variant="small">{`${details['k/c'].key}:${details['k/c'].value}`}</Text>
            </Stack>
          </Box>
          <Button
            marginTop="30px"
            border="2px solid"
            borderColor="white"
            color="white"
            display="flex"
            alignItems="center"
            justifyContent="center"
            padding="10px"
            borderRadius="5px"
            backgroundColor="inherit"
            _hover={{
              backgroundColor: 'white',
              color: 'brand.dark',
            }}
          >
            Скачать реквизиты
          </Button>
        </Box>
      </Stack>
    </Box>
  );
};
