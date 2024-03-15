import React from 'react';
import SectionHeaderStyles from './SectionHeader.module.css';
import ActionButton from '../ActionButton/ActionButton';
const SectionHeader = ({ title, subTitle, section, url ,className }) => {
  return (
    <>
      <div className='sectionHeader mb-4'>
        <div className='subtitle tw-flex tw-items-center tw-justify-between'>
          <div className='tw-w-3/4 pe-3'>
            <h2 className={`${SectionHeaderStyles.mainTitle} mb-0 text-nowrap`}>{title}</h2>
            <p className='m-0'>{subTitle}</p>
          </div>
          <ActionButton url={url} className={className} />
        </div>
      </div>
    </>
  );
};

export default SectionHeader;
