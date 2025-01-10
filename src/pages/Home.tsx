import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Banner from '../components/Banner';
import EconomicViews from '../components/EconomicViews';
import InvestmentResearch from '../components/InvestmentResearch';
import PrivateAssets from '../components/PrivateAssets';

const Home = () => {
  return (
    <>
      <Banner />
      <Features />
      <InvestmentResearch />
      <EconomicViews />
      <PrivateAssets />


    </>
  );
};

export default Home;