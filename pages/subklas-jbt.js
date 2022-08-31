import React, { Component } from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/Layouts/Footer";
import SubklasContentJbt from "../components/Services/SubklasContentJbt";

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
          breadcrumbTextFour="Jalan"
          breadcrumbUrl="/"
          bgImage="banner-bg-img3"
        />

        <SubklasContentJbt />

        <Footer />
      </>
    );
  }
}

export default ServiceDetails;
