import React, { Component } from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/Layouts/Footer";
import SubklasContentBg from "../components/Services/SubklasContentBg";

class ServiceDetails extends Component {
  render() {
    return (
      <>
        <Navbar />

        <PageBanner
          pageTitle="Subklasifikasi"
          breadcrumbTextOne="Beranda"
          breadcrumbTextTwo="Subklasifikasi"
          breadcrumbTextThree="Gedung"
          breadcrumbTextFour="Jabatan Kerja"
          breadcrumbUrl="/"
          bgImage="banner-bg-img3"
        />

        <SubklasContentBg />

        <Footer />
      </>
    );
  }
}

export default ServiceDetails;
