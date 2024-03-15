import React from 'react'
import ReactHelmetStyles from "./ReactHelmet.module.css"
import { Helmet } from 'react-helmet'
const ReactHelmet = ({title}) => {
  return (
    <>
   <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
        <meta name="robots" content="index, follow"/>

        <meta name="referrer" content="no-referrer" />
        <meta http-equiv="X-Frame-Options" content="SAMEORIGIN" />
        <meta http-equiv="X-Content-Type-Options" content="nosniff" />
        {/* <meta http-equiv="Content-Security-Policy" content="default-src 'self'" /> */}
        <meta name="description" content="Explore the best car rental services in Dubai with Cars Win. Rent a wide range of vehicles, from luxury sedans to spacious SUVs, for your travel needs. Enjoy competitive rates, hassle-free booking, and exceptional customer service. Discover the freedom of driving with Cars Win today!"/>
        <meta name="keywords" content="car rental Dubai, Dubai car hire, luxury car rental, SUV rental, rent a car Dubai, affordable car rental, premium car hire, Dubai travel, vehicle rental, Cars Win"/>
        {/* <link rel="canonical" href="https://www.oneclickdrive.com" /> */}
      
        <meta property="og:title" content="Cars Win - Premier Car Rental in Dubai"/>
        <meta property="og:description" content="Explore the best car rental services in Dubai with Cars Win. Rent luxury sedans, SUVs, and more for your travel needs. Competitive rates, hassle-free booking, and exceptional service."/>
        <meta property="og:image" content="./src/assets/images/Logo.svg"/>
        <meta property="og:url" content="https://www.carswin.com"/>
        <meta property="og:type" content="website"/>

        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:site" content="@yourtwitterhandle"/>
        <meta name="twitter:title" content="Cars Win - Premier Car Rental in Dubai"/>
        <meta name="twitter:description" content="Explore the best car rental services in Dubai with Cars Win. Rent luxury sedans, SUVs, and more for your travel needs. Competitive rates, hassle-free booking, and exceptional service."/>
        <meta name="twitter:image" content="./src/assets/images/Logo.svg"/>
        <meta name="twitter:url" content="https://www.carswin.com"/>
        
    </Helmet> 
    </>
  )
}

export default ReactHelmet
