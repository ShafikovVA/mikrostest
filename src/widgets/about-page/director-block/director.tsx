import Image from 'next/image';
import {
  Box, Text, Heading, Stack, Show,
} from '@chakra-ui/react';

import director from '@/public/static/director-photo.png';

import { directorText } from './const/text';

interface DirectorTextProps {
  text: string[];
}

const DirectorText = (props: DirectorTextProps): JSX.Element => {
  const { text } = props;

  return (
    <Box display="flex" flexDirection="column" width="100%" maxWidth="516px">
      <Heading
        variant={{ sm: 'small', md: 'medium' }}
        borderBottom="2px solid"
        borderColor="brand.light"
        width="max-content"
        color="white"
        marginBottom={{ sm: '16px', md: '32px' }}
      >Директор
      </Heading>
      <Stack direction="column" spacing={{ sm: '0px', md: '32px' }}>
        {text.map((paragraph) => (
          <Text key={paragraph} variant={{ sm: 'small', md: 'paragraph' }} color="white">
            {paragraph}
          </Text>
        ))}
      </Stack>
    </Box>
  );
};

export const DirectorBlock = (): JSX.Element => {
  return (
    <Box
      display="flex"
      flexDirection={{ sm: 'column', md: 'row' }}
      width="100%"
      paddingX="24px"
      paddingTop={{ sm: '170px', md: '150px' }}
      position="relative"
      justifyContent="center"
      backgroundImage="url('/static/mobile.png')"
      backgroundSize="cover"
      alignItems="flex-start"
      paddingBottom="40px"
    >
      <Box display="flex">
        <DirectorText text={directorText.desktop} />
      </Box>

      <Box display="flex" marginLeft={{ sm: 'auto', md: '100px' }} width={{ sm: '220px', md: 'auto' }} height={{ sm: '220px', md: 'auto' }} position="relative" marginBottom={{ sm: '90px', md: '0px' }}>

        <Box zIndex={2}>
          <Image src={director} alt="director-photo" />
        </Box>

        <Box display="flex" position="absolute" bottom="-28px" left="-88px" borderRadius="50%" backgroundColor="#738595" width={{ sm: '135px', md: '200px' }} height={{ sm: '135px', md: '200px' }} alignItems="center" justifyContent="center" zIndex={1}>
          <Stack direction="column" spacing="0px">
            <Text color="white" fontSize={{ sm: '14px', md: '20px' }} fontWeight={600} lineHeight={{ sm: '18px', md: '24px' }}>Иконников</Text>
            <Text color="white" fontSize={{ sm: '14px', md: '20px' }} fontWeight={600} lineHeight={{ sm: '18px', md: '24px' }}>Евгений</Text>
            <Text color="white" fontSize={{ sm: '14px', md: '20px' }} fontWeight={600} lineHeight={{ sm: '18px', md: '24px' }}>Вячеславович</Text>
            <Text color="white" fontSize={{ sm: '10px', md: '14px' }} fontWeight={600} lineHeight={{ sm: '12px', md: '18px' }} alignSelf="flex-end" marginTop="4px">Директор</Text>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};
