import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Text,
  Heading,
  Show,
} from '@chakra-ui/react';

export interface AccordionElement {
  title: string;
  description: string;
}
export interface AccordionProps {
  data: AccordionElement[];
  onOpen?: (num: number) => void;
}

export const CustomAccordion = (props: AccordionProps): JSX.Element => {
  const {
    data,
    onOpen = () => false,
  } = props;

  return (
    <>
      <Show above="md">
        <Accordion allowMultiple>
          {data.map((item) => (
            <AccordionItem key={item.title} border="none" mb="16px" mt={{ sm: '20px', md: '0px' }}>
              <AccordionButton width="max-content" _hover={{ bg: 'none' }} color="white" paddingX="0" paddingY={{ sm: '0px', md: '4px' }}>
                <Heading
                  color="white"
                  fontSize={{ sm: '14px', md: '20px' }}
                  lineHeight={{ sm: '15px', md: '24px' }}
                  textAlign="left"
                  marginRight="4px"
                >
                  {item.title}
                </Heading>
                <AccordionIcon color="white" />
              </AccordionButton>

              <AccordionPanel mt={{ sm: '0px', md: '8px' }} padding="0">
                <Text variant={{ sm: 'caption', md: 'small' }} color="white" whiteSpace="normal">
                  {item.description}
                </Text>
              </AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </Show>

      <Show below="md">
        <Accordion allowMultiple maxWidth={{ sm: '290px', md: 'max-content' }}>
          {data.map((item, index) => (
            <AccordionItem key={item.title} border="none" mb="16px" mt={{ sm: '20px', md: '8px' }} maxWidth={{ sm: '290px', md: 'max-content' }}>
              <AccordionButton
                width="100%"
                _hover={{ bg: 'none' }}
                color="white"
                paddingX="0"
                paddingY={{ sm: '0px', md: '4px' }}
                maxWidth={{ sm: '290px', md: 'max-content' }}
                onClick={() => onOpen(index)}
              >
                <Heading
                  color="white"
                  fontSize={{ sm: '14px', md: '20px' }}
                  lineHeight={{ sm: '15px', md: '24px' }}
                  textAlign="left"
                  marginRight="4px"
                  maxWidth={{ sm: '290px', md: 'max-content' }}
                >
                  {item.title}
                </Heading>
                <AccordionIcon color="white" marginLeft="auto" />
              </AccordionButton>

              <AccordionPanel mt="8px" padding="0" width="100%">
                <Text variant={{ sm: 'caption', md: 'small' }} color="white" whiteSpace="normal" width="100%" maxWidth={{ sm: '290px', md: 'max-content' }}>
                  {item.description}
                </Text>
              </AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </Show>
    </>

  );
};
