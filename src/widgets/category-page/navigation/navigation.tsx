import * as React from 'react';

import { Box, Heading, Show } from '@chakra-ui/react';

import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import { CustomAccordion } from '@/features/accordion-category-navigation';

import { MobileNavigation } from './mobile-navigation';
import { getCategories } from '@/shared/libs/api/get-categories';
import { Categories, Category } from '@/entities/category';

export const Navigation = (): JSX.Element => {
  const router = useRouter();
  const { category } = router.query;
  const categoryLink = category as string;

  const [categories, setCategories] = React.useState<Category[]>([]);

  React.useEffect(() => {
    fetch('https://api.mikros74.ru/api/categories')
      .then((data) => data.json() as Promise<Categories>)
      .then((data) => setCategories(data.categories))
      .catch((error) => console.log(error));
  }, []);

  const opened = categories?.findIndex((link) => link.slug === categoryLink);

  return (
    <Box display="flex" width="300px" flexDirection="column">
      <Box display="flex" alignItems="center">
        <Show below="md">
          <MobileNavigation openedItems={[opened ?? 0]} data={categories} />
        </Show>
      </Box>
      <Show above="md">
        <CustomAccordion opened={[opened ?? 0]} data={categories} />
      </Show>
    </Box>
  );
};
