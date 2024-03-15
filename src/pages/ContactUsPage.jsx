import React from 'react';
import ReactHelmet from '../components/ReactHelmet/ReactHelmet';
import ContactUs from '../components/ContactUs/ContactUs';
export default function ContactUsPage() {
  return (
    <>
      <ReactHelmet title={'CarWins | Contact Us'} />
      <div style={{minHeight:"100vh" }}>  
   <ContactUs/>

      </div>
    </>
  );
}
