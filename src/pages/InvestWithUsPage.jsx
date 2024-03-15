import React from 'react';
import ReactHelmet from '../components/ReactHelmet/ReactHelmet';
import InvestWithUs from '../components/InvestWithUs/InvestWithUs';
import AMPInvestWithUs from '../components/InvestWithUs/AMPInvestWithUs ';
export default function InvestWithUsPage() {
  return (
    <>
      <ReactHelmet title={'CarWins | Invest With Us'} />
      <div style={{minHeight:"100vh" }}>  
   <AMPInvestWithUs/>

      </div>
    </>
  );
}
