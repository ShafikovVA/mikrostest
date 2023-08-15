import * as React from 'react';
import { Box } from '@chakra-ui/react';

import { Header } from './header';
import { Footer } from './footer';
import { RequestBlock } from '../main-page/request-block';

export interface MainLayoutProps {
  children?: React.ReactNode;
}

export const MainLayout = (props: MainLayoutProps):JSX.Element => {
  const {
    children,
  } = props;
  return (
    <Box
      display="flex"
      flexDirection="column"
      width="100%"
      minHeight="100vh"
      position="relative"
    >
      <Header />
      {children}
      <RequestBlock />
      <Box display="flex" marginTop="auto">
        <Footer />
      </Box>
    </Box>
  );
};
