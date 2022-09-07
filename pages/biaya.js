import React, { Component } from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import ContentBiaya from "../components/Pricing/ContentBiaya";
import Footer from "../components/Layouts/Footer";

class Pricing extends Component {
  render() {
    return (
      <>
        <Navbar />

        <PageBanner
          pageTitle="Biaya"
          breadcrumbTextOne="Beranda"
          breadcrumbTextTwo="Sertifikasi"
          breadcrumbTextThree="Biaya"
          breadcrumbUrl="/"
          bgImage="banner-bg-img3"
        />

        <ContentBiaya />

        {/* <div className="pb-100">
                    <SubscribeStyleThree />
                </div> */}

        <Footer />
      </>
    );
  }
}

export default Pricing;
