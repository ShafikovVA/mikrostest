import * as React from 'react';
import { Box, Heading, Show } from '@chakra-ui/react';
import { Footer } from '@/widgets/main-layout/footer';
import { Header } from '@/widgets/main-layout/header';

import { Navigation } from '@/widgets/category-page/navigation';
import { RequestBlock } from '@/widgets/main-page/request-block';

export interface CategoryLayoutProps {
  children?: React.ReactNode;
}

export const CategoryLayout = (props: CategoryLayoutProps):JSX.Element => {
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
      <Box
        display="flex"
        paddingTop={{ sm: '130px', md: '160px' }}
        backgroundImage="url('/static/mobile.png')"
        backgroundSize="cover"
        paddingX="24px"
        justifyContent="center"
      >
        <Box
          display="flex"
          width="100%"
          maxWidth="1360px"
          flexDirection={{ sm: 'column' }}
          justifyContent="flex-start"
        >
          <Show above="md">
            <Heading fontSize={{ md: '26' }} lineHeight={{ md: '34px' }} fontWeight={600} color="white">Навигация</Heading>
          </Show>

          <Box display="flex" flexDirection={{ sm: 'column', md: 'row' }}>
            <Navigation />

            <Box paddingTop={{ sm: '20px', md: '40px' }} paddingLeft={{ sm: '0px', md: '60px' }} paddingBottom={{ sm: '20px', md: '40px' }} width="100%">
              {children}
            </Box>
          </Box>
        </Box>
      </Box>
      <RequestBlock />
      <Box display="flex" marginTop="auto">
        <Footer />
      </Box>
    </Box>
  );
};
