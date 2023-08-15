import {
  Box,
} from '@chakra-ui/react';
import {
  useQuery,
  useQueryClient,
} from 'react-query';
import mob from '@/public/static/catalog-variant.png';

import { CatalogPageItem } from './catalog-page-item';
import { catalogData } from './catalog-block-data';
import { Categories, Category } from '@/entities/category';
import { getCategories } from '@/shared/libs/api/get-categories';

export const CatalogPage = (): JSX.Element => {
  const query = useQuery(['get categories'], getCategories);

  const categories = query.data;
  console.log('query', categories);
  return (
    <Box display="flex" flexDirection="column" paddingTop={{ sm: '120px', md: '0px' }}>
      {categories && categories.categories.map((category, index) => (
        <CatalogPageItem
          backgroundImg={`https://api.mikros74.ru/${category.image}`}
          title={category.title}
          description={category.description}
          isTextPlacementLeft={index % 2 !== 1}
          key={category.title}
          link={`/catalog/${category.slug}`}
          backgroundImgMobile={`https://api.mikros74.ru/${category.mobile_image}`}
        />
      ))}
    </Box>
  );
};
