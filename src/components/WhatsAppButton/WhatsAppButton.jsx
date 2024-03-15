import React from 'react'
import WhatsAppButtonStyles from "./WhatsAppButton.module.css"
const WhatsAppButton = ({car}) => {
  const handleWhatsAppOpen = (vendorNumber, carDetails,event) => {
    event.preventDefault();
    event.stopPropagation();
    const { vendorName, cardetails } = carDetails;
    const message = `I want to know more about this car: ${window.location.href}\n\n Car Details: ${cardetails.carBrandName} ${cardetails.carModelName} ${cardetails.carYear} \n By Vendor: ${vendorName}`;
    const whatsappUrl = `https://wa.me/${vendorNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, '_blank');
  };

  const whatsappNumber =
  car.vendor.whatsappNumbers[0].value
      ? car.vendor.whatsappNumbers[0].value
      : '+971527711325';
      
  return (
    <>

  <button
      className='btnCustom btnFilled fw-bold rounded-3 w-100 px-2 d-flex align-items-center  justify-content-center  text-nowrap'
      onClick={(event) =>
        handleWhatsAppOpen(whatsappNumber, {
          vendorName: car.vendor.name,
          cardetails: {
            carBrandName: car.model.brand.name,
            carModelName: car.model.name,
            carYear: car.year,
          },
        },event)
      }
    >
     <i className="fa-brands  fa-whatsapp fs-5 me-2"></i>{''} BOOK NOW
    </button>
    </>
  )
}

export default WhatsAppButton
