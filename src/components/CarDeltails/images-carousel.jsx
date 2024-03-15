import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../ui/carousel';

export function ImagesCarousel({ images }) {
  return (
    <Carousel className='tw-w-full tw-max-w-2xl'>
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index}>
            <div className='tw-relative tw-w-full tw-h-full tw-max-h-[calc(100vh-100px)]'>
              <img
                src={image.value}
                alt=''
                className='tw-object-contain tw-w-full tw-h-full'
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className='tw-hidden lg:tw-flex' />
      <CarouselNext className='tw-hidden lg:tw-flex' />
    </Carousel>
  );
}
