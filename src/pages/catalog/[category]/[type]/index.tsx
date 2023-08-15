import * as React from 'react';
import { Box, SimpleGrid } from '@chakra-ui/react';
import { GetServerSideProps } from 'next';
import {
  DehydratedState, QueryClient, dehydrate, useQuery, useQueryClient,
} from 'react-query';
import { useRouter } from 'next/router';
import { ExtendedNextPage } from '@/shared/types/extended-next-page';
import { CategoryLayout } from '@/widgets/category-page-layout';
import { CatalogPage } from '@/widgets/catalog-page';
import { BrandModal, BrandCard, BrandWithModal } from '@/entities/brand';
import { testData } from '@/entities/brand/test-data';

import { Navigation } from '@/widgets/category-page/navigation';
import { Categories } from '@/entities/category';
import { FullBrand, ResponseOnAllBrands, ResponseOnBrandsFetch } from '@/shared/types/response';
import { Brand } from '@/entities/brand/type';
import { getAllBrands } from '@/shared/libs/api/get-all-brands';

export const getServerSideProps: GetServerSideProps<{ dehydratedState: DehydratedState }> = async (context) => {
  const { category, type } = context.query;

  const typeSlug = type as string;

  const queryClient = new QueryClient();

  await queryClient.fetchQuery(['get all brands'], getAllBrands);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

const TypePage: ExtendedNextPage = () => {
  const router = useRouter();

  const { category, type } = router.query;
  const categorySlug = category as string;
  const typeSlug = type as string;

  const query = useQuery(['get all brands'], async () => {
    const fetchedAllBrands = await fetch('https://api.mikros74.ru/api/brands');
    const fetchedAllBrandsData = await fetchedAllBrands.json() as ResponseOnAllBrands;

    return fetchedAllBrandsData.brands;
  });

  const allBrands = query.data ?? [];

  const [visibleBrands, setVisibleBrands] = React.useState<FullBrand[]>([]);

  React.useEffect(() => {
    const newVisibleBrands = allBrands.filter((brand) => brand.subcategories.find((subcategory) => subcategory.slug === typeSlug));
    setVisibleBrands(newVisibleBrands);
  }, [typeSlug, categorySlug]);

  return (
    <SimpleGrid minChildWidth={{ sm: '120px', md: '300px' }} spacing={{ sm: '20px', md: '30px' }} width="100%">
      {visibleBrands && visibleBrands.map((brand) => (
        <BrandWithModal data={brand} key={brand.id} />
      ))}
    </SimpleGrid>
  );
};

TypePage.Layout = CategoryLayout;
export default TypePage;
