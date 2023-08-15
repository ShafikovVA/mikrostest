import * as React from 'react';
import { Box, useBreakpointValue, Show } from '@chakra-ui/react';

import { EmblaOptionsType } from 'embla-carousel-react';
import { ExtendedNextPage } from '@/shared/types/extended-next-page';
import { MainLayout } from '@/widgets/main-layout';

import { Partners } from '@/widgets/main-page/partners';
import { BriefInformation } from '@/widgets/main-page/brief-information';
import { RequestBlock } from '@/widgets/main-page/request-block';
import { Carousel, CarouselMobile } from '@/features/carousel';
import { CustomAccordion } from '@/features/accordion-main-page';
import { accordionText } from '@/widgets/main-page/brief-information/consts/brief-texts';

const OPTIONS: EmblaOptionsType = { loop: true };
const SLIDE_COUNT = 3;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

const Home: ExtendedNextPage = () => {
  return (
    <>
      <Box>
        <Show above="md">
          <Carousel slides={SLIDES} options={OPTIONS} />
        </Show>

        <Show below="md">
          <CarouselMobile slides={SLIDES} options={OPTIONS} />
        </Show>
        <Box position="relative">
          <BriefInformation />
        </Box>
      </Box>
      <Partners />
    </>
  );
};

Home.Layout = MainLayout;
export default Home;
