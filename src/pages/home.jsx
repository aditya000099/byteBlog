import React from "react";
import Category from "../components/category";
import Header from "../components/header";
import FeaturedSection from "../components/featured";
import SubscribeSection from "../components/subscribe";
import Footer from "../components/footer";
import Blogs from "../components/homeblogs";
import News from "./newspage";
import SearchBar from "../components/searchbar";
import { motion } from "framer-motion";

const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };

const HomePage = () => {
  return (
    <motion.div exit={{opacity:0}} transition={transition}>
      {/* <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden"> */}
      <div className="overflow-hidden">
        <Header />
        {/* <SearchBar /> */}
        <FeaturedSection />
        <Category />
        <Blogs />
        <News />
        <SubscribeSection />
        <Footer />
      </div>
    </motion.div>
  );
};

export default HomePage;
