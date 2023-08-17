import * as React from 'react';
import {
  DehydratedState, QueryClient, dehydrate, useQuery,
} from 'react-query';
import { Box, SimpleGrid, useDisclosure } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { GetServerSideProps } from 'next';
import { ExtendedNextPage } from '@/shared/types/extended-next-page';
import { FullBrand, ResponseOnAllBrands, ResponseOnBrandsFetch } from '@/shared/types/response';
import { CategoryLayout } from '@/widgets/category-page-layout';
import { BrandModal, BrandCard, BrandWithModal } from '@/entities/brand';
import { testData } from '@/entities/brand/test-data';

import { Navigation } from '@/widgets/category-page/navigation';
import { Categories } from '@/entities/category';
import { Modal } from '@/features/modal/modal';
import { Brand } from '@/entities/brand/type';
import { getBrandsByCategory } from '@/shared/libs/api/get-brands-by-category';

// export const getServerSideProps: GetServerSideProps<{ dehydratedState: DehydratedState }> = async (context) => {
//   const { category } = context.query;

//   const categorySlug = category as string;

//   const queryClient = new QueryClient();

//   await queryClient.fetchQuery(['get brands by category'], async () => {
//     const fetchedCategories = await fetch('https://api.mikros74.ru/api/categories');

//     const categoriesData = await fetchedCategories.json() as Categories;

//     const categoryIndex = categoriesData.categories.findIndex((categoryData) => categorySlug === categoryData.slug);

//     const fetchedBrands = await fetch(`https://api.mikros74.ru/api/categories/${categoriesData.categories[categoryIndex].id}/brands`);

//     const data = await fetchedBrands.json() as ResponseOnBrandsFetch;

//     return {
//       data,
//     };
//   });

//   return {
//     props: {
//       dehydratedState: dehydrate(queryClient),
//     },
//   };
// };

const CategoryPage: ExtendedNextPage = () => {
  const router = useRouter();

  const { category } = router.query;
  const categorySlug = category as string;

  const [allBrands, setAllBrands] = React.useState<FullBrand[]>();
  const [brandsByCategory, setBrandsByCategory] = React.useState<FullBrand[]>();

  React.useEffect(() => {
    fetch('https://api.mikros74.ru/api/brands')
      .then((data) => data.json() as Promise<ResponseOnAllBrands>)
      .then((data) => setAllBrands(data.brands))
      .catch((error) => console.log(error));
  }, []);

  const brands = allBrands?.filter((brand) => brand.category.slug === categorySlug) ?? [];

  return (
    <SimpleGrid minChildWidth={{ sm: '120px', md: '300px' }} spacing={{ sm: '20px', md: '30px' }} width="100%" justifyItems="center">
      {brands && brands.map((brand) => (

        <BrandWithModal data={brand} key={brand.id} />
      ))}
    </SimpleGrid>
  );
};

CategoryPage.Layout = CategoryLayout;
export default CategoryPage;
