import React from 'react'
import SpecsSectionStyles from "./SpecsSection.module.css"
import { OverlayTrigger, Tooltip } from 'react-bootstrap'
const SpecsSection = ({car}) => {
  return (
    <>
     <div className="d-flex justify-content-between py-3">

<OverlayTrigger key="doors" placement="top" overlay={<Tooltip id={`tooltip-top`}>Number of doors</Tooltip>}>

      <div className={`${SpecsSectionStyles.options} d-flex align-items-center mx-1`}>
      <svg  fill="#000000" width="24px" height="24px" viewBox="0 0 24.00 24.00" id="car-door-4" data-name="Line Color" xmlns="http://www.w3.org/2000/svg" className="icon line-color">
  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
  <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
  <g id="SVGRepo_iconCarrier">
    <line id="secondary" x1="14" y1="15" x2="16" y2="15" style={{ fill: 'none', stroke: '#000000', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2 }}></line>
    <path id="primary" d="M19,21H5a1,1,0,0,1-1-1V11.41a1,1,0,0,1,.29-.7l7.42-7.42a1,1,0,0,1,.7-.29H19a1,1,0,0,1,1,1V20A1,1,0,0,1,19,21ZM4.1,11H20" style={{ fill: 'none', stroke: '#000000', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2 }}></path>
  </g>
</svg>
      <span className='ms-1'>{car?.model.doors}</span>
      </div>

</OverlayTrigger>
{/* <OverlayTrigger key="luggage" placement="top" overlay={<Tooltip id={`tooltip-top`}>Number of luggage bag</Tooltip>}>

    <div className={`${SpecsSectionStyles.options} d-flex align-items-center mx-1`}>
    <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
      <g id="SVGRepo_iconCarrier">
        <path d="M9 11V6C9 4.34315 10.3431 3 12 3C13.6569 3 15 4.34315 15 6V10.9673M10.4 21H13.6C15.8402 21 16.9603 21 17.816 20.564C18.5686 20.1805 19.1805 19.5686 19.564 18.816C20 17.9603 20 16.8402 20 14.6V12.2C20 11.0799 20 10.5198 19.782 10.092C19.5903 9.71569 19.2843 9.40973 18.908 9.21799C18.4802 9 17.9201 9 16.8 9H7.2C6.0799 9 5.51984 9 5.09202 9.21799C4.71569 9.40973 4.40973 9.71569 4.21799 10.092C4 10.5198 4 11.0799 4 12.2V14.6C4 16.8402 4 17.9603 4.43597 18.816C4.81947 19.5686 5.43139 20.1805 6.18404 20.564C7.03968 21 8.15979 21 10.4 21Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
      </g>
    </svg>
     <span className='ms-1'>2</span>
    </div>
    </OverlayTrigger> */}
    <OverlayTrigger key="minDays"  placement="top" overlay={<Tooltip id={`tooltip-top`}>Minimum days for rent</Tooltip>}>

    <div className={`${SpecsSectionStyles.options} d-flex align-items-center mx-1`}>
    <svg className='me-2' xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
<g clipPath="url(#clip0_713_123)">
<path d="M14.6458 1.58333H14.25V1.1875C14.25 0.872555 14.1249 0.57051 13.9022 0.347811C13.6795 0.125111 13.3774 0 13.0625 0V0C12.7476 0 12.4455 0.125111 12.2228 0.347811C12.0001 0.57051 11.875 0.872555 11.875 1.1875V1.58333H7.125V1.1875C7.125 0.872555 6.99989 0.57051 6.77719 0.347811C6.55449 0.125111 6.25244 0 5.9375 0V0C5.62256 0 5.32051 0.125111 5.09781 0.347811C4.87511 0.57051 4.75 0.872555 4.75 1.1875V1.58333H4.35417C3.19937 1.58333 2.09187 2.04207 1.27531 2.85864C0.458741 3.6752 0 4.7827 0 5.9375L0 14.6458C0 15.8006 0.458741 16.9081 1.27531 17.7247C2.09187 18.5413 3.19937 19 4.35417 19H14.6458C15.8006 19 16.9081 18.5413 17.7247 17.7247C18.5413 16.9081 19 15.8006 19 14.6458V5.9375C19 4.7827 18.5413 3.6752 17.7247 2.85864C16.9081 2.04207 15.8006 1.58333 14.6458 1.58333V1.58333ZM14.6458 16.625H4.35417C3.82926 16.625 3.32585 16.4165 2.95468 16.0453C2.58352 15.6742 2.375 15.1707 2.375 14.6458V7.91667H16.625V14.6458C16.625 15.1707 16.4165 15.6742 16.0453 16.0453C15.6742 16.4165 15.1707 16.625 14.6458 16.625Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_713_123">
<rect width="19" height="19" fill="white"/>
</clipPath>
</defs>
        </svg>
    <span >{car?.minDays}</span>
    </div>
    </OverlayTrigger>
    <OverlayTrigger key="carType" placement="top" overlay={<Tooltip id={`tooltip-top`}>Car Type </Tooltip>}>

    <div className={`${SpecsSectionStyles.options} d-flex align-items-center mx-1`}>
    <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M3 8L5.72187 10.2682C5.90158 10.418 6.12811 10.5 6.36205 10.5H17.6379C17.8719 10.5 18.0984 10.418 18.2781 10.2682L21 8M6.5 14H6.51M17.5 14H17.51M8.16065 4.5H15.8394C16.5571 4.5 17.2198 4.88457 17.5758 5.50772L20.473 10.5777C20.8183 11.1821 21 11.8661 21 12.5623V18.5C21 19.0523 20.5523 19.5 20 19.5H19C18.4477 19.5 18 19.0523 18 18.5V17.5H6V18.5C6 19.0523 5.55228 19.5 5 19.5H4C3.44772 19.5 3 19.0523 3 18.5V12.5623C3 11.8661 3.18166 11.1821 3.52703 10.5777L6.42416 5.50772C6.78024 4.88457 7.44293 4.5 8.16065 4.5ZM7 14C7 14.2761 6.77614 14.5 6.5 14.5C6.22386 14.5 6 14.2761 6 14C6 13.7239 6.22386 13.5 6.5 13.5C6.77614 13.5 7 13.7239 7 14ZM18 14C18 14.2761 17.7761 14.5 17.5 14.5C17.2239 14.5 17 14.2761 17 14C17 13.7239 17.2239 13.5 17.5 13.5C17.7761 13.5 18 13.7239 18 14Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
     <span className='ms-1 text-uppercase'>{car?.model.type.name}</span>
    </div>
    </OverlayTrigger>


                </div> 
    </>
  )
}

export default SpecsSection
