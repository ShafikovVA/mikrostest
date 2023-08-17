import { SimpleGrid } from '@chakra-ui/react';
import { ReviewCard } from '@/entities/review-card';
import { reviews } from './const/reviews';

export const ReviewGrid = () => {
  return (
    <SimpleGrid spacing={{ sm: '18px', md: '24px' }} marginTop={{ sm: '60px', md: '90px' }} minChildWidth="300px" justifyItems="center">
      {reviews.map((companyReview) => (
        <ReviewCard key={companyReview.review} review={companyReview.review} company={companyReview.company} icon={companyReview.icon} letter={companyReview.letter} />
      ))}
    </SimpleGrid>
  );
};
