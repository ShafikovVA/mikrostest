import Image from 'next/image';
import { Box, SimpleGrid, Stack } from '@chakra-ui/react';
import mechel from '@/public/static/mechel.png';
import chzck from '@/public/static/chzck.png';
import aptek from '@/public/static/aptek.png';
import uvz from '@/public/static/uvz.png';
import cert1 from '@/public/static/cert-1.png';
import cert2 from '@/public/static/cert-2.png';
import cert3 from '@/public/static/cert-3.png';

export const PartnersGrid = () => {
  return (
    <SimpleGrid spacing={{ sm: '30px', md: '30px', lg: '70px' }} minChildWidth="120px" marginTop="70px">
      <Box height="100%" maxHeight="102px">
        <Image src={chzck} alt="ЧЗСК" />
      </Box>

      <Box height="100%" maxHeight="92px">
        <Image src={mechel} alt="МЕЧЕЛ" />
      </Box>

      <Box height="100%" maxHeight="116px">
        <Image src={aptek} alt="АПТЭК" />
      </Box>

      <Box height="100%" maxHeight="140px">
        <Image src={uvz} alt="УВЗ" />
      </Box>
    </SimpleGrid>
  );
};
