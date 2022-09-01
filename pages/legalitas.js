import React, { Component } from "react";
import LegalitasContent from "../components/AboutUs/LegalitasContent";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/Layouts/Footer";

class Legalitas extends Component {
  render() {
    return (
      <>
        <Navbar />

        <PageBanner
          pageTitle="Tentang Kami"
          breadcrumbTextOne="Beranda"
          breadcrumbTextTwo="Profil"
          breadcrumbTextThree="Legalitas"
          breadcrumbUrl="/"
          bgImage="banner-bg-img1"
        />

        <LegalitasContent />

        <Footer />
      </>
    );
  }
}

export default Legalitas;
