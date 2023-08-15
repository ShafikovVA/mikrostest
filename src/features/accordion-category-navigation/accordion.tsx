import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Text,
  Heading,
  Stack,
  Box,
  UnorderedList,
} from '@chakra-ui/react';

import { ActiveLink } from '@/shared/components/active-link';
import { NavigationLink } from './styled';
import { Category } from '@/entities/category';

interface Description {
  link: string;
  title: string;
}

export interface AccordionElement {
  title: string;
  description: Description[];
}
export interface AccordionProps {
  data: Category[];
  opened?: number[];
}

export const CustomAccordion = (props: AccordionProps): JSX.Element => {
  const {
    data,
    opened,
  } = props;

  return (
    <Accordion allowMultiple border="none" width="100%" defaultIndex={opened}>
      {data.map((item) => (
        <AccordionItem key={item.title} border="none" borderBottom="2px solid" mb="20px" borderColor={{ sm: 'black', md: 'white' }} _last={{ border: 'none' }} marginTop="20px" paddingY="12px">
          <AccordionButton _hover={{ bg: 'none' }} paddingX="0" width="100%" color={{ sm: 'black', md: 'white' }}>
            <Heading
              fontSize="16px"
              lineHeight="18px"
              textAlign="left"
              marginRight="4px"
            >
              {item.title}
            </Heading>
            <AccordionIcon marginLeft="auto" />
          </AccordionButton>

          <AccordionPanel mt="12px" padding="0" border="none">
            <UnorderedList spacing="16px">
              {item.subcategories.map((listItem) => (
                <ActiveLink href={`/catalog/${item.slug}/${listItem.slug}`} key={listItem.title}>
                  <NavigationLink fontSize="14px" lineHeight="18px" color={{ sm: 'black', md: 'white' }} marginTop="16px">
                    {listItem.title}
                  </NavigationLink>
                </ActiveLink>
              ))}
            </UnorderedList>
          </AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
};
