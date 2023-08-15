import styled from '@emotion/styled';
import { ListItem } from '@chakra-ui/react';

export const NavigationLink = styled(ListItem)<{ active?: boolean }>((props) => ({
  fontWeight: props.active ? 500 : 400,
  textDecoration: props.active ? 'underline' : 'none',
}));
