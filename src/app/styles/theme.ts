import { extendTheme } from '@chakra-ui/react';

import { Text } from '@/app/styles/typography/text';
import { Heading } from '@/app/styles/typography/heading';

const theme = extendTheme({
  fonts: {
    heading: 'montserrat',
    body: 'montserrat',
  },
  colors: {
    brand: {
      dark: '#26376B',
      light: '#6981CA',
      white: '#FFFFFF',
      black: '#000000',
      grey: '#848B8A',
      greyDark: '#576265',
    },
  },
  components: {
    Text,
    Heading,
  },
  breakpoints: {
    sm: '320px',
    md: '1023px',
    lg: '1440px',
    xl: '1920px',
    '2xl': '2000px',
  },
});

export default theme;
