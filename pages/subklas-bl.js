import React, { Component } from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/Layouts/Footer";
import SubklasContentBl from "../components/Services/SubklasContentBl";

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
          breadcrumbTextFour="Sungai dan Pantai"
          breadcrumbUrl="/"
          bgImage="banner-bg-img3"
        />

        <SubklasContentBl />

        <Footer />
      </>
    );
  }
}

export default ServiceDetails;
