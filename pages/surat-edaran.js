import React, { Component } from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/Layouts/Footer";
import ContentSuratEdaran from "../components/DasarHukum/ContentSuratEdaran";

class SuratEdaran extends Component {
  render() {
    return (
      <>
        <Navbar />

        <PageBanner
          pageTitle="Surat Edaran"
          breadcrumbTextOne="Beranda"
          breadcrumbTextTwo="Dasar Hukum"
          breadcrumbTextThree="Surat Edaran"
          breadcrumbUrl="/"
          bgImage="banner-bg-img3"
        />

        <ContentSuratEdaran />

        <Footer />
      </>
    );
  }
}

export default SuratEdaran;
