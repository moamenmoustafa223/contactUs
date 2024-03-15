import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '../ui/sheet';
import { ImagesCarousel } from './images-carousel';

export function ImagesSheet({ images, isOpen, handleOnOpen }) {
  return (
    <Sheet onOpenChange={handleOnOpen} open={isOpen}>
      <SheetContent side='bottom' className='tw-h-screen'>
        <div className='tw-flex tw-flex-col tw-h-full tw-justify-center tw-items-center'>
          <ImagesCarousel images={images} />
        </div>
        <SheetFooter></SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
