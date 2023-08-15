import {
  Button, Box, Text, Heading,
} from '@chakra-ui/react';
import Link from 'next/link';

interface SlideInfoProps {
  title?: string;
  description: string;
  href: string;
  buttonText: string;
  isLeft?: boolean;
}

export const SlideInfo = (props: SlideInfoProps): JSX.Element => {
  const {
    title,
    description,
    href,
    buttonText,
    isLeft,
  } = props;

  const isFirstSlide = title === 'Микрос';
  return (
    <Box
      display="flex"
      width="100%"
      justifyContent="center"
      paddingX="16px"
      position="absolute"
      color="white"
      height="100%"
      top={0}
      left={0}
      alignItems={{ sm: 'center', md: isFirstSlide ? 'flex-start' : 'center' }}
      marginTop={isFirstSlide ? '60px' : '0px'}
    >
      <Box display="flex" width="100%" maxWidth="1128px" flexDirection="column" alignItems={{ sm: 'center', md: isLeft ? 'flex-start' : 'flex-end' }}>
        {title && (
        <Heading
          marginBottom="30px"
          fontSize={{ sm: isFirstSlide ? '66px' : '28px', md: isFirstSlide ? '120px' : '60px', lg: isFirstSlide ? '250px' : '60px' }}
          lineHeight={{ sm: '34px', md: isFirstSlide ? 1 : '74px' }}
          fontWeight={600}
          textAlign={{ sm: 'center', md: isLeft ? 'start' : 'end' }}
          textIndent={{ md: isFirstSlide ? '-12px' : '0px', lg: isFirstSlide ? '-22px' : '0px' }}
          fontFamily={isFirstSlide ? 'science-gothic' : 'inherit'}
        >
          {title}
        </Heading>
        )}

        <Text maxWidth="700px" textAlign={{ sm: 'center', md: isLeft ? 'start' : 'end' }} fontWeight={500} fontSize={{ sm: '12px', md: '16px' }} lineHeight={{ sm: '14px', md: '20px' }}>{description}</Text>

        <Button
          variant="unstyled"
          marginTop="20px"
          border="2px solid"
          borderColor="white"
          color="white"
          display="flex"
          alignItems="center"
          justifyContent="center"
          padding={{ sm: '10px', md: '16px' }}
          borderRadius="2px"
          backgroundColor="inherit"
          _hover={{
            backgroundColor: 'white',
            color: 'brand.dark',
          }}
          as={Link}
          href={href}
          fontSize={{ sm: '16', md: '34px' }}
          lineHeight={{ sm: '20px', md: '42px' }}
          height="max-content"
        >
          {buttonText}
        </Button>
      </Box>
    </Box>
  );
};
