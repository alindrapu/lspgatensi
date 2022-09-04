import React, { Component } from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/Layouts/Footer";
import SubklasContentJlr from "../components/Subklas/SubklasContentJlr";

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
          breadcrumbTextFour="Jalan Rel"
          breadcrumbUrl="/"
          bgImage="banner-bg-img3"
        />

        <SubklasContentJlr />

        <Footer />
      </>
    );
  }
}

export default ServiceDetails;
