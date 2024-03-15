import React from 'react';
import logoImage from '../../assets/images/LogoIcon.png';

const OrganizationSchema = () => {
 const logoBase64 = `data:image/png;base64,${logoImage}`;
 
    const organizationSchema = {
        "@context": "http://schema.org",
        "@type": "Organization",
        "name": "Car Wins",
        "url": "https://carwins.app/",
        "logo": logoBase64,
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+971527711325",
            "contactType": "Customer service"
        }
    };

    return (
        <script type="application/ld+json">
            {JSON.stringify(organizationSchema)}
        </script>
    );
};

export default OrganizationSchema;
