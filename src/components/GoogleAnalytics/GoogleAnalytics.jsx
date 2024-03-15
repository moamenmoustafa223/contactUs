// Create a new file, for example, GoogleAnalytics.js
import React, { useEffect } from 'react';

const GoogleAnalytics = () => {
  useEffect(() => {
    // Google Analytics tracking code
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date()); 
    
    gtag('config', 'AW-11483227305');

    // Ensure gtag() is available for other components
    window.gtag = gtag;
  }, []);

  return null; // Google Analytics doesn't need to render anything in the DOM
};

export default GoogleAnalytics;
