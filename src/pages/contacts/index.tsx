import { ExtendedNextPage } from '@/shared/types/extended-next-page';
import { MainLayout } from '@/widgets/main-layout';

import { Contacts } from '@/widgets/contacts-page';

const Home: ExtendedNextPage = () => {
  return (
    <Contacts />
  );
};

Home.Layout = MainLayout;
export default Home;
