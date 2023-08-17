import { Text, Stack } from '@chakra-ui/react';

export const Mails = (): JSX.Element => {
  return (
    <Stack direction="column" spacing="16px">
      <Text fontSize="26px" fontWeight={600} lineHeight="32px" color="white">Почта</Text>

      <Stack direction="column" spacing="12px">
        <Text fontSize={{ sm: '12px', md: '18px' }} lineHeight={{ sm: '16px', md: '22px' }} color="white">Info@mikros74.ru</Text>

      </Stack>
    </Stack>
  );
};
