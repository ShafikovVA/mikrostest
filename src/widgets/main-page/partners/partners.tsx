import Image from 'next/image';
import {
  Box, Heading, Stack, Accordion, AccordionButton, AccordionItem, AccordionPanel, AccordionIcon, SimpleGrid, Divider,
} from '@chakra-ui/react';
import mechel from '@/public/static/mechel.png';
import chzck from '@/public/static/chzck.png';
import aptek from '@/public/static/aptek.png';
import uvz from '@/public/static/uvz.png';
import cert1 from '@/public/static/cert-1.png';
import cert2 from '@/public/static/cert-2.png';
import cert3 from '@/public/static/cert-3.png';

export const Partners = (): JSX.Element => {
  return (
    <Box display="flex" width="100%" paddingTop={{ sm: '44px', md: '28px' }} justifyContent="center" paddingBottom="70px" paddingX="24px">
      <Box display="flex" flexDirection="column" width="100%" alignItems="center">
        <Box maxWidth="1360px" width="100%">
          <Heading variant={{ sm: 'small', md: 'medium' }} textTransform="uppercase" borderBottom="2px solid" borderColor="#6981CA" color="#6981CA" width="max-content">наши партнеры</Heading>
        </Box>
        <Box
          display="flex"
          position="relative"
          width="100%"
          left={{ sm: '0px', md: '57px' }}
          maxWidth="1360px"
          flexDirection="column"
        >
          <Stack spacing={{ sm: '30px', md: '70px' }} alignItems="center" direction={{ sm: 'column', md: 'row' }} marginTop="70px">
            <Stack alignItems="center" spacing={{ sm: '30px', md: '70px' }} direction="row">
              <Box width="100%" height="100%" maxWidth="300px" maxHeight="102px">
                <Image src={chzck} alt="ЧЗСК" />
              </Box>

              <Box width="100%" height="100%" maxWidth="300px" maxHeight="92px">
                <Image src={mechel} alt="МЕЧЕЛ" />
              </Box>
            </Stack>

            <Stack alignItems="center" spacing={{ sm: '30px', md: '70px' }} direction="row">
              <Box width="100%" height="100%" maxWidth="300px" maxHeight="116px">
                <Image src={aptek} alt="АПТЭК" />
              </Box>

              <Box width="100%" height="100%" maxWidth="240px" maxHeight="140px">
                <Image src={uvz} alt="УВЗ" />
              </Box>
            </Stack>

          </Stack>
          <Divider borderWidth="2px" borderColor="brand.light" marginTop={{ sm: '25px', md: '80px' }} marginBottom={{ sm: '64px', md: '44px' }} maxWidth="1280px" />
        </Box>

        <Box maxWidth="1360px" width="100%">
          <Accordion allowMultiple maxWidth={{ sm: '290px', md: '100%' }}>
            <AccordionItem border="none" mb="16px" mt={{ sm: '20px', md: '8px' }}>
              <AccordionButton width="max-content" _hover={{ bg: 'none' }} color="white" paddingX="0" paddingY={{ sm: '0px', md: '4px' }}>
                <Heading
                  variant={{ sm: 'small', md: 'medium' }}
                  borderBottom="2px solid"
                  borderColor="brand.light"
                  color="brand.light"
                  width="max-content"
                >
                  Наши Сертификаты
                </Heading>
                <AccordionIcon color="brand.light" fontSize={{ sm: '30px', md: '45px' }} marginLeft="20px" />
              </AccordionButton>

              <AccordionPanel mt={{ sm: '20px', md: '40px' }} padding="0" width="100%">
                <SimpleGrid spacing={{ sm: '16px', md: '20px' }} minChildWidth={{ sm: '120px', md: '300px' }} width="100%">
                  <Image src={cert1} alt="certificate" />
                  <Image src={cert2} alt="certificate" />
                  <Image src={cert3} alt="certificate" />
                </SimpleGrid>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Box>
      </Box>
    </Box>
  );
};
