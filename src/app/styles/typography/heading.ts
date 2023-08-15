import { defineStyleConfig } from '@chakra-ui/react';

export const Heading = defineStyleConfig({
  variants: {
    small: {
      fontSize: '24px',
      fontWeight: 600,
      lineHeight: '30px',
    },
    medium: {
      fontSize: '34px',
      fontWeight: 600,
      lineHeight: '42px',
    },
  },
});
