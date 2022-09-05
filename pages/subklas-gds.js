import React, { Component } from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/Layouts/Footer";
import SubklasContentGds from "../components/Subklas/SubklasContentGds";

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
          breadcrumbTextFour="Geodesi"
          breadcrumbUrl="/"
          bgImage="banner-bg-img3"
        />

        <SubklasContentGds />

        <Footer />
      </>
    );
  }
}

export default ServiceDetails;
