import { Box, Heading, Stack } from '@chakra-ui/react';
import { ReviewCard } from '@/entities/review-card';
import { reviews } from './const/reviews';

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

        <Stack direction={{ sm: 'column', md: 'row' }} spacing={{ sm: '18px', md: '24px' }} marginTop={{ sm: '60px', md: '90px' }} alignItems={{ sm: 'center', md: 'normal' }}>
          {reviews.map((companyReview) => (
            <ReviewCard key={companyReview.review} review={companyReview.review} company={companyReview.company} icon={companyReview.icon} />
          ))}
        </Stack>
      </Box>
    </Box>
  );
};
