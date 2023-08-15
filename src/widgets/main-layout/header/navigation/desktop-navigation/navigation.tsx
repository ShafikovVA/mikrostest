import { Stack } from '@chakra-ui/react';

import { ActiveLink } from '@/shared/components/active-link';

import { links } from '../links';
import { NavigationLink } from '../styled';

export const Navigation = (): JSX.Element => {
  return (
    <Stack direction="row" spacing="60px">
      {links.map((link) => (
        <ActiveLink href={link.path} global key={link.path}>
          <NavigationLink>{link.title}</NavigationLink>
        </ActiveLink>
      ))}
    </Stack>
  );
};
