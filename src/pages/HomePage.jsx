import React from 'react';
import Home from '../components/Home/Home';
import ReactHelmet from '../components/ReactHelmet/ReactHelmet';
import OrganizationSchema from '../components/OrganizationSchema/OrganizationSchema';
export default function HomePage() {
  return (
    <>
      <ReactHelmet title={'CarWins | Home'} />
      <Home />
      <OrganizationSchema />
    </>
  );
}
