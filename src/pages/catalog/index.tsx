import * as React from 'react';
import { useRouter } from 'next/router';

import { GetServerSideProps } from 'next';
import {
  DehydratedState, QueryClient, dehydrate, useQuery,
} from 'react-query';
import { ExtendedNextPage } from '@/shared/types/extended-next-page';
import { MainLayout } from '@/widgets/main-layout';
import { CatalogPage } from '@/widgets/catalog-page';
import { getCategories } from '@/shared/libs/api/get-categories';
import { Categories } from '@/entities/category';

// export const getServerSideProps: GetServerSideProps<{ dehydratedState: DehydratedState }> = async (context) => {
//   const queryClient = new QueryClient();

//   await queryClient.prefetchQuery(['get categories'], getCategories);

//   return {
//     props: {
//       dehydratedState: dehydrate(queryClient),
//     },
//   };
// };

const Catalog: ExtendedNextPage = () => {
  const query = useQuery(['get categories'], getCategories);
  return (
    <CatalogPage />
  );
};

Catalog.Layout = MainLayout;
export default Catalog;
