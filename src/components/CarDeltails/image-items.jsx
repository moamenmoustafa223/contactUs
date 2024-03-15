import { useState } from 'react';
import { ImageItem } from './image-item';
import { ImagesSheet } from './images-sheet';

export function ImageItems({ images }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOnOpen = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className='tw-mb-8 tw-z-10'>
      <div className='tw-grid tw-grid-cols-1 md:tw-grid-cols-12 tw-grid-rows-4 tw-gap-2'>
        {images
          .slice()
          .splice(0, 5)
          .map((image, index) => (
            <ImageItem
              image={image.value}
              index={index}
              key={image.id}
              onClick={handleOnOpen}
            />
          ))}
      </div>

      <ImagesSheet
        images={images}
        isOpen={isOpen}
        handleOnOpen={handleOnOpen}
      />
    </div>
  );
}
