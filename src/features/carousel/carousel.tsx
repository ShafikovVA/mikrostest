import * as React from 'react';
import Image from 'next/image';
import useEmblaCarousel, { EmblaOptionsType } from 'embla-carousel-react';
import { Box } from '@chakra-ui/react';
import { DotButton, useDotButton } from './carousel-button-dot';
import { slidesInfo } from './image-by-index';
import { SlideInfo } from './slides';
import './emble.css';
import { NextButton, PrevButton, usePrevNextButtons } from './carousel-button-arrow';

type PropType = {
  slides: number[];
  options?: EmblaOptionsType;
};

const link = './drill.png';

export const Carousel = (props: PropType) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi);

  const {
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((index) => (
            <div className="embla__slide" key={index}>
              <Image
                className="embla__slide__img"
                src={slidesInfo[index].path}
                alt="Your alt text"
              />
              <SlideInfo
                title={slidesInfo[index].title}
                description={slidesInfo[index].description}
                href={slidesInfo[index].href}
                buttonText={slidesInfo[index].buttonText}
                isLeft={index !== 1}
              />
            </div>
          ))}
        </div>
      </div>

      <Box position="absolute" top="50%" width="100%" display="flex" justifyContent="center" paddingX="24px" height="max-content">
        <Box display="flex" justifyContent="space-between" maxWidth="1700px" width="100%">
          <PrevButton onClick={onPrevButtonClick} />
          <NextButton onClick={onNextButtonClick} />
        </Box>
      </Box>

      <div className="embla__dots_desktop">
        {scrollSnaps.map((_, index) => (
          <DotButton
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            onClick={() => onDotButtonClick(index)}
            className={'embla__dot_desktop'.concat(
              index === selectedIndex ? ' embla__dot_desktop--selected' : '',
            )}
          />
        ))}
      </div>
    </div>
  );
};

export const CarouselMobile = (props: PropType) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi);

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((index) => (
            <div className="embla__slide" key={index}>
              <Image
                className="embla__slide__img"
                src={slidesInfo[index].mobilePath}
                alt="Your alt text"
              />
              <SlideInfo
                title={slidesInfo[index].mobileTitle}
                description={slidesInfo[index].description}
                href={slidesInfo[index].href}
                buttonText={slidesInfo[index].buttonText}
                isLeft={index !== 1}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="embla__dots">
        {scrollSnaps.map((_, index) => (
          <DotButton
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            onClick={() => onDotButtonClick(index)}
            className={'embla__dot'.concat(
              index === selectedIndex ? ' embla__dot--selected' : '',
            )}
          />
        ))}
      </div>
    </div>
  );
};
