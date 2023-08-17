import {
  Box, Heading, Stack, SimpleGrid,
} from '@chakra-ui/react';
import { ReviewCard } from '@/entities/review-card';
import { reviews } from './const/reviews';
import { ReviewGrid } from './review-grid';

export const ReviewBlock = (): JSX.Element => {
  return (
    <Box
      display="flex"
      width="100%"
      paddingX="16px"
      justifyContent="center"
      paddingTop={{ sm: '52px', md: '16px' }}
      paddingBottom={{ sm: '20px', md: '72px' }}
    >
      <Box
        display="flex"
        flexDirection="column"
        width="100%"
        maxWidth="1360px"
      >
        <Heading color="brand.light" variant={{ sm: 'small', md: 'medium' }} borderBottom="2px solid" borderColor="brand.light" width="max-content">Отзывы</Heading>

        <ReviewGrid />
      </Box>
    </Box>
  );
};
