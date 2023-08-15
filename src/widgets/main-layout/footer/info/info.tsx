import Link from 'next/link';
import { Box, Text, Stack } from '@chakra-ui/react';

import ItCustomsLogo from '@/shared/components/icons/it-customs-logo';

export const Info = (): JSX.Element => {
  return (
    <Box display="flex" flexDirection="column" justifyContent="center">
      <Text variant={{ sm: 'medium', md: 'large' }} color="brand.greyDark">© ООО “Микрос” 2023</Text>

      <Box display="flex" marginTop="16px" fontSize={{ sm: '24px', md: '27px' }}>
        <Link href="https://itcustoms.ru/">
          <ItCustomsLogo fontSize="inherit" />
        </Link>
        <Box display="flex" flexDirection="column" marginLeft="4px">
          <Text fontSize="small" color="brand.black">Разработано в ITCUSTOMS</Text>
          <Text variant="caption" color="brand.grey">Информация о сайте</Text>
        </Box>
      </Box>
    </Box>
  );
};
