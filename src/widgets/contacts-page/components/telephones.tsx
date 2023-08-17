import { Text, Stack } from '@chakra-ui/react';

export const Telephones = (): JSX.Element => {
  return (
    <Stack direction="column" spacing="16px">
      <Text fontSize="26px" fontWeight={600} lineHeight="32px" color="white">Телефон</Text>

      <Stack direction="column" spacing="12px">
        <Text fontSize={{ sm: '12px', md: '18px' }} lineHeight={{ sm: '16px', md: '22px' }} color="white">+7 (995) 475-02-10</Text>

        <Text fontSize={{ sm: '12px', md: '18px' }} lineHeight={{ sm: '16px', md: '22px' }} color="white">+7 (996) 236-82-30</Text>

      </Stack>
    </Stack>
  );
};
