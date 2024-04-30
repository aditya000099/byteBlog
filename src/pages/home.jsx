import React from 'react';
import Category from "../components/category";
import Header from "../components/header";
import FeaturedSection from '../components/featured';

const HomePage = () => {
  return (
    <div>
    {/* <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden"> */}
    <div className="overflow-hidden" >
      <Header />
      <FeaturedSection/>
      <Category/>
      </div>
    </div>
  )
}

export default HomePage