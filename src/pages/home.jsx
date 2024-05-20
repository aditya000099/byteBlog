import React from 'react';
import Category from "../components/category";
import Header from "../components/header";
import FeaturedSection from '../components/featured';
import SubscribeSection from '../components/subscribe';
import Footer from '../components/footer';
import Blogs from '../components/homeblogs';
import News from './newspage';

const HomePage = () => {
  return (
    <div>
    {/* <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden"> */}
    <div className="overflow-hidden" >
      <Header />
      <FeaturedSection/>
      <Category/>
      <Blogs />
      <News />
      <SubscribeSection />
      <Footer />
      </div>
    </div>
  )
}

export default HomePage