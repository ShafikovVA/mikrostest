import * as React from 'react';
import {
  Box,
} from '@chakra-ui/react';
import {
  useQuery,
} from 'react-query';

import { CatalogPageItem } from './catalog-page-item';
import { catalogData } from './catalog-block-data';
import { Categories, Category } from '@/entities/category';
import { getCategories } from '@/shared/libs/api/get-categories';

export const CatalogPage = (): JSX.Element => {
  const [categories, setCategories] = React.useState<Category[]>();
  React.useEffect(() => {
    fetch('https://api.mikros74.ru/api/categories')
      .then((data) => data.json() as Promise<Categories>)
      .then((data) => setCategories(data.categories))
      .catch((error) => console.log(error));
  }, []);
  const query = useQuery(['get categories'], getCategories);

  // const categories = query.data;
  return (
    <Box display="flex" flexDirection="column" paddingTop={{ sm: '120px', md: '0px' }}>
      {categories && categories.map((category, index) => (
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
