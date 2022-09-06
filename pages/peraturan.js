import React, { Component } from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";

import Footer from "../components/Layouts/Footer";
import ContentPeraturan from "../components/DasarHukum/ContentPeraturan";

class PanduanSertifikasi extends Component {
  render() {
    return (
      <>
        <Navbar />

        <PageBanner
          pageTitle="Peraturan"
          breadcrumbTextOne="Beranda"
          breadcrumbTextTwo="Dasar Hukum"
          breadcrumbTextThree="Peraturan"
          breadcrumbUrl="/"
          bgImage="banner-bg-img3"
        />

        <ContentPeraturan />

        <Footer />
      </>
    );
  }
}

export default PanduanSertifikasi;
