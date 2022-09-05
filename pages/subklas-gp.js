import React, { Component } from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/Layouts/Footer";
import SubklasContentGp from "../components/Subklas/SubklasContentGp";

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
          breadcrumbTextFour="Geoteknik dan Pondasi"
          breadcrumbUrl="/"
          bgImage="banner-bg-img3"
        />

        <SubklasContentGp />

        <Footer />
      </>
    );
  }
}

export default ServiceDetails;
