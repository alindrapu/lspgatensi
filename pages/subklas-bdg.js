import React, { Component } from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/Layouts/Footer";
import SubklasContentBdg from "../components/Subklas/SubklasContentBdg";

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
          breadcrumbTextFour="Bendung dan Bendungan"
          breadcrumbUrl="/"
          bgImage="banner-bg-img3"
        />

        <SubklasContentBdg />

        <Footer />
      </>
    );
  }
}

export default ServiceDetails;
