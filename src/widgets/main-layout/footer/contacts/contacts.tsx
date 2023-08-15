import {
  Box, Text, Stack,
} from '@chakra-ui/react';

import MailIcon from '@/shared/components/icons/mail-icon';
import PhoneIcon from '@/shared/components/icons/device-phone-icon';

export const Contacts = (): JSX.Element => {
  return (
    <Stack direction="column" spacing="10px">
      <Text fontSize="18px" fontWeight={600} lineHeight="22px">Контакты</Text>

      <Stack direction="column" spacing="5px">
        <Box display="flex" alignItems="center">
          <PhoneIcon fontSize="20px" />
          <Text fontSize="12px" lineHeight="16px" marginLeft="4px" color="№000000" opacity="60%">8-995-475-02-10</Text>
        </Box>

        <Box display="flex" alignItems="center">
          <PhoneIcon fontSize="20px" />
          <Text fontSize="12px" lineHeight="16px" marginLeft="4px" color="№000000" opacity="60%">8-996-236-82-30</Text>
        </Box>

        <Box display="flex" alignItems="center">
          <MailIcon fontSize="20px" />
          <Text fontSize="12px" lineHeight="16px" marginLeft="4px" color="№000000" opacity="60%">Info@mikros74.ru</Text>
        </Box>
      </Stack>
    </Stack>
  );
};
