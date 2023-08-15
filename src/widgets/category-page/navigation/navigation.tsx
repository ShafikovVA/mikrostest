import * as React from 'react';

import { Box, Heading, Show } from '@chakra-ui/react';

import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import { CustomAccordion } from '@/features/accordion-category-navigation';

import { MobileNavigation } from './mobile-navigation';
import { getCategories } from '@/shared/libs/api/get-categories';

export const Navigation = (): JSX.Element => {
  const router = useRouter();

  const { category } = router.query;
  const categoryLink = category as string;
  const query = useQuery(['get categories'], getCategories);

  const categories = query.data?.categories ?? [];

  const opened = categories?.findIndex((link) => link.slug === categoryLink);

  return (
    <Box display="flex" width="300px" flexDirection="column">
      <Box display="flex" alignItems="center">
        <Show below="md">
          <MobileNavigation openedItems={[opened ?? 0]} data={categories} />
          <Heading fontSize={{ sm: '14', md: '26' }} lineHeight={{ sm: '16px', md: '34px' }} fontWeight={600} color="white">Навигация</Heading>
        </Show>
      </Box>
      <Show above="md">
        <CustomAccordion opened={[opened ?? 0]} data={categories} />
      </Show>
    </Box>
  );
};
