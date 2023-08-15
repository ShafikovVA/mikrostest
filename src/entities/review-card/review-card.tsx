import Image, { StaticImageData } from 'next/image';
import {
  Box, Text, Heading, Divider,
} from '@chakra-ui/react';

export interface ReviewCardProps {
  company: string,
  icon: StaticImageData;
  review: string;
}

export const ReviewCard = (props: ReviewCardProps): JSX.Element => {
  const { company, icon, review } = props;
  return (
    <Box
      display="flex"
      flexDirection="column"
      border="2px solid"
      borderColor="brand.dark"
      paddingX="20px"
      paddingTop={{ sm: '20px', md: '10px' }}
      paddingBottom={{ sm: '20', md: '28px' }}
      borderRadius="20px"
      width="100%"
      maxWidth="440px"
    >
      <Box
        display="flex"
        width="100%"
        alignItems="center"
      >
        <Box minWidth="70px">
          <Image src={icon} alt="" />
        </Box>
        <Heading fontSize={{ sm: '14px', md: '20px' }} lineHeight={{ sm: '18px', md: '24px' }} marginLeft="12px" whiteSpace={{ sm: 'normal', md: 'nowrap' }}>{company}</Heading>
      </Box>
      <Divider borderWidth="2px" borderColor="black" opacity="40%" borderRadius="2px" marginY="10px" />

      <Text variant={{ sm: 'caption', md: 'medium' }}>{review}</Text>
    </Box>
  );
};
