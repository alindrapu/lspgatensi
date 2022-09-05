import React, { Component } from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/Layouts/Footer";
import SubklasContentBp from "../components/Subklas/SubklasContentBp";

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
          breadcrumbTextFour="Bangunan Persampahan"
          breadcrumbUrl="/"
          bgImage="banner-bg-img3"
        />

        <SubklasContentBp />

        <Footer />
      </>
    );
  }
}

export default ServiceDetails;
