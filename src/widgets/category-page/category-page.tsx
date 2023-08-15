import { Box, SimpleGrid } from '@chakra-ui/react';

import { Navigation } from './navigation';

export interface BrandsTableProps {
  data: string;
}

export const BrandsTable = (props: BrandsTableProps): JSX.Element => {
  const { data } = props;
  return (
    <Box
      display="flex"
      flexDirection={{ sm: 'column', md: 'row' }}
    >
      <Navigation />

      <SimpleGrid minChildWidth={{ sm: '120px', md: '300px' }} spacing={{ sm: '20px', md: '30px' }}>
        {data}
      </SimpleGrid>
    </Box>
  );
};
