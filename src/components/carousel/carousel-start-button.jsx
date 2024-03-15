import { BackArrow } from './back-arrow';

export function CarouselStartButton({ onClick, disabled, ...rest }) {
  return (
    <button
      className='tw-w-10 tw-h-10 tw-rounded-full tw-flex tw-items-center tw-justify-center tw-p-px tw-bg-white disabled:tw-opacity-0 disabled:tw-pointer-events-none tw-shadow-lg hover:tw-scale-105 tw-transition tw-transform tw-duration-150 tw-ease-out [&>svg]:tw-w-5 [&>svg]:tw-h-5 -tw-mx-5 tw-absolute -tw-translate-y-1/2 tw-left-0'
      onClick={onClick}
      disabled={disabled}
      {...rest}
    >
      <BackArrow />
    </button>
  );
}
