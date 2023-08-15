import * as React from 'react';
import { ExtendedNextPage } from '@/shared/types/extended-next-page';
import { MainLayout } from '@/widgets/main-layout';
import { DirectorBlock } from '@/widgets/about-page/director-block';
import { ReviewBlock } from '@/widgets/about-page/review-block';
import { BankBlock } from '@/widgets/about-page/bank-block';
import { Partners } from '@/widgets/main-page/partners';

const Home: ExtendedNextPage = () => {
  return (
    <>
      <DirectorBlock />
      <ReviewBlock />
      <BankBlock />
      <Partners />
    </>
  );
};

Home.Layout = MainLayout;
export default Home;
