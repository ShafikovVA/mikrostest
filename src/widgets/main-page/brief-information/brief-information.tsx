import Image from 'next/image';
import {
  Box,
  Heading,
  Text,
  Stack,
  Show,
} from '@chakra-ui/react';
import * as React from 'react';
import briefPhoto from '@/public/static/brief-photo.png';
import { CustomAccordion } from '@/features/accordion-main-page';

import { mobileText, desktopTexts, accordionText } from './consts/brief-texts';

const BriefInformationDesktop = (): JSX.Element => {
  return (
    <Box
      display="flex"
      width="100%"
      paddingTop="96px"
      backgroundImage="url('/static/mobile.png')"
      backgroundSize="cover"
      justifyContent="center"
      paddingBottom="108px"
    >
      <Box display="flex" maxWidth="1360px" width="100%" alignItems="flex-start">
        <Box maxHeight="545px" maxWidth="578px" width="100%" height="100%">
          <Image src={briefPhoto} alt="factory" />
        </Box>

        <Box
          display="flex"
          flexDirection="column"
          marginLeft="112px"
          color="#FFFFFF"
          maxWidth="562px"
        >
          <Heading fontSize="34px" fontWeight="600" lineHeight="42px" borderBottom="2px solid" width="max-content" borderColor="#6981CA">Наши преимущества</Heading>
          <Box marginTop="16px">
            <CustomAccordion data={accordionText} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

const BriefInformationMobile = (): JSX.Element => {
  return (
    <Box
      display="flex"
      width="100%"
      paddingTop="42px"
      paddingBottom="100px"
      backgroundImage="url('/static/mobile.png')"
      flexDirection="column"
      paddingX="24px"
      backgroundSize="cover"
    >
      <Heading
        fontSize="24px"
        fontWeight={600}
        color="#FFFFFF"
        borderBottom="2px solid"
        width="max-content"
        borderColor="#6981CA"
        lineHeight="30px"
      >
        Наши преимущества
      </Heading>

      <Box display="flex" width="100%" alignItems="center" marginTop="8px" maxWidth="290px">
        <CustomAccordion data={accordionText} />
      </Box>
      <Box display="flex">
        <Image src={briefPhoto} alt="factory" />
      </Box>
    </Box>
  );
};

export const BriefInformation = (): JSX.Element => {
  return (
    <>
      <Show below="md">
        <BriefInformationMobile />
      </Show>
      <Show above="md">
        <BriefInformationDesktop />
      </Show>
    </>
  );
};
