import React, { Component } from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/Layouts/Footer";
import SubklasContentBm from "../components/Subklas/SubklasContentBm";

class ServiceDetails extends Component {
  render() {
    return (
      <>
        <Navbar />

        <PageBanner
          pageTitle="Subklasifikasi"
          breadcrumbTextOne="Beranda"
          breadcrumbTextTwo="Subklasifikasi"
          breadcrumbTextThree="Jabatan Kerja"
          breadcrumbTextFour="Bangunan Air Minum"
          breadcrumbUrl="/"
          bgImage="banner-bg-img3"
        />

        <SubklasContentBm />

        <Footer />
      </>
    );
  }
}

export default ServiceDetails;
