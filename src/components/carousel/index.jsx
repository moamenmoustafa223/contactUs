import { Children, useMemo, useRef } from 'react';
import { useCarousel } from './use-carousel';
import { CarouselStartButton } from './carousel-start-button';
import { CarouselEndButton } from './carousel-end-button';
import clsx from 'clsx';

export function Carousel({ children, className, height }) {
  const carousel = useRef(null);

  const {
    handleStartScrollClick,
    handleEndScrollClick,
    displayStartScroll,
    displayEndScroll,
  } = useCarousel(carousel);

  const itemList = useMemo(() => Children.toArray(children), [children]);

  return (
    <div className='lg:tw-px-4'>
      <div className='tw-relative'>
        <div
          ref={carousel}
          className='tw-flex tw-gap-x-5 scrollbar-hide tw-scroll-px-4 lg:tw-scroll-px-0 tw-overflow-x-auto tw-overflow-y-hidden tw-scroll-smooth tw-snap-x tw-snap-mandatory tw-touch-auto tw-z-0'
        >
          {itemList.map((item, i) => (
            <div
              key={i}
              className={clsx(
                'tw-snap-start tw-shrink-0 first:tw-ms-4 last:tw-me-4 lg:tw-first:ms-0 lg:last:tw-me-0',
                className
              )}
            >
              {item}
            </div>
          ))}
        </div>

        <div
          className='tw-hidden lg:tw-block tw-w-full tw-absolute'
          style={height ? { top: height / 2 } : { top: '50%' }}
        >
          <CarouselStartButton
            onClick={handleStartScrollClick}
            disabled={!displayStartScroll}
          />
          <CarouselEndButton
            onClick={handleEndScrollClick}
            disabled={!displayEndScroll}
          />
        </div>
      </div>
    </div>
  );
}
