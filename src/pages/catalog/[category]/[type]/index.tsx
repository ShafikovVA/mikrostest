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

const TypePage: ExtendedNextPage = () => {
  const router = useRouter();

  const { category, type } = router.query;
  const categorySlug = category as string;
  const typeSlug = type as string;

  const [allBrands, setAllBrands] = React.useState<FullBrand[]>();

  const [visibleBrands, setVisibleBrands] = React.useState<FullBrand[]>([]);

  React.useEffect(() => {
    fetch('https://api.mikros74.ru/api/brands')
      .then((data) => data.json() as Promise<ResponseOnAllBrands>)
      .then((data) => setAllBrands(data.brands))
      .catch((error) => console.log(error));
  }, []);

  React.useEffect(() => {
    const newVisibleBrands = allBrands?.filter((brand) => brand.subcategories.find((subcategory) => subcategory.slug === typeSlug)) ?? [];
    setVisibleBrands(newVisibleBrands);
  }, [typeSlug, categorySlug, allBrands]);

  return (
    <SimpleGrid minChildWidth={{ sm: '120px', md: '300px' }} spacing={{ sm: '20px', md: '30px' }} width="100%" justifyItems="center">
      {visibleBrands && visibleBrands.map((brand) => (
        <BrandWithModal data={brand} key={brand.id} />
      ))}
    </SimpleGrid>
  );
};

TypePage.Layout = CategoryLayout;
export default TypePage;
