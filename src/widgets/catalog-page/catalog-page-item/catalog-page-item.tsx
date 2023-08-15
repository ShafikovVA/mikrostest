import {
  Box, Text, Button, Heading, Stack, Show,
} from '@chakra-ui/react';
import Link from 'next/link';

export interface CatalogPageItemProps {
  isTextPlacementLeft: boolean,
  backgroundImg: string,
  title: string,
  description: string,
  link: string,
  backgroundImgMobile: string,
}

export const CatalogPageItem = (props: CatalogPageItemProps): JSX.Element => {
  const {
    isTextPlacementLeft,
    backgroundImg,
    title,
    description,
    link,
    backgroundImgMobile,
  } = props;
  return (
    <Box
      display="flex"
      width="100%"
      backgroundImage={{ sm: backgroundImgMobile, md: backgroundImg }}
      backgroundSize="cover"
      backgroundRepeat={{ sm: 'no-repeat', md: 'no-repeat' }}
      justifyContent="center"
      paddingY="80px"
      paddingX="24px"
      backgroundPosition="center"
    >
      <Box
        display="flex"
        width="100%"
        maxWidth="1360px"
        justifyContent={{ sm: 'center', md: isTextPlacementLeft ? 'flex-start' : 'flex-end' }}
      >
        <Stack
          direction="column"
          spacing="30px"
          alignItems={{ sm: 'center', md: isTextPlacementLeft ? 'flex-start' : 'flex-end' }}
        >
          <Heading color="white" fontSize={{ sm: '40px', md: '70px' }} fontWeight={700} lineHeight={{ sm: '48px', md: '82px' }} textAlign={{ sm: 'center', md: isTextPlacementLeft ? 'start' : 'end' }}>{title}</Heading>
          <Show below="md">
            <Text color="white" variant={{ sm: 'small', md: 'large' }} maxWidth="760px" textAlign="center">{description}</Text>
          </Show>

          <Show above="md">
            <Text color="white" variant={{ sm: 'small', md: 'large' }} maxWidth="760px" textAlign={isTextPlacementLeft ? 'start' : 'end'}>{description}</Text>
          </Show>

          <Button
            border="2px solid"
            borderColor="white"
            color="white"
            display="flex"
            alignItems="center"
            justifyContent="center"
            padding="16px"
            borderRadius="2px"
            backgroundColor="inherit"
            _hover={{
              backgroundColor: 'white',
              color: 'brand.dark',
            }}
            as={Link}
            href={link}
          >
            Подробнее
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};
