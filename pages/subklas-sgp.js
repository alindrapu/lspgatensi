import React, { Component } from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/Layouts/Footer";
import SubklasContentSgp from "../components/Services/SubklasContentSgp";

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

        <SubklasContentSgp />

        <Footer />
      </>
    );
  }
}

export default ServiceDetails;
