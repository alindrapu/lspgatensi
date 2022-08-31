import React, { Component } from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/Layouts/Footer";
import OurServices from "../components/HomeOne/DaftarSubklas";
import DaftarSubklas from "../components/HomeOne/DaftarSubklas";

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

        <DaftarSubklas />

        {/* <div className="pb-100">
          <SubscribeStyleThree />
        </div> */}

        <Footer />
      </>
    );
  }
}

export default Services;
