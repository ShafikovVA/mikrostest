import Image from 'next/image';
import { Box } from '@chakra-ui/react';
import { RequestCard } from '@/features/request-card';
import phone from '@/public/static/phone.png';

export const RequestBlock = ():JSX.Element => {
  return (
    <Box
      display="flex"
      width="100%"
      paddingTop="48px"
      backgroundImage="url('/static/mobile.png')"
      justifyContent="center"
      backgroundSize="cover"
      id="request"
    >
      <Box
        display="flex"
        flexDirection={{ sm: 'column-reverse', md: 'row' }}
        maxWidth="1390px"
        width="100%"
        position="relative"
        paddingX="16px"
        left={{ sm: 0, md: '-23px' }}
      >
        <Box display="flex" marginTop="auto" width="100%">
          <Image src={phone} alt="phone" />
        </Box>

        <Box
          marginLeft={{ sm: 'auto', md: '104px' }}
          marginRight={{ sm: 'auto', md: '0px' }}
          marginBottom={{ sm: '0px', md: '26px' }}
        >
          <RequestCard />
        </Box>
      </Box>
    </Box>
  );
};
