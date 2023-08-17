import NextLink from 'next/link';
import {
  Text, Link, Stack,
} from '@chakra-ui/react';

export const Navigation = (): JSX.Element => {
  return (
    <Stack direction="column" spacing="10px">
      <Text fontSize="18px" lineHeight="22px" fontWeight={600}>Навигация</Text>

      <Stack direction="column" spacing="5px">
        <Link
          as={NextLink}
          href="/about"
          fontSize="12px"
          lineHeight="16px"
          textDecoration="none"
          color="#00000099"
          opacity="60%"
        >
          О компании
        </Link>

        <Link
          as={NextLink}
          href="/catalog"
          fontSize="12px"
          lineHeight="16px"
          textDecoration="none"
          color="#00000099"
          opacity="60%"
        >
          Каталог
        </Link>
        <Link
          as={NextLink}
          href="/contacts"
          fontSize="12px"
          lineHeight="16px"
          textDecoration="none"
          color="#00000099"
          opacity="60%"
        >
          Контакты
        </Link>

      </Stack>
    </Stack>
  );
};
