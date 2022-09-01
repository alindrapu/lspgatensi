import React, { Component } from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import ContentPanduanSertifikasi from "../components/PanduanSertifikasi/ContentPanduanSertifikasi";
import Footer from "../components/Layouts/Footer";

class PanduanSertifikasi extends Component {
  render() {
    return (
      <>
        <Navbar />

        <PageBanner
          pageTitle="Panduan Sertifikasi"
          breadcrumbTextOne="Home"
          breadcrumbTextTwo="Sertifikasi"
          breadcrumbTextThree="Panduan Sertifikasi"
          breadcrumbUrl="/"
          bgImage="banner-bg-img3"
        />

        <ContentPanduanSertifikasi />

        {/* <div className="pb-100">
                    <SubscribeStyleThree />
                </div> */}

        <Footer />
      </>
    );
  }
}

export default PanduanSertifikasi;
