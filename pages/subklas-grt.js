import React, { Component } from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/Layouts/Footer";
import SubklasContentGrt from "../components/Services/SubklasContentGrt";

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
          breadcrumbTextFour="Grouting"
          breadcrumbUrl="/"
          bgImage="banner-bg-img3"
        />

        <SubklasContentGrt />

        <Footer />
      </>
    );
  }
}

export default ServiceDetails;
