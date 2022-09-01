import React, { Component } from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/Layouts/Footer";
import DaftarSubklas from "../components/HomeOne/DaftarSubklas";

class Services extends Component {
  render() {
    return (
      <>
        <Navbar />

        <PageBanner
          pageTitle="Subklasifikasi"
          breadcrumbTextOne="Beranda"
          breadcrumbTextTwo="Layanan"
          breadcrumbTextThree="Subklasifikasi"
          breadcrumbUrl="/"
          bgImage="banner-bg-img4"
        />

        <DaftarSubklas />

        <Footer />
      </>
    );
  }
}

export default Services;
