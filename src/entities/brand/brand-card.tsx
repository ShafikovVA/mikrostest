import { Box, Divider, Text } from '@chakra-ui/react';
import Image, { StaticImageData } from 'next/image';

export interface BrandCardProps {
  title: string;
  brandImg: StaticImageData | string;
  openModal?: () => void;
}

export const BrandCard = (props: BrandCardProps) => {
  const { title, brandImg, openModal } = props;

  return (
    <Box display="flex" alignItems="center" justifyContent="center" backgroundColor="white" flexDirection="column" paddingX="12px" paddingY="20px" borderRadius="2px" height={{ sm: ' 180px', md: '360px' }} cursor="pointer" onClick={openModal} maxWidth={300}>
      <Image src={brandImg} alt="brand image" width={240} height={180} />

      <Divider borderWidth="2px" borderColor="black" opacity="60%" marginTop={{ sm: '28px', md: '40px' }} marginBottom="16px" width={{ sm: '100px', md: '200px' }} />

      <Text fontSize={{ sm: '10px', md: '16px' }} lineHeight={{ sm: '12px', md: '20px' }} fontWeight={600} color="black">{title}</Text>
    </Box>
  );
};
