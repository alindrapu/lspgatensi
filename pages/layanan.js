import React, { Component } from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import FeaturedService from "../components/Services/FeaturedService";
import ServicesContent from "../components/Services/ServicesContent";
import SubscribeStyleThree from "../components/Common/SubscribeStyleThree";
import Footer from "../components/Layouts/Footer";
import OurServices from "../components/HomeOne/OurServices";

class Services extends Component {
  render() {
    return (
      <>
        <Navbar />

        <PageBanner
          pageTitle="Layanan Kami"
          breadcrumbTextOne="Beranda"
          breadcrumbTextTwo="Layanan"
          breadcrumbTextThree="Layanan Kami"
          breadcrumbUrl="/"
          bgImage="banner-bg-img4"
        />

        {/* <FeaturedService /> */}

        <OurServices />

        {/* <div className="pb-100">
          <SubscribeStyleThree />
        </div> */}

        <Footer />
      </>
    );
  }
}

export default Services;
