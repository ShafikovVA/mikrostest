import * as React from 'react';
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';
import { ExtendedNextPage } from '../shared/types/extended-next-page';
import { GlobalStyles } from '../app/styles/global';
import theme from '@/app/styles/theme';
import '@fontsource/montserrat/400.css';
import '@fontsource/montserrat/500.css';
import '@fontsource/montserrat/600.css';

type NewAppProps = AppProps & { Component: ExtendedNextPage };

const App = ({ Component, pageProps }: NewAppProps) => {
  const LayoutComponent = Component.Layout ?? React.Fragment;
  const [queryClient] = React.useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <ChakraProvider theme={theme}>
          <LayoutComponent>
            <GlobalStyles />
            <Component {...pageProps} />
          </LayoutComponent>
        </ChakraProvider>
      </Hydrate>
    </QueryClientProvider>
  );
};

export default App;
