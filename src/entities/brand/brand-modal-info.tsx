import Image, { StaticImageData } from 'next/image';
import {
  Box,
  Tab,
  Tabs,
  TabList,
  TabPanel,
  TabPanels,
  Text,
  ListItem,
  UnorderedList,
  Heading,
  Show,
  Button,
  Stack,
} from '@chakra-ui/react';

interface Tool {
  name: string;
}

export interface BrandModalProps {
  description: string;
  tools: string[] | null;
  brandTitle: string;
  brandImg: string | StaticImageData;
  certificate: string | null;
  catalog: string;
  onClose: () => void;
}

export const BrandModal = (props: BrandModalProps): JSX.Element => {
  const {
    description, tools, brandImg, brandTitle, certificate, catalog, onClose,
  } = props;

  return (
    <Box borderRadius="10px" overflow="hidden" display="flex" flexDirection="column" backgroundColor="white" width="100%" maxWidth="640px" paddingBottom="20px">
      <Tabs variant="unstyled" isFitted marginBottom={{ sm: '20px', md: '40px' }}>
        <TabList>
          <Tab
            display="flex"
            width="50%"
            justifyContent="center"
            alignItems="center"
            fontSize={{ sm: '12px', md: '18px' }}
            fontWeight={600}
            lineHeight={{ sm: '14px', md: '22px' }}
            color="black"
            _selected={{
              color: 'white',
              backgroundColor: 'brand.dark',
            }}
          >
            Описание
          </Tab>

          <Tab
            display="flex"
            width="50%"
            justifyContent="center"
            alignItems="center"
            fontSize={{ sm: '12px', md: '18px' }}
            fontWeight={600}
            lineHeight={{ sm: '14px', md: '22px' }}
            color="black"
            _selected={{
              color: 'white',
              backgroundColor: 'brand.dark',
            }}
          >
            Список решений
          </Tab>
        </TabList>

        <TabPanels paddingX={{ sm: '14px', md: '20px' }} display="flex">
          <TabPanel display="flex" flexDirection="column" paddingTop={{ sm: '20px', md: '32px' }}>
            <Box display="flex" marginX={{ sm: 'auto', md: '0px' }} marginBottom={{ sm: '20px', md: '36px' }}>
              <Image src={brandImg} alt="brand image" width={240} height={50} />

              <Show above="md">
                <Heading
                  fontSize="26px"
                  lineHeight="32px"
                  fontWeight={700}
                  marginLeft="18px"
                >
                  {brandTitle}
                </Heading>
              </Show>
            </Box>
            <Text
              fontSize={{ sm: '12px', md: '18px' }}
              lineHeight={{ sm: '14px', md: '20px' }}
            >{description}
            </Text>
          </TabPanel>

          <TabPanel display="flex" flexDirection="column" paddingTop={{ sm: '20px', md: '32px' }}>
            <Box display="flex" marginX={{ sm: 'auto', md: '0px' }} marginBottom={{ sm: '20px', md: '36px' }}>
              <Image src={brandImg} alt="brand image" width={240} height={50} />

              <Show above="md">
                <Heading
                  fontSize="26px"
                  lineHeight="32px"
                  fontWeight={700}
                  marginLeft="18px"
                >
                  {brandTitle}
                </Heading>
              </Show>
            </Box>

            <Heading
              fontSize={{ sm: '14px', md: '26px' }}
              lineHeight={{ sm: '18px', md: '32px' }}
              fontWeight={700}
              marginBottom="12px"
            >
              Список решений
            </Heading>

            <UnorderedList spacing="12px">
              {tools && tools.map((tool) => (
                <ListItem key={tool} fontSize={{ sm: '12px', md: '16px' }} lineHeight={{ sm: '14px', md: '20px' }}>{tool}</ListItem>
              ))}
            </UnorderedList>
          </TabPanel>
        </TabPanels>
      </Tabs>

      <Stack
        display="flex"
        flexDirection={{ sm: 'column', md: 'row' }}
        width="100%"
        paddingX={{ sm: '14px', md: '20px' }}
        spacing="12px"
      >
        <Button
          whiteSpace="break-spaces"
          border="2px solid"
          backgroundColor="transparent"
          borderColor="brand.dark"
          display="flex"
          alignItems="center"
          justifyContent="center"
          height="48px"
          paddingX="15px"
          paddingY="8px"
          maxWidth={{ sm: '100%', md: '200px' }}
          borderRadius="2px"
          fontSize="18px"
          lineHeight="22px"
          color="brand.dark"
          textAlign="center"
          _hover={{
            backgroundColor: 'brand.dark',
            borderColor: 'brand.dark',
            color: 'white',
          }}
          isDisabled={!certificate}
          _disabled={{
            opacity: 0.4,
            backgroundColor: 'transparent',
            borderColor: 'brand.dark',
            color: 'brand.dark',
            cursor: 'not-allowed',
          }}
          cursor="pointer"
          as="a"
          href={`https://api.mikros74.ru/${certificate}`}
          download="certificate"
          target="_blank"
        >
          Скачать сертификат
        </Button>
        <Button
          border="2px solid"
          backgroundColor="transparent"
          borderColor="brand.dark"
          display="flex"
          alignItems="center"
          justifyContent="center"
          height="48px"
          paddingX="15px"
          paddingY="8px"
          borderRadius="2px"
          fontSize="18px"
          lineHeight="22px"
          color="brand.dark"
          _hover={{
            backgroundColor: 'brand.dark',
            borderColor: 'brand.dark',
            color: 'white',
          }}
          as="a"
          href="#request"
          onClick={onClose}
        >
          Оставить заявку
        </Button>
        <Button
          color="brand.dark"
          border="2px solid"
          backgroundColor="white"
          borderColor="brand.dark"
          display="flex"
          alignItems="center"
          justifyContent="center"
          height="48px"
          paddingX="15px"
          paddingY="8px"
          borderRadius="2px"
          fontSize="18px"
          lineHeight="22px"
          _hover={{
            backgroundColor: 'brand.dark',
            borderColor: 'brand.dark',
            color: 'white',
          }}
          isDisabled={!catalog}
          as="a"
          href={`https://api.mikros74.ru/storage/${catalog}`}
          cursor="pointer"
          download
          target="_blank"
          _disabled={{
            opacity: 0.4,
            backgroundColor: 'transparent',
            borderColor: 'brand.dark',
            color: 'brand.dark',
            cursor: 'not-allowed',
          }}
        >
          Скачать каталог
        </Button>
      </Stack>
    </Box>
  );
};
