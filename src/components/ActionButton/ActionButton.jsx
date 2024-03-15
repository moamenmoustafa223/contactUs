import ActionButtonStyles from './ActionButton.module.css';
import { Link } from 'react-router-dom';
const ActionButton = ({
  vendorUserId,
  filterbycategory,
  filterbytype,
  url,
  className
}) => {
  return (
    <>
      <Link
        to={url}
        className={` ${ActionButtonStyles.wrap} ${className} btnCustom m-0 rounded-4 tw-shrink-0 tw-flex tw-items-center text-black`}
      >
        Show More{' '}
        <svg
          width='14'
          height='14'
          viewBox='0 0 14 14'
          className='ms-2'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M13.1637 1.48529C13.1637 1.01585 12.7832 0.635287 12.3137 0.635287L4.66371 0.635287C4.19427 0.635287 3.81371 1.01585 3.81371 1.48529C3.81371 1.95473 4.19427 2.33529 4.66371 2.33529L11.4637 2.33529L11.4637 9.13529C11.4637 9.60473 11.8443 9.98529 12.3137 9.98529C12.7832 9.98529 13.1637 9.60473 13.1637 9.13529L13.1637 1.48529ZM1.60104 13.4L12.9147 2.08633L11.7127 0.884247L0.398959 12.198L1.60104 13.4Z'
            fill='#D49F15'
          />
        </svg>
      </Link>
    </>
  );
};

export default ActionButton;
