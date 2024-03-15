import { detectScrollType } from './scroll-left';
import { useEffect, useState } from 'react';

export function useCarousel(carousel) {
  const isRtl = false;
  const [displayStartScroll, setDisplayStartScroll] = useState(false);
  const [displayEndScroll, setDisplayEndScroll] = useState(false);

  const moveCarouselScroll = (delta) => {
    let scrollValue = carousel.current.scrollLeft;

    scrollValue += delta * (isRtl ? -1 : 1);
    // Fix for Edge
    scrollValue *= isRtl && detectScrollType() === 'reverse' ? -1 : 1;

    carousel.current.scrollLeft = scrollValue;
  };

  const getScrollSize = () => {
    const containerSize = carousel.current.clientWidth;
    let totalSize = 0;
    const children = Array.from(carousel.current.children);

    for (let i = 0; i < children.length; i += 1) {
      const item = children[i];
      if (totalSize + item.clientWidth > containerSize) {
        if (i === 0) {
          totalSize = containerSize;
        }
        break;
      }
      totalSize += item.clientWidth;
    }

    return totalSize;
  };

  const handleStartScrollClick = () => {
    moveCarouselScroll(-1 * getScrollSize());
  };

  const handleEndScrollClick = () => {
    moveCarouselScroll(getScrollSize());
  };

  useEffect(() => {
    const itemListChildren = Array.from(carousel.current.children);
    const length = itemListChildren.length;

    if (typeof IntersectionObserver !== 'undefined' && length > 0) {
      const firstItem = itemListChildren[0];
      const lastItem = itemListChildren[length - 1];
      const observerOptions = {
        root: carousel.current,
        threshold: 0.99,
      };

      const handleScrollButtonStart = (entries) => {
        setDisplayStartScroll(!entries[0].isIntersecting);
      };
      const firstObserver = new IntersectionObserver(
        handleScrollButtonStart,
        observerOptions
      );
      firstObserver.observe(firstItem);

      const handleScrollButtonEnd = (entries) => {
        setDisplayEndScroll(!entries[0].isIntersecting);
      };
      const lastObserver = new IntersectionObserver(
        handleScrollButtonEnd,
        observerOptions
      );
      lastObserver.observe(lastItem);

      return () => {
        firstObserver.disconnect();
        lastObserver.disconnect();
      };
    }

    return undefined;
  }, []);

  return {
    handleStartScrollClick,
    handleEndScrollClick,
    displayStartScroll,
    displayEndScroll,
  };
}
