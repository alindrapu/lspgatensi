import React, { Component } from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/Layouts/Footer";
import SubklasContentDp from "../components/Services/SubklasContentDp";

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
          breadcrumbTextFour="Drainase Perkotaan"
          breadcrumbUrl="/"
          bgImage="banner-bg-img3"
        />

        <SubklasContentDp />

        <Footer />
      </>
    );
  }
}

export default ServiceDetails;
