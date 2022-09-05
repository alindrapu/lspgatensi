import React, { Component } from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/Layouts/Footer";
import SubklasContentAbk from "../components/Subklas/SubklasContentAbk";

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
          breadcrumbTextFour="Air Tanah dan Air Baku"
          breadcrumbUrl="/"
          bgImage="banner-bg-img3"
        />

        <SubklasContentAbk />

        <Footer />
      </>
    );
  }
}

export default ServiceDetails;
