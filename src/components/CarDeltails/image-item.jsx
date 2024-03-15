import clsx from 'clsx';

export function ImageItem({ index, image, onClick }) {
  return (
    
    <div
      onClick={onClick}
      className={clsx(
        'tw-relative tw-w-full tw-cursor-pointer tw-h-80 hover:tw-opacity-50 tw-transform tw-transition tw-duration-300 tw-ease-out tw-bg-gray-100 tw-rounded-xl',
        index === 0
          ? 'tw-col-span-12 lg:tw-col-span-6  tw-row-span-4 lg:tw-h-[400px]'
          : 'tw-col-span-3 lg:tw-row-span-2 lg:tw-h-[196px] tw-h-[80px]'
      )}
    >
      <img
        src={image}
        alt=''
        className='tw-rounded-xl tw-object-cover tw-w-full tw-h-full'
      />
    </div>
  );
}
