import styled from '@emotion/styled';

export const NavigationLink = styled.span<{ active?: boolean }>((props) => ({
  fontWeight: 600,
  fontSize: '26px',
  lineHeight: '32px',
  color: props.active ? '#6981CA' : '#26376B',
}));

export const NavigationLinkMobile = styled.span<{ active?: boolean }>((props) => ({
  fontWeight: 600,
  fontSize: '18px',
  lineHeight: '22px',
  color: props.active ? '#6981CA' : '#26376B',
}));
