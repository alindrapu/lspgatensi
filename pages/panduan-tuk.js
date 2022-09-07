import React, { Component } from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import ContentPanduanSertifikasi from "../components/PanduanSertifikasi/ContentPanduanSertifikasi";
import Footer from "../components/Layouts/Footer";
import ContentPanduanTUK from "../components/Tuk/ContentPanduanTUK";

class PanduanTUK extends Component {
  render() {
    return (
      <>
        <Navbar />

        <PageBanner
          pageTitle="Panduan TUK"
          breadcrumbTextOne="Beranda"
          breadcrumbTextTwo="Layanan"
          breadcrumbTextThree="Panduan TUK"
          breadcrumbUrl="/"
          bgImage="banner-bg-img3"
        />

        <ContentPanduanTUK />

        {/* <div className="pb-100">
                    <SubscribeStyleThree />
                </div> */}

        <Footer />
      </>
    );
  }
}

export default PanduanTUK;
