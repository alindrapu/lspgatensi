import React, { Component } from "react";
import Navbar from "../components/Layouts/Navbar";
import MainBanner from "../components/HomeOne/MainBanner";
import OurServices from "../components/HomeOne/DaftarSubklas";
import AboutUs from "../components/HomeOne/AboutUs";
import FunFacts from "../components/Common/FunFacts";
import WorkingProcess from "../components/HomeOne/WorkingProcess";
import FeaturedService from "../components/HomeOne/FeaturedService";
import Testimonial from "../components/Common/Testimonial";
import GetStartedProject from "../components/Common/GetStartedProject";
import BlogPost from "../components/Common/BlogPost";
import Customers from "../components/Common/Customers";
import Subscribe from "../components/Common/Subscribe";
import Footer from "../components/Layouts/Footer";
import DaftarSubklas from "../components/HomeOne/DaftarSubklas";
import PricingContent from "./biaya";

class Index extends Component {
  render() {
    return (
      <>
        <Navbar />

        <MainBanner />

        <DaftarSubklas />

        <PricingContent />

        {/* <AboutUs /> */}

        {/* <FunFacts /> */}

        <WorkingProcess />

        {/* <div className="pb-100">
          <FeaturedService />
        </div> */}

        {/* <Testimonial /> */}

        <GetStartedProject />

        {/* <BlogPost /> */}

        {/* <Customers /> */}

        {/* <Subscribe /> */}

        <Footer />
      </>
    );
  }
}

export default Index;
